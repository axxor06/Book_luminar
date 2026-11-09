import React from 'react'
import { FaChartSimple, FaDatabase, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function AdminSidebar() {
  return (
    <div>
      <div className='bg-indigo-900 md:min-h-screen h-fit py-10'>

        {/* image */}
        <div className='flex justify-center'>
          <img style={{width: '100px', height: '100px', borderRadius: '50%'}} className='border border-gray-300 z-52' src='https://www.pngall.com/wp-content/uploads/15/User-PNG-Images-HD.png' alt='user' />
        </div>

        {/* home */}
        <h3 className='text-xl font-bold my-2 text-center text-white'>username</h3>

        {/* link */}
        <div className='mt-10 flex-col justify-center items-center text-white px-4'>
          <div className='mt-3'>
            <Link to='/admin/dashboard' className='flex items-center'> <FaChartSimple className='me-2 text-orange-400'/>Dashboard</Link>
          </div>

          <div className='mt-4'>
            <Link to='/admin/resources' className='flex items-center'> <FaDatabase className='me-2 text-yellow-300'/>Collections</Link>
          </div>

          <div className='mt-4'>
            <Link to='/admin/settings' className='flex items-center'> <FaGear className='me-2 text-gray-400'/>Settings</Link>
          </div>
        </div>

      </div>
    </div>
  )
}


export default AdminSidebar