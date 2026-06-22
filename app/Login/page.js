"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import { redirect } from "next/navigation"

const Login = () => {
      const { data: session } = useSession()
      if(session){
        redirect("/url")
      }
  return (
   <>
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-white">
      <div className="w-full max-w-md border border-orange-200 rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-center text-gray-800">
          Welcome to Linkly
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Sign in with Google to start shortening and managing your links.
        </p>

        <button
          onClick={() => signIn("google")}
          className="w-full mt-8 flex items-center justify-center gap-3 bg-orange-700 hover:bg-orange-800 text-white py-3 rounded-xl font-semibold transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5 bg-white rounded-full p-0.5"
          >
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.205 36 24 36c-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            />
          </svg>

          Continue with Google
        </button>

        <p className="text-center text-xs text-gray-400 mt-6">
          Secure authentication powered by Google
        </p>

      </div>
    </div>
   </>
  )
}

export default Login
