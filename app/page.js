import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 gap-10">

  {/* Text Section */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Simplify Sharing,
      <span className="text-orange-600"> Amplify Reach.</span>
    </h1>

    <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-xl">
      Create short links, generate QR codes, and manage your URLs with ease.
      Fast, secure, and built for the modern web.
    </p>

    <div className="mt-8">
      <Link href="/url">
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl text-lg md:text-xl font-semibold transition-all duration-300 shadow-lg hover:scale-105">
          Try Now →
        </button>
      </Link>
    </div>
  </div>

  
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="/duplicidad.jpeg"
    
      className="w-72 md:w-[500px] rounded-3xl shadow-2xl"
    />
  </div>

</div>
  );
}
