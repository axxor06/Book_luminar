import React from 'react'



function UploadBookStatus() {
  return (
    <>
      <div className='p-10 my-20 mx-5 bg-gray-200'>
        <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
        <div className='md:grid grid-cols-2 mt-10 w-full'>
          <div className='px-3'>
            <div className='mb-3'>
              <input type='text' placeholder='Book Title' className='w-full p-2 rounded bg-white'/>
            </div>
            <div className='mb-3'>
              <input type='text' placeholder='Author' className='w-full p-2 rounded bg-white'/>
            </div>
            <div className='mb-3'>
              <input type='text' placeholder='Book Cover Image URL' className='w-full p-2 rounded bg-white'/>
            </div>
            <div className='mb-3'>
              <input type='text' placeholder='Total Pages' className='w-full p-2 rounded bg-white'/>
            </div>
            <div className='mb-3'>
              <input type='text' placeholder='Original Price' className='w-full p-2 rounded bg-white'/>
            </div>
            <div className='mb-3'>
              <input type='text' placeholder='Discount Price' className='w-full p-2 rounded bg-white'/>
            </div>
            <div className='mb-3'>
              <textarea type='text' placeholder='Abstract' rows='5' className='w-full p-2 rounded bg-white'/>
            </div>
          </div>

          <div className='px-3'>
            <div className='mb-3'>
              <input type='text' placeholder='Publisher' className='w-full p-2 rounded bg-white'/>
            </div>
            <div className='mb-3'>
              <input type='text' placeholder='ISBN' className='w-full p-2 rounded bg-white'/>
            </div>
            <div className='mb-3'>
              <input type='text' placeholder='Language' className='w-full p-2 rounded bg-white'/>
            </div>
            <div className='mb-3'>
              <input type='text' placeholder='Category' className='w-full p-2 rounded bg-white'/>
            </div>
            {/* upload book image */}
            <div className='mb-3 flex justify-center items-center mt-10'>
              <label htmlFor='bookImages'>
                <input type='file' id='bookImages' hidden/>
                <img width={'200px'} height={'200px'} src='https://static.vecteezy.com/system/resources/previews/023/527/362/original/upload-icon-sign-symbol-green-design-transparent-background-free-png.png' alt='book fil not found'/>
              </label>
            </div>
          </div>
        </div>

        {/* reset and add button */}
        <div className='flex md:justify-end justify-center w-full p-3 mt-8 gap-4'>
           <button className='bg-gray-600 text-white py-2 px-3 rounded hover:text-gray-600 hover:bg-white'>RESET</button>
           <button className='bg-gray-600 text-white py-2 px-3 rounded hover:text-gray-600 hover:bg-white'>ADD BOOK DETAILS</button>
        </div>
      </div>
    </>
  )
}

export default UploadBookStatus