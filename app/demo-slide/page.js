'use client'
import FrameBtn from '@/components/FrameBanner/frameBtn';
import VideoBanner from '@/components/VideoBanner';
import { images, videos } from '@/config/images';
import Image from 'next/image';
import React, { useEffect } from 'react'
import styled from 'styled-components';
const ContainerSlide = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  flex-flow: wrap;
  flex-direction: column;
  scroll-snap-type: x mandatory;
  left: 50% ;
    right: 50% ;
    transform: translate(-50%, 0%) ;
  &::-webkit-scrollbar {
    display: none;
  } 
`;

const ItemSlide = styled.div`
  scroll-snap-align: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

const BgFrame = styled(Image)`
    min-height: 100vh !important; 
    position: absolute !important;
    width: auto !important;
    height: auto !important;
    inset: unset !important;
    bottom: 0 !important;
    max-width: none !important; 
    max-width: none !important;
    margin-left: 50%;
    transform: translate(-50%, 0%);
`;

const DemoSlide = () => {
  useEffect(() => {
    const slideVideo = document.getElementsByClassName('slide-video')[0]
    const slideVideoTrans = document.getElementsByClassName('slide-video-transparent')[0]
    slideVideo && slideVideoTrans.addEventListener('scroll', (e) => {
      setTimeout(() => {
        slideVideo.scrollTo({ left: slideVideoTrans.scrollLeft, behavior: 'smooth' })
      }, 100);
    })
  }, [])

  const renderVideo = () => {
    return (
      <ContainerSlide className='slide-video' >
        <ItemSlide id='1' >
          <VideoBanner
            url={videos.planet1}
            poster={images.home.bannerPreload}
          />
        </ItemSlide>
        <ItemSlide id='2'>
          <VideoBanner
            url={videos.banner2}
            poster={images.home.banner2Preload}
          />
        </ItemSlide>
        {/* <ItemSlide id='3'>
          <VideoBanner
            url={videos.banner2}
            poster={images.home.banner2Preload}
          />
        </ItemSlide> */}
      </ContainerSlide>
    )
  }

  const renderSlideVideo = () => {
    return (
      <ContainerSlide className='slide-video-transparent' >
        <ItemSlide />
        <ItemSlide />
        <ItemSlide />
      </ContainerSlide>
    )
  }
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      {renderVideo()}

      <BgFrame fill src={images.home.bgFrameBase}/>
      {renderSlideVideo()}
      <FrameBtn />
    </div>
  )
}

export default DemoSlide
