import React from 'react'
import Header from '../Components/Header'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer'


function Home() {
  return (
    <>
      <Header />

      {/* hero section */}
      <div style={{ height: '581px' }} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white'>
        <div style={{ height: '500px', backgroundColor: 'rgba(0,0,0,0.3)' }}
          className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-bold'>Wonderful gifts</h1>
          <p className='mt-3'>Gift your family and friends a book</p>
          <div className='mt-9 flex items-center'>
            <input placeholder=' Search A Book' type="text" className='bg-white p-2 rounded-3xl w-100 text-black' />
            <FaSearch className='text-grey-500 cursor-pointer' style={{ marginLeft: '-40px' }} />
          </div>
        </div>
      </div>

      {/* New arrival */}
      <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
        <h1 className='text-4xl my-2'>Explore Our Latest Collections</h1>
        <div className='md:grid grid-cols-4 w-full my-10'>
          {/* duplicate according to book */}
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100px'} height={'300px'} src='img' alt='book'/>
            <div className='flex flex-col justify-center itens-center mt-4'>
                <h2 className='text-blue-700 font-bold text-xl'>author</h2>
                <h3 className='text-lg'>title</h3>
                <p className='font-bold text-red-500'>$40</p>
            </div>
          </div>
        </div>

        <div className='text-center my-10'>
          <Link to={'/books'} className='bg-black rounded p-5 text-white font-black'>Explore More.....</Link>
        </div>
      </section>

      {/* actions */}
      <section className="md:grid grid-cols-2 items-center my-5 gap-10 p-5 md:px-40">
        <div className="text-center">

          <h1 className='text-xl font-bold'>FEATURED AUTHORS</h1>
          <h2 className='text-xl'>Captivates with every word </h2>
          <p className='my-5 text-justify'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
          <p className='text-justify'>Our Author features include:</p>

          <p className='text-justify my-3'><span className='font-black'>✨ Author Profiles :</span> Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>

          <p className='text-justify my-3'><span className='font-black'>📖 Published Works :</span> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>

          <p className='text-justify my-3'><span className='font-black'>🎤 Interviews & Insights :</span> Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>
          
        </div>

        <div className="p-5 flex items-center justify-center">
          <img src='https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg' alt='author'/>
        </div>
      </section>

      {/* Testimonials */}
      <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-xl font-bold'>TESTIMONIALS</h1>
        <h1 className='text-xl my-2'>See what others are saying</h1>
        <div className='my-5 flex flex-col justify-center items-center'>

          <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src='https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg' alt='user'/>

          <h3 className='my-3'>Luthur King</h3>
          <p className='text-justify'>This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>

        </div>
      </section>

    <Footer/>

    </>

  )
}

export default Home