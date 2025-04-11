import React from 'react'
import DashboardPriver from './provider'

function DashboardLayout({children}) {
  return (
    <div>
        <DashboardPriver>
           {children}
        </DashboardPriver>
        
    </div>
  )
}

export default DashboardLayout