import React from 'react'

function PurchaseBooks() {
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
                <p className='text-justify mt-5'><span className='font-semibold'>Abstract</span>: abstract</p>
                {/* status images */}
                <div className='flex mt-3'>
                  <img width={'120px'} height={'120px'} src='https://static.vecteezy.com/system/resources/thumbnails/023/630/157/small_2x/web-button-icon-purchase-button-png.png' alt='purchase'/>
                </div>
            </div>
            <div className='px-4 mt-4 md:mt-0'>
                <img className='w-full' src='img' alt='No Image'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PurchaseBooks