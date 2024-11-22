'use client'

import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Team from './components/Team'
import ContactForm from './components/ContactForm'
import Mission from './components/Mission'
import Header from './components/Header'
import Loader from './components/Loader/Loader'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import './utils/fontawesome'
import Blogs from './components/Blogs'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate a loading delay or wait for some data fetching logic

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 seconds for demonstration; adjust as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Loader /> // Display loader until loading is set to false
      ) : (
        <>
          <Header />
          <Home />
          <Mission />
          <Team />
          <Blogs />
          <ContactForm />
        </>
      )}
    </>
  )
}
