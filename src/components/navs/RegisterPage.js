import { async } from '@firebase/util'
import React, { useRef, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { signUp, useAuth, logOut } from '../../firebase'


const SignUp = () => {
  const navigate = useNavigate()
  
  const [loading ,setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const currentUser = useAuth()

  console.log(currentUser);

    async function handleSignUp () {
      setLoading(true)
    try{
      await signUp(emailRef.current.value , passwordRef.current.value)
      navigate('/')
    }catch(error){
      alert('Error!')
      console.log(error.message)
    } 
    setLoading(false)
    
  }

  async function handleLogOut () {
    setLoading(true)
    try{
      await logOut()
      navigate('/register')
    }catch{
      alert('Error!')
    }
    setLoading(false)
  }


  return (
    <div className='container mx-auto my-24 flex justify-center justify-items-center 
    drop-shadow-lg w-[400px] h-[340px] border border-white 
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg' >
        <div className='flex flex-col justify-center justify-items-center'>
           <form className='p-5 text-white' >
           
            <div className='flex justify-center justify-items-center '>
                <label htmlFor='name' className='px-9'>Name</label> 
                <input type='text' autoComplete='off'  className='text-center border-2 hover:border-blue-300
                 outline-none rounded-md mb-5  text-black font-bold' placeholder='name'/>
            </div>
            <div className='flex justify-center justify-items-center'>
                <label htmlFor='email' className='px-9'>Email</label> 
                <input type='email' ref={emailRef} className='text-center border-2 hover:border-blue-300 
                outline-none rounded-md mb-5 text-black text-md font-bold' placeholder='email'/>
            </div>
            <div>
                <label htmlFor='password' className='p-6'>Password</label>
                <input type='password' autoComplete='off' ref={passwordRef} className='text-center border-2 hover:border-blue-300 
                outline-none rounded-md  text-black font-bold' placeholder='password'/>
            </div>
          </form>
          <div className='flex justify-center gap-3'> 
          <button className='bg-white w-24 h-7 container mx-auto my-3 
          hover:text-emerald-500 rounded-md text-blue-500' onClick={handleSignUp} disabled={loading || currentUser}>Sign up</button>
          <button className='bg-white w-24 h-7 container mx-auto my-3 
             hover:text-emerald-500 rounded-md text-blue-500' onClick={handleLogOut} disabled={loading || !currentUser}>Log out</button>
          </div>
            <h6 className='container mx-auto text-center'>Already have an account <Link className='text-white underline' to={'/login'}>Login</Link> </h6>
        </div>
    </div>
  )
}

export default SignUp