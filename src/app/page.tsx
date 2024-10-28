import Home from "./components/Home";
import Header from "./components/Header";
import Team from "./components/Team";
import Footer from "./components/Footer";

import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevents Font Awesome from adding its own CSS
import './utils/fontawesome'; // Import the file where all icons are added
import ContactForm from "./components/ContactForm";



export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] justify-items-center items-center">
    <main className="flex-grow flex flex-col gap-8 items-center sm:items-center mt-16 p-8 pb-20">
    <Home />
    <Team />
    <ContactForm />
    </main>
    <Footer/>
  </div> 
    
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <Header />
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center p-8 pb-20">
    //   <Home />
    //   <Team />
    //   </main>
    //   <Footer/>
    // </div>
  );
}
