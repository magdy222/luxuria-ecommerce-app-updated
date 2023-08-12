import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signIn, useAuth} from '../../firebase'


const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()

  const currentUser = useAuth()

  async function handleSignIn (){
    setLoading(true)
    try{
      await signIn(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    }catch(error){
      alert('Error!')
      console.log(error.message)
    }
    setLoading(false)
  }

return(
  <div className='container mx-auto my-24 flex justify-center justify-items-center 
    drop-shadow-lg w-[360px] h-[280px] md:w-[380px] md:h-[340px] border border-white 
    bg-gray-100 shadow-2xl  rounded-lg' >
        <div className='flex flex-col justify-center justify-items-center'>
           <form className='p-5 text-black'>
            <div className='flex justify-center justify-items-center'>
                <label htmlFor='email' className='px-9'>Email</label> 
                <input type='email' ref={emailRef}  className='text-center border-2 hover:border-blue-300 
                outline-none rounded-md mb-5 text-black' placeholder='example@gmail.com'/>
            </div>
            <div>
                <label htmlFor='password' className='p-6'>Password</label>
                <input type='password' ref={passwordRef}  className='text-center border-2 hover:border-blue-300
                 outline-none rounded-md text-black' placeholder='password'/>
            </div>
          </form>
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-28 h-7 container
             mx-auto my-3 hover:text-black rounded-md' 
              onClick={handleSignIn} disabled={loading || currentUser}>Login</button>
            <h6 className='container mx-auto text-center pt-2'>Create an account <Link className='text-blue-500 underline' to={'/register'}>Register</Link> </h6>
        </div>
    </div>
    )
  }

export default Login;