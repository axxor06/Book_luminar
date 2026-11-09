import React from 'react'
import { FaPowerOff } from 'react-icons/fa6'

function AdminHeader() {
  return (
    <>
      {/* header top */}
      <div className='flex justify-between items-center p-3 md:px-20'>

        {/* logo */}
        <div className='flex items-center'>
          <img src="https://media1.tenor.com/m/3n-ASJF-Y9YAAAAC/reading-read.gif" alt="logo" width={'60px'} height={'10px'} />
          <h1 className='text-2xl font-bold ms-2 md:hidden'>BOOKSTORE</h1>
        </div>

        {/* logout */}
        <button className='flex items-center px-3 py-2 text-black font-bold rounded border border-black border-2 hover:bg-red-700 hover:text-white hover:border-red-700'>LOGOUT <FaPowerOff className="ms-2 font-bold"/></button>
      </div>

      {/* header marquee */}
      <div className='w-full p-3 bg-black text-white'>
        <marquee>Welcome Admin, You'r all set to manage and monitor the system. Let's get into the work?!!!</marquee>
      </div>
    </>
  )
}

export default AdminHeader