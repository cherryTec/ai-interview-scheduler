import { LayoutDashboard ,Calendar,List,Receipt,Settings} from "lucide-react"
export const SideBarOptions=[
    {

        name:'Dashboard',
        icon:LayoutDashboard,
        path:'/dashboard'

     },
     {
        name:'Scheduled interview',
        icon:Calendar,
        path:'/dashboard'
         
     },
     {
        name:'All Interview',
        icon:List,
        path:'/dashboard'
     },
     {
        name:'Billing',
        icon:Receipt,
        path:'/dashboard'
     },
     {
        name:'Settings',
        icon:Settings,
        path:'/dashboard'
     }

]