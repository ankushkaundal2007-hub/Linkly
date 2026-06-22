import mongoose from "mongoose"
import connectDB from "@/lib/mongodb"
import Link from "@/models/Link";



export async function POST(request) {
    const body=await request.json();
    await connectDB();
    const User= await Link.findOne({
        pref_Link:body.pref_Link,
        user:body.user
})
    if(User){
      return Response.json({ message: 'URL already exists',error:true,success:false })
    }
    else{
    await Link.create({
     Link:body.Link,
     pref_Link:body.pref_Link,
     user:body.user

    }  
    )

  return Response.json({ message: 'Short URL successful',error:false,success:true })}
}


export async function GET(response){
await connectDB();
const data=await Link.find()

 return Response.json(data)

}



export async function DELETE(req) {
  await connectDB()
  const body = await req.json();

  await Link.findOneAndDelete({
    pref_Link:body.pref_Link}
  )

  

  return Response.json({
    success: true,
  });
}