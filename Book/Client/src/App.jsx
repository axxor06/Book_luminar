import './App.css'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

//users
import Home from './Users/Pages/Home'
import Contact from './Users/Pages/Contact'
import Books from './Users/Pages/Books'
import View from './Users/Pages/View'
import Profile from './Users/Pages/Profile'

//admin
import AdminDashboard from './Admin/Pages/AdminDashboard'
import AdminResource from './Admin/Pages/AdminResources'
import AdminSettings from './Admin/Pages/AdminSettings'

//guest users
import Auth from './Pages/Auth'
import Pnf from './Pages/Pnf'
import Preloader from './Components/Preloader'



function App() {

  //for showing loading states
  const [isLoading,setIsloading] = useState(true)

  setTimeout(() => {
    setIsloading(false)
    
  }, 5000);

  return (
    <>
    <Routes>

      <Route path='/' element={isLoading?<Preloader/>:<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister/>}/>

      <Route path='/profile' element={<Profile/>}/>
      <Route path='/books/:id' element={<View/>}/>

      <Route path='/admin/dashboard' element={isLoading?<Preloader/>:<AdminDashboard/>}/>
      <Route path='/admin/resources' element={<AdminResource/>}/>
      <Route path='/admin/settings' element={<AdminSettings/>}/>

    </Routes>
    </>
  )
}

export default App