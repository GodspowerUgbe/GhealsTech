// components/AOSProvider.js
'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animation happens only once
      mirror: false, // Elements animate out while scrolling past them
    })
  }, [])

  return <>{children}</>
}