"use client"
import { Camera,Video } from 'lucide-react'
import React,{ useState } from 'react'
import {Button} from '@/components/ui/button'


function LatestInterviewsList() {
    const [interviewList, setInterviewList] = useState([])
  return (
    <div className=''>
        <h2 className='font-bold mt-5'>Previously Created Interviews</h2>

        {interviewList?.length==0&&
        <div className='p-5 flex flex-col gap-3 items-center bg-white mt-5'>
            <Video className='h-10 w-10 text-primary' />
            <h2>You don't have any interivew created!</h2>
            <Button> + Creat New Interview</Button>
        </div> }
    </div>
  )
}

export default LatestInterviewsList