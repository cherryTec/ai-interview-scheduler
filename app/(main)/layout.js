import React from 'react'
import DashboardPriver from './provider'
import WelcomeContainer from './dashboard/_components/WelcomeContainer'

function DashboardLayout({children}) {
  return (
    <div className='bg-gray-100'>
        <DashboardPriver>
           <div>     
               {children}
           </div>
           
        </DashboardPriver>
        
    </div>
  )
}

export default DashboardLayout