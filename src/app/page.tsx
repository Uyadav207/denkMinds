import React from "react"
import Home from "./components/Home"
import Team from "./components/Team"
import ContactForm from "./components/ContactForm"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false
import "./utils/fontawesome"

const Dashboard: React.FC = () => {
  return (
    <>
      <Home />
      <Team />
      <ContactForm />
    </>
  )
}

export default Dashboard
