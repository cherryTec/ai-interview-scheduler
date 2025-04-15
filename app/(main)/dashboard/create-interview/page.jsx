"use client"
import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Progress } from "@/components/ui/progress"
import FormContainer from './_components/FormContainer'
import QuestionList from './_components/QuestionList'
import { toast } from "sonner"
import InterviewLink from './_components/InterviewLink'


function CreateInterview() {
  const router= useRouter();
  const [step, setStep] = useState(1)
  const [formData, SetFormData] = useState()
  const [interviewId, setInterviewId] = useState()

  const onHandleInputChange = (field,value) => {
     SetFormData(prev=>({
      ...prev,
      [field]:value
     }))

     console.log("FormData", formData)
  }

  const onGoToNext = () => {
    if(!formData?.jobPosition || !formData?.jobDescription || !formData?.duration || !formData?.type) {
      toast('Please enter all details!')
      return ;
     
    } else {
      setStep(step+1)
    }
    
  }

const onCreateLink = (interview_id) => {
   setInterviewId(interview_id?.interview_id);
   setStep(step+1);
  //DATA_FRO-onCreateLink-interviewId undefined interview_id: {interview_id: '5a454fdd-bac8-4c3c-adcc-de01af020810'}
   console.log("DATA_FRO-onCreateLink-interviewId",interviewId,"interview_id:",interview_id)
}


  return (
    <div className='mt-10 px-10 md:px-24 lg:px-44 xl:px-56'>
      <div className='flex gap-5 items-center'>
        <ArrowLeft onClick={()=>router.back()} className='cursor-pointer' />
        <h2 className='font-bold text-2xl'>Create New Interview</h2>
       
      </div>
        <Progress value={step * 33.33} className='my-5' />
     {step==1? <FormContainer 
     onHandleInputChange={onHandleInputChange}
     GoToNext={()=>onGoToNext()}/>
       :step==2?<QuestionList formData={formData} onCreateLink={(interview_id)=>onCreateLink(interview_id)}/>:
       step==3?<InterviewLink interview_id={interviewId} 
         formData={formData}
       />:null}
    </div>
  )
}

export default CreateInterview