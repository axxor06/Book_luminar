import React, { useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import Edit from '../Components/Edit'
import UploadBookStatus from '../Components/UploadBookStatus'
import BookStatus from '../Components/BookStatus'
import PurchaseBooks from '../Components/PurchaseBooks'


function Profile() {

  const[tab,setTab] = useState(1)


  return (
    <>
      <Header/>

      <div style={{height:'200px'}} className='bg-black'></div>
      <div style={{width:'230px',height:'230px',borderRadius:'50%',marginTop:'-130px',marginLeft:'70px'}} className='bg-white p-3'>
        <img style={{width:'200px',height:'200px',bordrRadius:'50%'}} src='https://www.pngall.com/wp-content/uploads/15/User-PNG-Images-HD.png' alt='user'/>
      </div>

      <div className='md:flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-black md:text-3xl text-2xl'>username</h1>
          <FaCircleCheck className='text-blue-400 ms-3'/>
        </div>
        <Edit/>
      </div>

      <p className='text-xl font-bold px-20 mt-5'>✨bio</p>
      <p className='text-justify md:px-20 px-5 my-5'>
        This is your personal space where you can manage your account, explore your reading activity, track your orders, and save books you love. Whether you're building a wishlist, discovering new arrivals, or reviewing your recent purchases, this page keeps everything organized and easy to access. Your reading journey continues here - enjoy exploring, discovering, and collecting stories that inspire you.
      </p>

      <div className='md:px-40'>
        {/* tabs */}
        <div className='flex justify-center items-center my-8 font-medium text-lg gap-3'>
            <p onClick={() => setTab(1)} className= {tab==1?"p-4 border-gray-200 border-1 border-r rounded corner-pointer" : 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload Book</p>
            <p onClick={() => setTab(2)} className= {tab==1?"p-4 border-gray-200 border-1 border-r rounded corner-pointer" : 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload Books Status</p>
            <p onClick={() => setTab(3)} className= {tab==1?"p-4 border-gray-200 border-1 border-r rounded corner-pointer" : 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Purchase History</p>
        </div>

        {/* tab contents */}
        {tab==1 && 
        <div><UploadBookStatus/></div>
        }

        {tab==2 &&
        <div><BookStatus/></div>
        }

        {tab==3 &&
        <div><PurchaseBooks/></div>
        }

      </div>

      <Footer/>
    </>
  )
}

export default Profile