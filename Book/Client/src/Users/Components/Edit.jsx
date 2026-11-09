import React, { useState } from 'react'
import { FaPen, FaX } from 'react-icons/fa6'

function Edit() {

  const [offCanvas,setOffCanvas] = useState(false)


  return (
    <>
      <button onClick={() => setOffCanvas(true)} className='bg-black text-white p-2 px-3 font-bold flex items-center rounded border hover:bg-white hover:text-black'><FaPen className='me-2' />Edit</button>

      {offCanvas && <div>
        <div className='fixed inset-0 bg-gray-500/75 w-fulll h-full'></div>
        <div className='bg-white h-full w-90 z-50 fixed top-0 left-0'>

          {/* Head */}
          <div className='bg-black text-white px-3 py-4 flex justify-between text-2xl font-bold'>
            <h1>Update User Profile</h1>
            <FaX onClick={() => setOffCanvas(false)} />
          </div>

          {/* body */}
          <div className='flex justify-center items-center flex-col my-5'>

            {/* edit picture */}
            <label htmlFor='userProfiles'>

              <input type='file' id='userProfiles' hidden />
              <img style={{width: '100px', height: '100px', borderRadius: '50%'}} className='border border-gray-300 z-52' src='https://www.pngall.com/wp-content/uploads/15/User-PNG-Images-HD.png' alt='user' />

              <button className='bg-black text-white px-2 py-1 rounded z-53 fixed' style={{marginLeft: '50px', marginTop: '-15px'}}> <FaPen/> </button>
            </label>
            <div className='mt-3 text-yellow-500 text-sm'>Only accept image file</div>

            {/* username */}
            <div className='mt-10 mb-3 w-full px-5'> 
              <input type='text' placeholder='UserName' className='w-full border border-gray-300 rounded p-2'/>
            </div>

            {/* new password */}
            <div className='mb-3 w-full px-5'>
              <input type='password' placeholder='New Password' className='w-full border border-gray-300 rounded p-2'/>
            </div>

            {/* Confirm Password */}
            <div className='mb-3 w-full px-5'>
              <input type='password' placeholder='Confirm Password' className='w-full border border-gray-300 rounded p-2'/>
            </div>
            <div className='mb-3 text-yellow-500 text-sm'>Password and Confirm Password must be same</div>

            {/* bio */}
            <div className='mt-3 mb-3 w-full px-5'>
              <input type='text' placeholder='Bio' className='w-full border border-gray-300 rounded p-2'/>
            </div>

            {/* reset and update button */}
            <div className='flex justify-between w-full px-5 mt-5'>
              <button className='bg-yellow-400 text-white py-2 px-3 rounded font-bold'>RESET</button>
              <button className='bg-green-600 text-white py-2 px-3 rounded ms-5 font-bold'>UPDATE</button>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Edit