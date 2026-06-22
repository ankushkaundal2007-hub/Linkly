import mongoose from "mongoose"
import connectDB from "@/lib/mongodb"
import Link from "@/models/Link";




export async function POST(req) {
      await connectDB();
  const body = await req.json();
 

  const user = await Link.find({
    user: body.email,
  });
 

  return Response.json(user);
}