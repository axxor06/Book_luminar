import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaBook, FaClock, FaPeopleGroup, FaUsers } from 'react-icons/fa6'



function AdminDashboard() {
  return (
    <div>
      <AdminHeader/>

      <div className='md:grid grid-cols-5 gap-2'>

        <div className='col-span-1'>
          <AdminSidebar/>
        </div>

        <div className='col-span-4 p-10'>
          {/* grid card */}
          <div className='md:grid grid-cols-3'>

            {/* card-1 */}
            <div className='md:px-5 my-5 md:my-0'>
              <div className='bg-orange-100 px-4 py-8 flex justify-center items-center text-5xl rounded'>
                <FaBook/>
                <div className='text-center ms-10 md:ms-5'>
                  <h3 className='text-lg'>Books</h3>
                  <h3 className='text-2xl'>100+</h3>
                </div>
              </div>
            </div>

            {/* card-2 */}
            <div className='md:px-5 my-5 md:my-0'>
              <div className='bg-orange-100 px-4 py-8 flex justify-center items-center text-5xl rounded'>
                <FaUsers/>
                <div className='text-center ms-10 md:ms-5'>
                  <h3 className='text-lg'>Users</h3>
                  <h3 className='text-2xl'>100+</h3>
                </div>
              </div>
            </div>

            {/* card-3 */}
            <div className='md:px-5 my-5 md:my-0'>
              <div className='bg-orange-100 px-4 py-8 flex justify-center items-center text-5xl rounded'>
                <FaPeopleGroup/>
                <div className='text-center ms-10 md:ms-5'>
                  <h3 className='text-lg'>Employees</h3>
                  <h3 className='text-2xl'>100+</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard