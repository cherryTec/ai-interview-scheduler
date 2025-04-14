
"use client"
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
import { usePathname } from "next/navigation"
  
  export function AppSidebar() {

    const path=usePathname();
    console.log('Current path:',path)

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
                       <SidebarMenuItem key={index} className='p-1'>
                         <SidebarMenuButton asChild  className={`p-5 ${path==option.path && 'bg-white'}`}>
                           <Link href={option.path}>
                             <option.icon className={`${path==option.path && 'text-primary'}`} />
                             <span className={`text-[16px] font-medium ${path==option.path && 'text-primary'}`}>{option.name}</span> 
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