import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <>
 <footer className="bg-orange-700 text-white py-6 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

 
    <div className="text-center md:text-left">
      <h2 className="text-lg md:text-xl font-semibold">
        © 2026 Linkly. All Rights Reserved.
      </h2>
      <p className="text-sm md:text-base mt-1">
        Made with 💛 by Ankush Kaundal
      </p>
    </div>

    {/* Right Section */}
    <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
      <li>
        <Link href="/About" className="hover:underline">
          About Us
        </Link>
      </li>

      <li>
        <Link href="/Contact" className="hover:underline">
          Contact
        </Link>
      </li>

      <li>
        <Link href="/Privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </li>
    </ul>

  </div>
</footer>
   
   </>
  )
}

export default Footer
