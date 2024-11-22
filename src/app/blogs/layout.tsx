"use client";

import Link from 'next/link'
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const router = useRouter();
  return (
    <article className=" min-h-screen  max-w-4xl mx-auto py-12 text-white">
      <button
      className="flex items-center space-x-2 my-4 text-blue-500 hover:text-blue-700 font-bold"
      onClick={() => router.back()} // Navigate to the previous page
    >
      <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5" /> {/* Back icon */}
      <span>Back</span>
    </button>
      {children}
    </article>
  )
}
