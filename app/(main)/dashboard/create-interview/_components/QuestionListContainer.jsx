import React from 'react'

function QuestionListContainer({questionList}) {
  return (
    <div>
           <h2 className='font-bold text-lg mb-5'>Generated Interview Question</h2>
                 {questionList.map((item,index)=>(
                    <div key={index} className='p-3 border border-gray-200 rounded-xl mb-3'>
                        <h2 className='font-medium'>{item.question}</h2>
                        <p className='text-sm text-primary'>Type:{item.type}</p>
                    </div>
                 ))}
    </div>
  )
}

export default QuestionListContainer