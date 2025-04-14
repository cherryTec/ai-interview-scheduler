import React from 'react'
import { SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar'
import { AppSidebar } from './_components/AppSidebar'
import WelcomeContainer from './dashboard/_components/WelcomeContainer'


function DashboardPriver({children}) {
  return (
    <SidebarProvider>
        <AppSidebar />
        
           <div className='w-full p-10'>
             <WelcomeContainer />
             {/* <SidebarTrigger /> */}
              {children}
            </div>
       
    </SidebarProvider>
    
  )
}

export default DashboardPriver