"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'

function Login() {
  /**
   * Used to SignIn with Google
   */
  const signInWithGoogle = async () => {
    const {error}=await supabase.auth.signInWithOAuth({
      provider:'google',
      options:{
        redirectTo:'https://3000-cherrytec-aiinterviewsc-37jy7261554.ws-us118.gitpod.io/dashboard'
      }
    })

    if(error) {
      console.log('Error',error.message)
    }
  }


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
       <div className="flex flex-col items-center border rounded-2xl p-8">
              <Image src={'/logo.png'} alt='logo' 
              width={100} height={100} 
              className='w-[180px]'/>

           
              <Image src={'/login.png'} alt='login'
              width={600} height={400}
              className='w-[480px] h-[360px] rounded-2xl'/>
            
              <h2 className='text-2xl font-bold mt-5'>Welcome to AICruiter</h2>
              <p className='text-gray-500'>Sign in with Google Authentication</p>
              <Button onClick={signInWithGoogle} className='mt-7 w-[480px]'>Login with Google</Button>
           </div>
         
     </div>
  )
}

export default Login