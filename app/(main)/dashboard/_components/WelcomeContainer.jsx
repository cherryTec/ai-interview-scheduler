"use client"
import React from 'react'
import { useUser } from '@/app/provider'
import  Image  from 'next/image'

function WelcomeContainer() {
    const { user } = useUser()
    console.log("user",user)
   
    // Get the avatar URL from user metadata (Google's avatar URL)
    const avatarUrl = user?.picture
  
  return (
    <div className='flex justify-between items-center bg-white p-5 rounded-1xl'>    
        <div>
             <h2 className='font-bold'>Welcome Back, {user?.name || "Guest"}</h2>
             <h2 className='text-gray-500'>Let AI Help You be the Best Version of Yourself</h2>
        </div>
        {avatarUrl && <Image src={avatarUrl} alt={`${user.name}'s avatar`} height={40} width={40} className='rounded-full'/>}
    </div>
  )
}

export default WelcomeContainer