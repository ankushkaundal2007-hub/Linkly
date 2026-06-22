"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from 'next/navigation'
import { React, useState,useEffect } from 'react'
import Link from 'next/link'

const url = () => {
  const { data: session } = useSession()
useEffect(() => {
  if(session?.user?.email){
   setUser_links({
    ...user_links,
    user:session?.user?.email
   })

  }

  
}, [session])


  if(!session){
    redirect("/Login")
  }
  const [message, setMessage] = useState("")

  const [user_links, setUser_links] = useState({
    Link: "",
    pref_Link: "",
    user:""
  })
  const [generated, setGenerated] = useState("")

  const handleChange = (e) => {
    setUser_links({
      ...user_links,
      [e.target.name]: e.target.value
    })

  }
  const handleSave = async (response) => {
   
    setGenerated("");
    response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user_links)
    })

    const data = await response.json();
    if (data.error) {
      setMessage(data.message);
      setGenerated("");
    } else {
      setMessage("");
      setGenerated(`${process.env.NEXT_PUBLIC_HOST}${user_links.pref_Link}`)
    }






  }


  return (
    <>
      <div className="w-[95%] sm:w-[90%] md:max-w-md mx-auto mt-5 bg-orange-700 backdrop-blur-lg border border-white/20 rounded-2xl p-4 md:p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Make Your URL Short in 1 Click
        </h2>

        <p className="text-gray-300 text-center mb-6">
          Paste your long URL and create a custom short link instantly.
        </p>

        <form className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Enter Your URL
            </label>
            <input
              name="Link"
              value={user_links.Link}
              onChange={(e) => handleChange(e)}
              type="url"
              placeholder="https://example.com/very-long-url"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Preferred Short URL
            </label>
            <div className="flex items-center rounded-lg border border-gray-600 overflow-hidden">
              <span  className="px-3 bg-white/5 text-gray-300 text-xs md:text-sm">
               {process.env.NEXT_PUBLIC_HOST}
              </span>
              <input
                name="pref_Link"
                value={user_links.pref_Link}
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="my-link"
                className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>


          <button
            onClick={() => { handleSave() }}
            type="button"
            className="w-full py-3 rounded-lg bg-orange-600 hover:bg-orange-700 transition-all duration-200 text-white font-semibold"
          >
            Generate Short URL
          </button>
        </form>
      </div>
      {generated && (<>
        <div className="mt-6 text-center bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-700 font-semibold mb-2">
            🎉 Short URL Generated Successfully!
          </p>

          <Link

            target="_blank"
            href={generated}
            className="text-blue-600 hover:text-blue-800 underline break-all font-medium"
          >
            {generated}
          </Link>
        </div>
        <button
          className="border-2 rounded-2xl border-white bg-orange-600 text-sm text-white w-fit my-2 mx-[45%] px-2 py-1"
          onClick={() => {
            setGenerated("");
            setUser_links(
              {
                Link: " ",
                pref_Link: " "
              }
            )
          }}
        >
          Generate Another
        </button>
      </>
      )}
      {message && (<>
        <div className="text-center text-red-500 bg-red-100 border border-red-300 rounded-lg p-3 mt-4">
          {message}
        </div>
        <div className="flex justify-center mt-4">
        <button
          className="border-2 rounded-2xl border-white bg-orange-600 text-sm text-white w-fit my-2 mx-[45%] px-2 py-1"
          onClick={() => {
            setGenerated("");
            setMessage("");
            setUser_links(
              {
                Link: " ",
                pref_Link: " "
              }
            )
          }}
        >
          Generate Another
        </button>
        </div>
        </>
      )}
  
    </>
  )
}

export default url
