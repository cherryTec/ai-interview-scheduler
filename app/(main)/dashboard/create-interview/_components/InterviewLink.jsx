import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'
import { Copy,Clock,List, Calendar, Mail, ArrowLeft,Plus } from 'lucide-react'
import  Link  from 'next/link';
import { toast } from 'sonner';

function InterviewLink({interview_id,formData}) {
  const url=process.env.NEXT_PUBLIC_HOST_URL+'/'+interview_id;
  const GetInterviewUrl=()=>{
    
    return url;
  }

  const onCopyLink = async() => {
     await navigator.clipboard.writeText(url)
     toast('Link Copied')
  }

  return (
    <div className='flex flex-col items-center w-full justify-center'>
        <Image src={'/checkok.png'} alt='check' width={200} height={200}
        className='w-[150px] h-[150px]'/>
        <h2 className='font-bold text-lg'>Your AI Interview is Ready!</h2>
        <p className='mt-1'>Share this link with your candidates to start the interview process!</p>

        <div className='w-full px-10 py-8 mt-6 rounded-lg bg-white'>
          <div className='flex justify-between items-center'>
            <h2 className='font-bold'>Interview Link</h2>
            <h2 className='p-1 px-2 text-primary bg-blue-50 rounded-2xl'>Valid for 30 Days</h2>          
          </div>
          <div className='mt-3 flex gap-3  items-center'>
              <Input defaultValue={GetInterviewUrl()} disabled={true} />
              <Button onClick={()=>onCopyLink()}> <Copy /> Copy Link </Button>
          </div>
          <hr className="mt-5" />

          <div className='flex gap-5'>
            <h2 className='text-sm text-gray-500 flex gap-2 items-center'><Clock className='h-4 w-4' /> {formData?.duration}</h2>
            <h2 className='text-sm text-gray-500 flex gap-2 items-center'><List className='h-4 w-4' /> 10 Qeustions</h2>
            <h2 className='text-sm text-gray-500 flex gap-2 items-center'><Calendar className='h-4 w-4' /> {formData?.duration}</h2>
          </div>
        </div>
        <div className="mt-7 bg-white p-5 rounded w-full">
          <h2 className='font-bold'>Share Via</h2>
          <div className='flex gap-5 mt-2'>
            <Button variant={'outline'} className=''><Mail /> Email </Button>
            <Button variant={'outline'} className=''><Mail /> Slack </Button>
            <Button variant={'outline'} className=''><Mail /> Whatsapp </Button>
          </div>   
        </div>
        <div className='flex justify-between w-full mt-7'>
          <Link href={'/dashboard'}>
            <Button variant={'outline'}> <ArrowLeft />Back To Dashboard</Button>
          </Link>
           <Link href={'/dashboard/create-interview'}>
              <Button> <Plus />Create New Interview</Button>
           </Link>
          
        </div>
    </div>
  )
}

export default InterviewLink