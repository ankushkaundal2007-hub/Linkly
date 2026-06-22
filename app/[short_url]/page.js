import mongoose from "mongoose"
import connectDB from "@/lib/mongodb"
import Link from "@/models/Link";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const { short_url } = await params
  await connectDB();
  const existing= await Link.findOne(
    {
        pref_Link:short_url
    })

    if(existing){
        redirect(existing.Link)
    }
    else{
        redirect(process.env.NEXT_PUBLIC_HOST)
    }
  
  return <><div>My Post: {short_url}
  
  </div></>
}