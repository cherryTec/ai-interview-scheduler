import React  from 'react'
import { Video, Phone} from 'lucide-react'
import  Link  from 'next/link'


function CreatOptions() {
  return (
    <div className='grid grid-cols-2 gap-5'>
        <Link href={'/dashboard/create-interview'} className='bg-white border border-gray-200 rounded-lg p-5 cursor-pointer'>
            <Video className='p-3 text-primary bg-blue-50 rounded-lg h-12 w-12' />
            <h2 className='font-bold'>Create New Interview</h2>
            <p className='text-grau-500'>Create AI Interview and Scheduled with Candidates</p>
        </Link>
        <Link  href={'/dashboard/create-interview'} className='bg-white border border-gray-200 rounded-lg p-5 cursor-pointer'>
            <Phone className='p-3 text-primary bg-blue-50 rounded-lg h-12 w-12' />
            <h2 className='font-bold'>Create Phone Screen Call</h2>
            <p className='text-grau-500'>Create Phone Screen Call with Candidates</p>
        </Link>
        
    </div>
  )
}

export default CreatOptions