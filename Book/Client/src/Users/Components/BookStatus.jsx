import React from 'react'

function BookStatus() {
  return (
    <>
      <div className='p-10 my-15 shadow rounded'>
        {/* duplicate uploaded books */}
        <div className='p-5 rounded mt-4 bg-gray-100'>
          <div className='md:grid items-center grid-cols-[3fr_1fr]'>
            <div className='px-4'>
                <h1 className='text-2xl'>Title</h1>
                <h2 className='text-xl'>.author</h2>
                <h3 className='text-lg text-blue-500'>$ 55</h3>
                <p className='text-justify mt-5'><span className='font-semibold'>Abstract</span>:</p>
                {/* status images */}
                <div className='flex mt-3'>
                  <img width={'120px'} height={'120px'} src='https://tse2.mm.bing.net/th/id/OIP.jCQE1S9tx0pNHRUAT7eF0AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' alt='pending'/>

                  <img width={'120px'} height={'120px'} src='https://tse2.mm.bing.net/th/id/OIP.uhDcv67HUnAfxyMYsKrWGwHaGp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' alt='approved'/>

                  <img width={'120px'} height={'120px'} src='https://toppng.com/uploads/preview/sold-png-115539980105jge4hsus0.png' alt='sold'/>
                </div>
            </div>
            <div className='px-4 mt-4 md:mt-0'>
                <img className='w-full' src='img' alt='No Image'/>
                <div className='mt-4 flex justify -end'>
                  <button className='bg-red-600 text-white p-2 rounded'>Delete</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookStatus