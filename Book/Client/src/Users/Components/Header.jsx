import React, { useEffect, useState } from 'react'
import { FaBars, FaFacebookSquare, FaInstagram, FaPowerOff, FaTwitter, FaUser } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'



function Header() {

  const [toggle, setToggle] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  const [token, setToken] = useState("")
  const [dp,setDp] = useState("")


  //after login we navigate to home page then the login button on the header is not valid instead it get replaced by the profile picture 
  //so for rendering content when page reloads we use useeffect
  useEffect(() => {
    if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
      const userToken = sessionStorage.getItem("token")
      const user = JSON.parse(sessionStorage.getItem("user"))
      setToken(userToken)
      setDp(user.profilePic)
    }
  },[token])


  return (
    <div>

      {/* Header top part */}
      <div className='grid grid-cols-3 p-3'>

        {/* logo */}
        <div className='flex items-center'>
          <img src="https://media1.tenor.com/m/3n-ASJF-Y9YAAAAC/reading-read.gif" alt="logo" width={'70px'} height={'10px'} />
          <h1 className='text-2xl font-bold ms-2 md:hidden'>BOOKSTORE</h1>
        </div>

        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold'>BOOK STORE</h1>
        </div>

        {/* login */}
        <div className='md:flex justify-end items-center hidden gap-2'>
          <FaInstagram />
          <FaTwitter className='mx-1' />
          <FaFacebookSquare />

          {/* login link/ profile icon block */}
          {!token ? <Link to={'/login'} className='gap-1 border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white'> <FaUser className='me-1' /> Login </Link>
            :
            <div>
              {/* profile icon */}
              <button onClick={() => setDropDown(!dropDown)} className='shadow-sm rounded ms-5 p-1 hover:bg-gray-100'>
                <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src={dp==''? "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png" : dp} alt="profile" />
              </button>


              {/*  dropdown menu */}
              {dropDown && <div className='absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 focus:outline-hidden'>
                {/* profile link */}
                <link to={`/profile/:id`} className='flex items-center text-grey-600 text-sm px-3 py-2'> <FaGear className='me-1' />Profile</link>

                {/* logout btn */}
                <button className='flex items-center text-grey-600 text-sm px-3 py-2 '>
                  <FaPowerOff className='me-1' /> Logout</button>
              </div>}
            </div>}

        </div>
      </div>

      {/* Navigation part */}
      <nav className='bg-black w-full p-4 text-white md:flex justify-center items-center'>

        {/* menu &  login @small screen */}
        <div className='flex justify-between items-center text-2xl pb-2 md:pb-0 md:hidden'>
          <button onClick={()=>setToggle(!toggle)}> <FaBars /> </button>
          {/* login link / profile icon block */}

          {!token ? <Link to={'/login'} className='border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white'> <FaUser className='me-1' /> Login </Link>
            :
            <div>
              {/* profile icon */}
              <button onClick={() => setDropDown(!dropDown)} className='shadow-sm rounded ms-5 p-1 hover:bg-gray-100'>
                <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src={dp==""? "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png" : dp} alt="profile" />
              </button>


              {/*  dropdown menu */}
              {dropDown && <div className='absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 focus:outline-hidden'>
                {/* profile link */}
                <link to={`/profile/:id`} className='flex items-center text-grey-600 text-sm px-3 py-2'> <FaGear className='me-1' />Profile</link>

                {/* logout btn */}
                <button className='flex items-center text-grey-600 text-sm px-3 py-2 '>
                  <FaPowerOff className='me-1' /> Logout</button>
              </div>}
            </div>}

        </div>

        <ul className={toggle?'flex flex-col': 'md:flex hidden'}>
            <li><Link to={'/'} className='md:mx-4 mt-2 md:mt-0'>HOME</Link></li>
            <li><Link to={'/books'} className='md:mx-4 mt-2 md:mt-0'>BOOKS</Link></li>
            <li><Link to={'/contact'} className='md:mx-4 mt-2 md:mt-0'>CONTACT</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default Header