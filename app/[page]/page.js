import { PAGE_EX } from '@/config/app'
import React from 'react'
import { notFound } from 'next/navigation'

// import AboutScreen from './Component/aboutUs'
// import PageOurService from './Component/ourService'
// import PageProfile from './Component/portfolio'
// import PageHome from './Component/home'
// import PageContactAs from './Component/contactAt'
import dynamic from 'next/dynamic'
const PageContactAs = dynamic(() => import('./Component/contactAt'), { ssr: false })
const PageHome = dynamic(() => import('./Component/home'), { ssr: false })
const PageProfile = dynamic(() => import('./Component/portfolio'), { ssr: false })
const PageOurService = dynamic(() => import('./Component/ourService'), { ssr: false })
const AboutScreen = dynamic(() => import('./Component/aboutUs'), { ssr: false })

const PageScreen = ({ page }) => {
  switch (page) {
  case PAGE_EX.ourService:
    return <PageOurService />

  case PAGE_EX.portfolio:
    return <PageProfile />

  case PAGE_EX.home:
    return <PageHome />

  case PAGE_EX.aboutUs:
    return <AboutScreen />

  case PAGE_EX.contactAt:
    return <PageContactAs />
  default:
    notFound()
  }
}

export default PageScreen
