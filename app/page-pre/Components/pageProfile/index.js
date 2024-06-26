import BgFrameBanner from '@/components/BgFrameBanner'
import FrameBtn from '@/components/FrameBanner/frameBtn'
import VideoBanner from '@/components/VideoBanner'
import { images, videos } from '@/config/images'
import React, { useEffect, useRef, useState } from 'react'
import Content from './Component/Content'
import './styles.scss'
import { useInView } from 'react-intersection-observer'

const arr = []
for (let index = 0; index < 9; index++) {
  arr.push('')
}

const PageProfile = ({
  clickOurService = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {},
  clickPageHome = () => {}

}) => {
  const [isFirstLoadPage, setIsFirstLoadPage] = useState(true)
  const { ref: refBanner, inView: inViewBanner } = useInView({ threshold: 0.2 })

  useEffect(() => {
    setIsFirstLoadPage(false)
  }, [])

  useEffect(() => {
    const banner = document.getElementsByClassName('banner-base')[0]

    if (banner) {
      if (inViewBanner) {
        banner.classList.add('in-viewport-content')
      } else {
        banner.classList.remove('in-viewport-content')
      }
    }
  }, [inViewBanner])

  return (

    <div className='w-full h-screen overflow-x-hidden snap-mandatory snap-y'>

      <div className='  w-full snap-start h-screen relative  ' >
        <VideoBanner className={!isFirstLoadPage && 'banner-base'} videoRef={refBanner} poster={images.home.profilePreload} url={videos.bannerProfile} />
        <BgFrameBanner />
        <FrameBtn
          clickContactAs={clickContactAs}
          clickOurService={clickOurService}
          clickAboutUs={clickAboutUs}
          clickPageHome={clickPageHome}
        />
      </ div>
      <Content />
    </div>

  )
}

export default PageProfile
