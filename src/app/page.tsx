import React from 'react'
import Image from 'next/image'
import Home from './components/Home.tsx'
import Team from './components/Team.tsx'

export default function Dashboard() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-2 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-cemter">
      <Home />
      <Team />
      </main>
    </div>
  )
}
