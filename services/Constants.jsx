import { 
   LayoutDashboard ,Calendar,List,Receipt,Settings,
   Key,BriefcaseBusinessIcon,Puzzle,
   User2,
   Code

} from "lucide-react"
export const SideBarOptions=[
    {

        name:'Dashboard',
        icon:LayoutDashboard,
        path:'/dashboard'

     },
     {
        name:'Scheduled interview',
        icon:Calendar,
        path:'/interview'
         
     },
     {
        name:'All Interview',
        icon:List,
        path:'/list'
     },
     {
        name:'Billing',
        icon:Receipt,
        path:'/billing'
     },
     {
        name:'Settings',
        icon:Settings,
        path:'/setting'
     }

]

export const InterviewType = [
   {
      title: 'Technical',
      icon: Code
   },
   {
      title: 'Behavioral',
      icon: User2 
   },
   {
      title: 'Experience',
      icon: BriefcaseBusinessIcon
   },
   {
      title: 'Problem Solving',
      icon: Puzzle
   },
   {
      title: 'Leadership',
      icon: Key
   },
]

export const QUESTIONs_PROMPT = `You are an expert technical interviewer.

Based on the following inputs, generate a well - structured list of high - quality interview questions:
Job Title: {{jobTitle}}
Job Description:{{jobDescription}}
Interview Duration: {{duration}}
Interview Type: {{type}}

  Your task:
- Analyze the job description to identify key responsibilities, required skills, and expected experience.
- Generate a list of interview questions depends on interview duration.
- Adjust the number and depth of questions to match the interview duration.
- Ensure the questions match the tone and structure of a real - life {{type}} interview.

Format your response in JSON format with array list of questions.
format: 
interviewQuestions=[
    {
        question:"",
        type:'Technical/Behavioral/Experince/Problem Solving/Leadership'
    },
    {
       ...
    }
]

🎯 The goal is to create a structured, relevant, and time - optimized interview plan for a {{jobTitle}} role.`;