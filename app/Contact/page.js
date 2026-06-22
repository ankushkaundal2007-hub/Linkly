import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
   <>
  
    <div className="min-h-screen bg-gray-50">

  
      <section className="bg-orange-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Contact Me
          </h1>

          <p className="mt-4 text-lg md:text-xl text-orange-100">
            Have a question, suggestion, or want to connect?
          </p>
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">

        
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">📧</div>

            <h2 className="text-2xl font-bold text-orange-700">
              Email
            </h2>

            <p className="mt-3 text-gray-600 break-all">
              ankushkaundal2007@gmail.com
            </p>
          </div>

         
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">🐙</div>

            <h2 className="text-2xl font-bold text-orange-700">
              GitHub
            </h2>

            <Link
              href="https://github.com/ankushkaundal2007-hub"
              target="_blank"
              className="mt-3 block text-blue-600 hover:underline"
            >
             github.com/ankushkaundal2007-hub
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">💼</div>

            <h2 className="text-2xl font-bold text-orange-700">
              LinkedIn
            </h2>

            <Link
              href="https://www.linkedin.com/in/ankush-kaundal/"
              target="_blank"
              className="mt-3 block text-blue-600 hover:underline"
            >
              linkedin.com/in/ankush-kaundal
            </Link>
          </div>

        </div>
      </section>

     
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

          <div className="text-6xl mb-4">
            👨‍💻
          </div>

          <h2 className="text-3xl font-bold text-orange-700">
            Ankush Kaundal
          </h2>

          <p className="mt-3 text-lg text-gray-600">
            B.Tech CSE Student
          </p>

          <p className="text-gray-600">
            Thapar Institute of Engineering & Technology
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Passionate about Full Stack Development, Next.js,
            React, MongoDB, and building useful web applications.
            Linkly was created to make URL shortening and QR code
            generation simple, fast, and accessible.
          </p>
        </div>
      </section>

      <section className="bg-orange-700 text-white py-16">
        <div className="text-center px-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Build Something Amazing 🚀
          </h2>

          <p className="mt-4 text-orange-100">
            Feel free to reach out through any of the platforms above.
          </p>

        </div>
      </section>

    </div>

   </>
  )
}

export default Contact
