import { NextResponse } from "next/server";
import { QUESTIONs_PROMPT } from '@/services/Constants'
import OpenAI from "openai"

export async function POST(req) {

    const {jobPosition,jobDescription,duration,type} = await req.json();

    const FINAL_PROMPT=QUESTIONs_PROMPT
    .replace('{{jobTitle}}',jobPosition)
    .replace('{{jobDescription}}',jobDescription)
    .replace('{{duration}}',duration)
    .replace('{{type}}',type)

    console.log(FINAL_PROMPT)

  try{ 
    const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: process.env.OPENROUTER_API_KEY,   
      })

      const completion = await openai.chat.completions.create({
        model: "google/gemini-2.5-pro-exp-03-25:free",
        messages: [
          { role: "user", content: FINAL_PROMPT }
        ],
        
      })
    
      return NextResponse.json(completion.choices[0].message)

    
    }
    catch(e){
        console.log(e)
        return NextResponse.json(e)
    }
}