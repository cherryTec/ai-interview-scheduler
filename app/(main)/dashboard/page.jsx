import React from 'react'
import WelcomeContainer from './_components/WelcomeContainer'
import CreatOptions from './_components/CreatOptions'
import LatestInterviewsList from './_components/LatestInterviewsList'

function Dashboard() {
  return (
    <div>
      {/* <WelcomeContainer /> */}
      <h2 className='font-bold p-5'>Dashboard</h2>
      <CreatOptions />
      <LatestInterviewsList />

    </div>
  )
}

export default Dashboard