"use client"
import { QrCode } from 'lucide-react';
import QRCode from "react-qr-code";
import { React, useEffect, useState } from 'react'
import { Copy } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from "next/navigation"

const links = () => {
  const { data: session } = useSession()
  const [remove, setRemove] = useState(false)
  const [links, setLinks] = useState([])
  const [showQR, setShowQR] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  useEffect(() => {
    if (session?.user?.email) {
      getData();
    }
  }, [session,remove])
const handleDelete=async (link) => {
  
  const res = await fetch("/api/generate", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
     pref_Link:link
    }),
  });
  setRemove(!remove)
}

  if (!session) {
    redirect("/Login")
  }

  const getData = async () => {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: session?.user?.email,
      }),
    });
    const response = await res.json()
    console.log(response)
    setLinks(response)
    console.log(links)
  }
  return (
    <>
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-orange-100">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-orange-700 text-white">
              <th className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base">Short Link</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base">Original URL</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base">Copy</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base">QR Code</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody className="text-black">
            {links.map((item, index) => (
              <tr
                key={index}
                className="border-b border-orange-100 hover:bg-orange-50 transition"
              >
                <td className="px-6 py-4">
                  <a
                    href={item.pref_Link}
                    target="_blank"
                    className="text-orange-700 font-medium hover:underline"
                  >
                    {`${process.env.NEXT_PUBLIC_HOST}${item.pref_Link}`}
                  </a>
                </td>

                <td className="px-3 md:px-6 py-4 text-gray-700 max-w-[150px] md:max-w-md truncate">
  {item.Link}
</td>

                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_HOST}${item.pref_Link}`)}
                    className="p-2 rounded-lg hover:bg-orange-100 transition"
                  >
                    <Copy className="w-5 h-5 text-orange-700" />
                  </button>
                </td>
                <td className="px-3 md:px-6 py-4 text-center">
                  <button
                    onClick={() => {
                      setSelectedUrl(`${process.env.NEXT_PUBLIC_HOST}${item.pref_Link}`);
                      setShowQR(true);
                        className="p-2 rounded-lg hover:bg-orange-100"
                    }}
                  >
                    <QrCode className="w-5 h-5 md:w-6 md:h-6 text-orange-700" />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item.pref_Link)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     {showQR && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50">
    <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center">
      <QRCode value={selectedUrl} size={200} />

      <button
        onClick={() => setShowQR(false)}
        className="mt-4 bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800"
      >
        Close
      </button>
    </div>
  </div>
)}
    </>
  )
}

export default links
