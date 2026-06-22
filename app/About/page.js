import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <>
    <div className="min-h-[80vh] bg-gray-50">


  <section className="bg-orange-700 text-white py-10 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        About Linkly
      </h1>

      <p className="mt-6 text-lg md:text-2xl">
        Shorten. Share. Grow.
      </p>
    </div>
  </section>


  <section className="max-w-6xl mx-auto px-6 py-16">
    <div className="flex flex-col md:flex-row items-center gap-12">

      <div className="w-full md:w-1/2">
        <img
          src="/duplicidad.jpeg"
          alt="Linkly"
          className="rounded-3xl shadow-xl"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">
          What is Linkly?
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          Linkly is a modern URL shortening platform that helps
          users create clean, memorable links in seconds.
          Generate QR codes instantly, manage your links from a
          dashboard, and share them anywhere with ease.
        </p>

        <p className="text-gray-700 text-lg mt-4 leading-relaxed">
          Whether you're a student, creator, business owner,
          or developer, Linkly makes link sharing faster and
          more professional.
        </p>
      </div>

    </div>
  </section>

  {/* Features */}
  <section className="bg-white py-16">
    <div className="max-w-6xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center text-orange-700 mb-12">
        Why Choose Linkly?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-orange-50 p-8 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold mb-3">
            🔗 URL Shortening
          </h3>

          <p className="text-gray-600">
            Create clean and memorable links that are easy to share.
          </p>
        </div>

        <div className="bg-orange-50 p-8 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold mb-3">
            📱 QR Codes
          </h3>

          <p className="text-gray-600">
            Generate QR codes instantly for every shortened URL.
          </p>
        </div>

        <div className="bg-orange-50 p-8 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold mb-3">
            ⚡ Fast & Secure
          </h3>

          <p className="text-gray-600">
            Built with Next.js and MongoDB for speed and reliability.
          </p>
        </div>

      </div>
    </div>
  </section>

  <section className="py-16 px-6">
    <div className="max-w-4xl mx-auto text-center">

      <h2 className="text-4xl font-bold text-orange-700 mb-6">
        Our Mission
      </h2>

      <p className="text-xl text-gray-700 leading-relaxed">
        Our goal is to simplify online sharing by providing
        a fast, secure, and user-friendly URL shortening
        experience. We believe sharing links should be
        effortless, accessible, and professional.
      </p>

    </div>
  </section>


  <section className="bg-orange-700 text-white py-16 mb-14">
    <div className="text-center">

      <h2 className="text-4xl font-bold">
        Ready to Start?
      </h2>

      <p className="mt-2 text-lg">
        Create your first short link today.
      </p>

      <Link href="/url">
        <button className="mt-2 bg-white text-orange-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
          Try Linkly Now
        </button>
      </Link>

    </div>
  </section>

</div>
    
    </>
  )
}

export default About
