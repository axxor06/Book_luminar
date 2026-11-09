import React from 'react'
import { FaBackward, FaEye } from 'react-icons/fa6'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'



function View() {
  return (
    <>
      <Header/>
      
      <div className='md:m-10 m-5'>
        <div className='border p-5 shadow border-gray-200'>
          <div className='md:grid grid-cols-4 gap-x-10'>
            {/* image */}
            <div className='col-span-1'>
              <img className='w-full' src='imageURL' alt='book'/>
            </div>
            {/* book details */}
            <div className='col-span-3'>
              <div className='flex justify-between mt-5 md:mt-0'>
                <h3 className='text-2xl font-bold'>title</h3>
                <button className='text-gray-400'><FaEye/></button>
              </div>
              <h2 className='text-blue-700 font-bold text-xl my-5'>author</h2>
              <div className='md:grid grid-cols-3 gap-5 my-10'>
                <p className='font-bold'>Publisher :</p>
                <p className='font-bold'>Language :</p>
                <p className='font-bold'>No. of pages :</p>
                <p className='font-bold'>Category :</p>
                <p className='font-bold'>ISBN :</p>
                <p className='font-bold'>Original Price :</p>
                <p className='font-bold'>Seller :</p>
              </div>
              <div className='md:my-10 my-4'>
                <h4 className='font-bold text-lg'>Abstract</h4>
              </div>
              <div className='flex justify-end'>
                <Link to={"/books"} className='bg-blue-900 text-white p-2 font-black flex items-center'><FaBackward className='me-2'/>Back</Link>
                <button className='bg-green-900 text-white p-2 font-black ms-5'>Buy $25</button>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
      </div>
    </>
  )
}

export default View