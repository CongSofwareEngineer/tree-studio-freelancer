import BgFrameBanner from '@/components/BgFrameBanner'
import FrameBtn from '@/components/FrameBanner/frameBtn'
import VideoBanner from '@/components/VideoBanner'
import { images, videos } from '@/config/images'
import React from 'react'

const PageAboutUse = ({
  clickProfile = () => {},
  clickOurService = () => {},
  clickContactAs = () => {},
  clickPageHome = () => {}
}) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        <VideoBanner poster={images.home.aboutUsPreload} url={videos.bannerAboutUs} />
        <BgFrameBanner />
        <FrameBtn
          clickContactAs={clickContactAs}
          clickProfile={clickProfile}
          clickOurService={clickOurService}
          clickPageHome={clickPageHome}
        />
      </div>
    </div>
  )
}

export default PageAboutUse
