'use client';

import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Stack } from '@/components/ui/stack';
import { type Banner } from '@/types';
import s from './hero.module.scss';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface Props {
  bannersData: Banner[];
}

const HeroSlider = ({ bannersData }: Props) => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={s.container}>
      <div className={s.swiper}>
        <Swiper
          loop
          slidesPerView={match ? 'auto' : 'auto'}
          centeredSlides
          spaceBetween={30}
          grabCursor
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: '.banner-left',
            nextEl: '.banner-right',
          }}
          modules={[Pagination, Navigation]}
          className={s.swiper_container}
        >
          <Stack direction="row" className={s.nav}>
            <IconButton color="secondary" className={clsx(['banner-left', s.nav_btn])}>
              <ChevronLeft fontSize="large" />
            </IconButton>
            <IconButton color="secondary" className={clsx(['banner-right', s.nav_btn])}>
              <ChevronRight fontSize="large" />
            </IconButton>
          </Stack>

          {bannersData.map((banner, index) => (
            <SwiperSlide key={index} className={s.slide}>
              <div className={s.img_wrap}>
                <Image fill src={match ? banner.mobileImageUrl : banner.mobileImageUrl} alt={`slide-${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
