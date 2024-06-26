'use client'

import VideoBanner from '@/components/VideoBanner'
import { OBSERVER_KEY, QUEY_KEY } from '@/config/app'
import { images, videos } from '@/config/images'
import ObserverService from '@/utils/observer'
import { useCallback, useEffect, useState } from 'react'
import SlideVideo from './Components/SlideVideo'

const PageOurService = () => {
  const [loadedBanner2, setLoadedBanner2] = useState(false)

  useEffect(() => {
    ObserverService.on(OBSERVER_KEY.loadVideoBanner2, () =>
      setLoadedBanner2(true)
    )

    return () => {
      ObserverService.removeListener(OBSERVER_KEY.loadVideoBanner2)
    }
  }, [])

  const callBackLoaded = useCallback(() => {
    ObserverService.emit(OBSERVER_KEY.loadVideoBanner2)
  }, [])

  return (
    <>
      <div className="relative w-full h-screen  ">
        <div className="page-our-service  w-full h-full relative overflow-hidden">
          <VideoBanner
            url={videos.bannerOurService}
            poster={images.home.banner2Preload}
            callBackLoaded={callBackLoaded}
            typeCache={QUEY_KEY.preLoadOurService}
          />
          {/* <BgFrameBanner /> */}
          <SlideVideo keySVG="transparent" isLoaded={loadedBanner2} />
          {/* <FrameBtn /> */}

        </div>
      </div>
    </>
  )
}
export default PageOurService
