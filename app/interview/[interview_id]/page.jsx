"use client"
import React, { useContext, useEffect, useState } from 'react'
import InterviewHeader from '../_components/InterviewHeader'
import Image from 'next/image'
import { Clock, Loader2Icon, Video } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import { toast } from 'sonner'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { useRouter,useParams } from 'next/navigation'


function Interview() {
    const { interview_id } = useParams();
    console.log('interview_id',interview_id);

    const [interviewData, setInterviewData]=useState()
    const [userName,setUserName] = useState()
    const [loading,setLoading] = useState(false)
                                              
    const {interviewInfo, setInterviewInfo} = useContext(InterviewDataContext)

    const router=useRouter()
   

    useEffect(()=>{
        interview_id&&GetInterViewDetail();

    },[interview_id])

    const GetInterViewDetail = async () => {
        setLoading(true)
      try{
        let { data: Interviews, error } = await supabase
        .from('Interviews')
        .select('jobPosition,jobDescription,duration,type')
        .eq('interview_id', interview_id)

        setInterviewData(Interviews[0])
        setLoading(false)

        if(Interviews?.length==0) {
            toast('Incorrect Interview Link')
            return;
        }
    } catch(e) {
        setLoading(false)
        toast('Incorrect Interview Link')
    }     

    }

  const onJoinInterview = async() => {
    setLoading(true)
    let { data: Interviews, error } = await supabase
        .from('Interviews')
        .select('*')
        .eq('interview_id',interview_id)

        console.log(Interviews[0])
        setInterviewInfo(
            {
                userName:userName,
                interviewData:Interviews[0]
            }
        )
        console.log("interviewInfo",interviewInfo)
        router.push('/interview/'+interview_id+'/start')
        setLoading(false)

  }

  return (
    <div className='px-10 md:px-28 lg:px-48 xl:px-64 mt-7'>
        <div className='flex flex-col justify-center border rounded-lg items-center 
        bg-white p-7 lg:px-32 xl:px-52  mb-20'>
            <Image src={'/logo.png'} alt='logo'  width={200} height={200} 
                className='w-[140px]' />

            <h2 className='mt-3'>AI-Powered Interview Platform</h2>
            <Image src={'/interview.png'} alt='interview' width={500} height={500} 
            className='w-[280px] my-6' />

            <h2 className='font-bold text-xl mt-3'>{interviewData?.jobPosition}</h2>
            <h2 className='flex items-center text-gray-500 gap-2 mt-3'><Clock className='h-4 w-4'/>{interviewData?.duration}</h2>

        
        <div className='w-full'>
            <h2>Enter your Full Name</h2>
            <Input placeholder='e.g. John Smith' onChange={(event)=>setUserName(event.target.value)} />
         </div>
            <div>
             <h2>Befor you begin</h2>
             <ul className=''>
                 <li className="text-sm text-primary">- Test your micphone</li>
                 <li className="text-sm text-primary">- Ensur your internet</li>
                 <li className="text-sm text-primary">- Find a Quite</li>

             </ul>
            </div>
               <Button className={'mt-5 w-full text-bold text-white'}
                disabled={loading || !userName}
                onClick={()=>onJoinInterview()}
               > 
                <Video /> {loading&&<Loader2Icon/>} Join Interview</Button>
           </div>
    </div>
  )
}

export default Interview