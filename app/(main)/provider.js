import React from 'react'
import { SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar'
import { AppSidebar } from './_components/AppSidebar'


function DashboardPriver({children}) {
  return (
    <SidebarProvider>
        <AppSidebar />
        
           <div>
             <SidebarTrigger />
              {children}
            </div>
       
    </SidebarProvider>
    
  )
}

export default DashboardPriver