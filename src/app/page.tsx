import React from 'react'
import Home from './components/Home'
import Team from './components/Team'
import ContactForm from './components/ContactForm'
import Mission from './components/Mission'
import Header from './components/Header'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import './utils/fontawesome'
import Blogs from './components/Blogs'
import { getBlogPosts } from '@/lib/serverUtils'

export default async function Dashboard() {
  const posts = await getBlogPosts();

  // useEffect(() => {
  //   // Simulate a loading delay or wait for some data fetching logic

  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 2000) // 2 seconds for demonstration; adjust as needed

  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <>
          <Header />
          <Home />
          <Mission />
          <Team />
          <Blogs posts={posts} />
          <ContactForm />
        </>
  )
}
