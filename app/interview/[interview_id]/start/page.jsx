"use client"
import React, { useContext, useEffect,useRef, useState } from 'react'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { Timer,Mic, Phone } from 'lucide-react'
import Image from 'next/image'
import Vapi from "@vapi-ai/web";
import AlertConfirmation from './_components/AlertConfirmation'
import { toast } from 'sonner'

function StartInterview() {
   const {interviewInfo, setInterviewInfo}= useContext(InterviewDataContext)
   const { activeUser, setActiveUser} = useState(false)
   const [isCallActive, setIsCallActive] = useState(false);  // Track call state-- grok dubug v2
 
  
  const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY); 

  useEffect(()=>{

   interviewInfo &&  startCall() 
   
  },[interviewInfo])


  let questionList;
  
  const startCall = () => {    
    console.log("interviewInfo",interviewInfo)
    interviewInfo?.interviewData?.QusestionList.forEach((item,index)=>{
        questionList=item?.question+","+questionList
    })

    setIsCallActive(true);

  }

  const stopCall = () => {   
      vapi.stop();      
      console.log("Vapi call stopped"); 
      
  };

  // Voice assisatan settings start

 const assistantOptions = {
    name: "AI Recruiter",
    firstMessage: "Hi"+  interviewInfo?.userName   +", how are you? Ready for your interview on "+ interviewInfo?.interviewData?.jobPosition + "?",
    transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US",
    },
    voice: {
        provider: "playht",
        voiceId: "jennifer",
    },
    model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content: `
              You are an AI voice assistant conducting interviews.
            Your job is to ask candidates provided interview questions, assess their responses.
            Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
            "Hey there! Welcome to your` + interviewInfo?.interviewData?.jobDescription+ `interview. Let’s get started with a few questions!"
            Ask one question at a time and wait for the candidate’s response before proceeding. Keep the questions clear and concise. Below Are the questions ask one by one:
            Questions: ` + questionList  + `
            If the candidate struggles, offer hints or rephrase the question without giving away the answer. Example:
            "Need a hint? Think about how React tracks component updates!"
            Provide brief, encouraging feedback after each answer. Example:
            "Nice! That’s a solid answer."
            "Hmm, not quite! Want to try again?"
            Keep the conversation natural and engaging—use casual phrases like "Alright, next up..." or "Let’s tackle a tricky one!"
            After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
            "That was great! You handled some tough questions well. Keep sharpening your skills!"
            End on a positive note:
            "Thanks for chatting! Hope to see you crushing projects soon!"
            Key Guidelines:
            ✅ Be friendly, engaging, and witty 🎤
            ✅ Keep responses short and natural, like a real conversation
            ✅ Adapt based on the candidate’s confidence level
            ✅ Ensure the interview remains focused on React
            `.trim(),
                        },
                    ],
                },
            };

  // Voice assitant setting end
vapi.start(assistantOptions)


vapi.on("speech-start", () => {
  console.log("Assistant speech has started.");
  setActiveUser(false)
});

vapi.on("speech-end", () => {
  console.log("Assistant speech has ended.");
  setActiveUser(true)

});

vapi.on("call-start", () => {
  console.log("Call has started.");
  toast('Call Connected..')
});

vapi.on("call-end", () => {
  console.log("Call has ended.");
  toast('Interview Ended')
});


  return (
    <div className='p-20 lg:px-48 xl:px-56'>
       <h2 className='font-bold text-xl flex justify-between'>AI Interview Sesstion
          <span className='flex gap-2 items-center'>
            <Timer />
            00:00:00
          </span>
       </h2>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-7  mt-7">
          <div className='border rounded-lg h-[400px] flex flex-col gap-3 items-center justify-center'>
            <div className="relative">
             {!activeUser && <span className='absolute inset-0 rounded-full bg-blue opacity-25 animate-ping'>......</span>}
              <Image src={'/ai.png'} alt='ai' width={100} height={100} className='w-[100px] h-[100px] rounded-full object-cover'/>
              <h2>AI Recruiter</h2>
            </div>
          </div>
          <div className='border rounded-lg h-[400px] flex flex-col gap-3 items-center justify-center'>
          <div className="relative">
             {activeUser && <span className='absolute inset-0 rounded-full bg-blue opacity-25 animate-ping'>......</span>}
              <h2 className='text-lg bg-primary text-white rounded-full p-3 px-5'>{interviewInfo?.userName[0]}</h2>
              <h2>{interviewInfo?.userName}</h2>
           </div>
          </div>
       </div>

       <div className='flex gap-5 items-center justify-center mt-7'>
          <Mic   className='bg-gray-500 text-white w-12 h-12 p-3 rounded-full cursor-pointer'/>
          
          <AlertConfirmation stopInterview={stopCall}>
              <Phone  className='bg-red-500 text-white w-12 h-12 p-3 rounded-full cursor-pointer'/>
          </AlertConfirmation>
         
       </div>
       <h2 className='text-sm text-gray-400 text-center mt-5'>Interview  in Progress...</h2>
    </div>
  )
}

export default StartInterview