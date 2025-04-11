import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
  } from "@/components/ui/sidebar"
  import Image from 'next/image'
  import {Button} from '@/components/ui/button'
  import {Plus} from 'lucide-react'
  import { SideBarOptions } from '@/services/Constants'
  import Link from 'next/link'
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader className='flex items-center mt-5'>
          <Image src='/logo.png' alt='logo' width={200} height={100} className='w-[150px]'/>
          <Button className='w-full mt-5'> <Plus/> Create New Interview</Button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup />
              <SidebarContent>
                <SidebarMenu>
                    {SideBarOptions.map((option,index)=>(
                       <SidebarMenuItem key={index} >
                         <SidebarMenuButton asChild>
                           <Link href={option.path}>
                             <option.icon />
                             <span>{option.name}</span> 
                            </Link> 
                         </SidebarMenuButton>
                                                  
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
              </SidebarContent>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  