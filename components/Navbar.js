"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import Link from 'next/link'
import { redirect } from "next/navigation"

const Navbar = () => {
  const { data: session } = useSession()
   



  
  return (
   <nav className="flex items-center justify-between bg-orange-700 text-white px-4 md:px-8 py-3">
  
  <div className="text-2xl md:text-4xl font-bold">
    Linkly
  </div>

  <ul className="flex items-center gap-3 md:gap-6 text-sm md:text-lg">
    
    <li>
      <Link href="/" className="hover:underline">
        Home
      </Link>
    </li>

    <li>
      <Link href="/About" className="hover:underline">
        About
      </Link>
    </li>

    <li>
      <Link href="/Contact" className="hover:underline">
        Contact
      </Link>
    </li>

    {session && (
      <li>
        <Link href="/links" className="hover:underline">
          Links
        </Link>
      </li>
    )}

    {!session && (
      <li>
        <Link
          href="/Login"
          className="bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-lg text-sm md:text-base"
        >
          Register
        </Link>
      </li>
    )}

    {session && (
      <li>
        <button
          onClick={() => signOut()}
          className="bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-lg text-sm md:text-base transition"
        >
          Log Out
        </button>
      </li>
    )}

  </ul>
</nav>
  )
}

export default Navbar
