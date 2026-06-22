import React from 'react'

const Privacy = () => {
  return (
    <>
  
    <div className="min-h-screen bg-gray-50">

  
      <section className="bg-orange-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Privacy Policy
          </h1>

          <p className="mt-4 text-lg md:text-xl text-orange-100">
            Your privacy matters to us.
          </p>
        </div>
      </section>

   
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8">

          <div>
            <h2 className="text-2xl font-bold text-orange-700 mb-3">
              Introduction
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Linkly is a URL shortening service designed to help users
              create and manage shortened links. This Privacy Policy
              explains what information we collect and how it is used.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-700 mb-3">
              Information We Collect
            </h2>

            <p className="text-gray-700 leading-relaxed">
              When you use Linkly, we may collect:
            </p>

            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
              <li>Your email address through authentication services.</li>
              <li>URLs submitted for shortening.</li>
              <li>Basic usage information required for the service to function.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-700 mb-3">
              How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To create and manage shortened URLs.</li>
              <li>To provide QR code generation features.</li>
              <li>To improve user experience and maintain service quality.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-700 mb-3">
              Data Security
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We take reasonable measures to protect user data. However,
              no online service can guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-700 mb-3">
              Third-Party Services
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Linkly may use third-party services such as authentication
              providers and hosting platforms. These services have their
              own privacy policies and terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-700 mb-3">
              Changes to This Policy
            </h2>

            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy may be updated from time to time.
              Continued use of Linkly constitutes acceptance of any updates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-700 mb-3">
              Contact
            </h2>

            <p className="text-gray-700 leading-relaxed">
              If you have any questions regarding this Privacy Policy,
              please contact us through the details provided on the
              Contact page.
            </p>
          </div>

        </div>
      </section>

    </div>

    
    </>
  )
}

export default Privacy
