import Link from 'next/link'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <article className=" min-h-screen  max-w-4xl mx-auto py-12 text-white">
      <Link href="/">
        <button className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Home Page
        </button>
      </Link>
      {children}
    </article>
  )
}
