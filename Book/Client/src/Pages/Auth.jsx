import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import { googleLoginAPI, loginAPI, registerAPI } from '../Services/allAPI'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


function Auth({ insideRegister }) {

  const navigate = useNavigate()
  const [toggledPassword, setToggledPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      username: "demo",
      email: "",
      password: ""
    },

    validationSchema: Yup.object({
      username: Yup.string().min(3, "Must contain atleast 3 characters").required("username required"),
      email: Yup.string().email("Invalid email").required("email required"),
      password: Yup.string().required("Invalid password")
    }),


    onSubmit: (values, { resetForm }) => {
      console.log(values)
      if (insideRegister) {
        console.log("Register API")
        handleRegister(values)
      }
      else {
        console.log("Login API")
        handleLogin(values)
      }

      resetForm()
    }

  })


  //register handle
  const handleRegister = async (userData) => {

    const result = await registerAPI(userData)
    console.log(result)

    if (result.status == 201) {
      toast.success("User Registered")
      navigate('/login')
    }
    else {
      toast.error(result.response)
    }
  }

  //login handle
  const handleLogin = async (userData) => {

    const result = await loginAPI(userData)
    console.log(result)

    if (result.status == 200) {
      toast.success("Login Successfully")

      sessionStorage.setItem("token", result.data.token)
      sessionStorage.setItem("user", JSON.stringify(result.data.user))

      setTimeout(() => {
        if (result.data.user.role == "admin") {
          navigate('/admin/dashboard')
        }
        else {
          navigate('/')
        }
      }, 3000)
    }
    else {
      toast.error(result.response)
    }
  }

  //googleLogin
  const handleGoogleLogin = async (credentialResponse) => {

    console.log("Inside Google Login");
    console.log(credentialResponse)

    const { email, name, picture } = jwtDecode(credentialResponse.credential)
    console.log(email, name, picture)

    //api call
    const result = await googleLoginAPI({ email, username: name, password: "googlePassword", picture })
    console.log(result);

    if (result.status == 200) {
      toast.success("Login Successfully")

      sessionStorage.setItem("token", result.data.token)
      sessionStorage.setItem("user", JSON.stringify(result.data.user))

        if (result.data.user.role == "admin") {
          navigate('/admin/dashboard')
        }
        else {
          navigate('/')
        }
    }
    else {
      toast.error(result.response)
    }

  }


  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center bg-[url(/landing.jpg)] bg-cover bg-center text-white'>
        <div className='p-10'>
          <h1 className='text-center font-bold text-4xl'>BOOK STORE</h1>
          <div style={{ width: '400px' }} className='bg-black text-white p-5 flex justify-center items-center flex-col my-5'>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%' }} className='border mb-5 flex justify-center items-center'>
              <FaUser className='text-3xl' />
            </div>
            <h1 className='text-2xl'>{insideRegister ? 'Register' : 'Login'}</h1>
            <form className='my-5 w-full' onSubmit={formik.handleSubmit}>

              {/* username */}
              {insideRegister && <>
                <input name='username' value={formik.values.username} onChange={formik.handleChange} className='bg-white p-2 w-full rounded mt-5 mb-3 text-black' type='text' placeholder='Username' />
                <div className='mb-3 text-xs text-yellow-400'>{formik.errors.username}</div>
              </>}

              {/* email */}
              <input name='email' value={formik.values.email} onChange={formik.handleChange} className='bg-white p-2 w-full rounded mt-5 mb-3 text-black' type='text' placeholder='e-mail' />
              <div className='mb-3 text-xs text-yellow-400'>{formik.errors.email}</div>

              {/* password */}
              <div className='flex items-center'>
                <input name='password' value={formik.values.password} onChange={formik.handleChange} className='bg-white p-2 w-full rounded mt-5 mb-3 text-black' placeholder='password' type={toggledPassword ? "text" : "password"} />

                {toggledPassword ?

                  <FaEyeSlash onClick={() => setToggledPassword(!toggledPassword)} className='text-gray-500 cursor-pointer' style={{ marginTop: '10px', marginLeft: '-30px' }} />
                  :
                  <FaEye onClick={() => setToggledPassword(!toggledPassword)} className='text-gray-500 cursor-pointer' style={{ marginTop: '10px', marginLeft: '-30px' }} />

                }
              </div>

              <div className='mb-3 text-xs text-yellow-400'>{formik.errors.password}</div>

              {/* forgot password  */}
              <div className='flex justify-between mb-5 mt-2'>
                <p className='text-xs text-orange-300'>Never share your password with others..</p>
                {!insideRegister &&
                  <button className='text-xs underline'>Forgot Password?</button>}
              </div>

              {/* login or register button */}
              <div className='text-center'>
                {insideRegister ?
                  <button type='submit' className='bg-green-700 p-2 w-full rounded'>Register</button>
                  :
                  <button type='submit' className='bg-green-700 p-2 w-full rounded'>Login</button>}
              </div>

              {/* google authentication */}
              {!insideRegister &&
                <div className='my-5 text-center'>
                  <p>--------------------------------- or ---------------------------------</p>
                  <div className='mt-2 flex justify-center items-center w-full'>
                    <GoogleLogin
                      onSuccess={credentialResponse => {
                        handleGoogleLogin(credentialResponse);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                  </div>
                </div>}

              {/* new/already exist user */}
              <div className='my-5 text-center'>
                {insideRegister ?
                  <p className='text-blue-500'>Existing User? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
                  :
                  <p className='text-blue-500'>New User? <Link to={'/register'} className='underline ms-5'>Register</Link></p>}
              </div>
            </form>
          </div>
        </div>

        {/* toastify */}
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      </div>
    </>
  )
}

export default Auth