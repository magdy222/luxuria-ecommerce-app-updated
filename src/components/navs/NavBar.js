import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { useAuth, logOut } from '../../firebase';
import { setCart } from '../../redux/cartSlice';
import {searchByName} from '../../redux/searchSlice'


const NavBar= () => {

  const [t, i18n] = useTranslation()
  
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useAuth()
  const [loading ,setLoading] = useState(false)

  const handleSearch = (event)=>{
    dispatch(searchByName(event.target.value))
  }

  async function handleLogOut () {
    setLoading(true)
    try{
      await logOut().then(()=>{
        dispatch(setCart([]))
      })
      navigate('/register')
    }catch{
      alert('Error!')
    }
    setLoading(false)
  }

  return (
    <div className='pt-2 w-full bg-white'>
    <div className='grid sm:grid-cols-1 md:grid-cols-3  gap-10  justify-items-center py-2 '>
      <div className='flex gap-2 '>
        <button
        onClick={()=>{i18n.changeLanguage("en")}}
        type="button"
        className="bg-white text-gray-900 rounded-md px-4 py-2 font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-indigo-500">
        English
        </button>
    
        <button 
        onClick={()=>{i18n.changeLanguage("ar")}}
        type="button"
        className="bg-white text-gray-900 rounded-md px-4 py-2 font-medium hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        العربية
        </button>
    </div>
        <div>
            <Link to={'/'}><h2 className='uppercase text-2xl font-bold first-letter:text-pink-500 text-black no-underline'>{t('title')}</h2></Link>
        </div>
        
        <div className='flex items-center justify-center text-black no-underline'>
        {!currentUser ?  (<div className='flex '>
          <Link to={'/register'}><h4 className='px-2 text-black no-underline '>{t("register")}</h4></Link>
          <Link to={'/login'}><h4 className='px-2  text-black no-underline'>{t("login")}</h4></Link>
            </div>) : <p className='px-3 text-cyan-600'>{currentUser.email}</p>
        }
        <button className='bg-white px-3 mx-3 hover:text-red-500 custom-cursor' 
        onClick={handleLogOut} disabled={loading || !currentUser}>{t("logout")}</button>

            <div className='flex items-center justify-center relative'>
              <Link to={'/cart'}>
                <div className='relative  text-black'>
                  <AiOutlineShoppingCart  style={{ fontSize: '20px' }}/>
                  <span className='bg-blue-500 text-white rounded-full h-4 w-4 flex 
                  items-center justify-center absolute -top-3 -right-3 text-xs p-1'>{cart?.length ?? 0 }
                  </span>
                </div>
              </Link>
            </div>
        </div>
        <div className='flex items-center justify-center  pb-5 '>
            <input type='search' placeholder='search' onChange={handleSearch}
            className='text-center border-2 hover:border-blue-300 outline-none rounded-sm  mx-2'/>
            <CiSearch/>
        </div>
    </div>
        <h2 className='text-center py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
         text-white text-lg uppercase'>{t("bar")}</h2>
    </div>
  )
}

export default NavBar;