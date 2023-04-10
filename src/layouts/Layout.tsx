import React from 'react'

import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'

type Props = {}

export const Layout = (children: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}