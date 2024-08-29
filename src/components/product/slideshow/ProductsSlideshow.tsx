'use client'
import { useState } from 'react';
import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import Image from 'next/image';


interface Props {
  images: string[];
  title: string;
  classname?: string;
}

export const ProductsSlideshow = ({images, title, classname}: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className={classname}>
      <Swiper
        // style={{
        //   '--swiper-navigation-color': '#e8e8e8',
        //   '--swiper-pagination-color': '#e8e8e8',
        // } as React.CSSProperties}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 3000
        }}
        thumbs={{ 
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {
          images.map( image => (
            <SwiperSlide key={image}>
              <Image 
                width={1024}
                height={800}
                src={`/products/${image}`}
                alt={title}
                className='object-fill'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          images.map( image => (
            <SwiperSlide key={image}>
              <Image 
                width={300}
                height={240}
                src={`/products/${image}`}
                alt={title}
                className='object-fill'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}