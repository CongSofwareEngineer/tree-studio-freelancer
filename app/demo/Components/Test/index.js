'use client';
import { images, videos } from '@/config/images';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import useModal from '@/hooks/useModal';
import ImageEx from '@/components/ImageEx';

const BgVideo = styled.img`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* height: 100vh; */
  max-width: fit-content;
  min-height: 100vh;
  min-width: 100vw;
`;

const ImgCustom2 = styled.img`
  position: absolute;
  min-width: 100vw;
  position: absolute;

  bottom: 0;
`;

const ImgCustom2Top = styled.img`
  position: absolute;
  min-width: 100vw;
  position: absolute;
  inset: 0;
  bottom: 0;
`;

const VideoCustom = styled.video`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* height: 100vh; */
  max-width: fit-content;
  min-height: 100vh;
  min-width: 100vw;
  bottom: 0;,
  object-fit: fill;
`;

const Test = () => {
  const { openModal } = useModal();

  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        {/* <BgVideo src={images.bgVideo} fill quality={80} /> */}
        <VideoCustom
          src={videos.planet1}
          muted
          autoPlay
          playsInline
          loop
          controls={false}
          preload='auto'
        />
      </div>
      {/* <ImageEx /> */}
      <ImgCustom2
        src={images.frameMain}
        // fill
        // quality={80}
      />
      <ImgCustom2Top src={images.frameMainTop} />

      {/* <ImgCustom
        src={images.frameMain}
        fill
        quality={80}

      />
      <SvgOurService/>
      <video
        src={videos.planet1}
        muted
        autoPlay
        playsInline
        loop
        controls={false}
        preload='auto'
        className='w-screen h-screen'
        style={{ objectFit: 'fill' }}
      /> */}
    </div>
  );
};

export default Test;