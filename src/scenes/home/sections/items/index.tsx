'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import s from './items.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';

import { IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';

import { Typography } from '@/components/ui';
import { Stack } from '@/components/ui/stack';
import { ChevronLeft, ChevronRight, Star } from '@mui/icons-material';
import { ItemsType } from '@/types';


interface Props {
  sectionData: ItemsType;
}

const Items = ({ sectionData }: Props) => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));
  const [render, setRender] = React.useState(false);

  React.useEffect(() => {
    setRender(true);
  }, []);

  if (!render) return null;

  return (
    <div className={s.container}>
      <Stack className={s.nav_title}>
        <Stack gap=".5rem">
          <Typography variant="h6" className={s.title}>
            {sectionData?.title ?? '-'}
          </Typography>
          <Typography color="gray">{sectionData?.subtitle ?? '-'}</Typography>
        </Stack>

        <Stack direction="row" className={s.nav}>
          <IconButton className={clsx([`${sectionData.code}_left`])}>
            <ChevronLeft />
          </IconButton>
          <IconButton className={clsx([`${sectionData.code}_right`])}>
            <ChevronRight />
          </IconButton>
        </Stack>
      </Stack>

      <Swiper
        enabled={match}
        loop={match}
        slidesPerView={'auto'}
        grabCursor={match}
        spaceBetween={15}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={{
          prevEl: `.${sectionData.code}_left`,
          nextEl: `.${sectionData.code}_right`,
        }}
        modules={match ? [Navigation, Autoplay] : []}
        className={s.swiper}
      >
        {sectionData.items.map((item, index) => (
          <SwiperSlide key={index} className={s.slide}>
            <Stack className={s.product_card}>
              <div className={s.img_wrap}>
                <Image fill src={item.publication.media[0].uri} alt={`slide-${index}`} />
                <div className={s.some}>
                  <Typography fontSize=".7rem" variant="subtitle2" fontWeight="300">
                    {item.publication.tagsOnImage?.join(', ')}
                  </Typography>
                </div>
              </div>

              <Typography className={s.p_title} variant="body2">
                {item.publication.productName}
              </Typography>

              <Stack className={s.price_detail}>
                <Typography color="error" className={s.discount} fontWeight="bold">
                  {item.publication.priceInfo.discountRate ? `${item.publication.priceInfo.discountRate}%` : ''}
                </Typography>

                <Typography className={s.price} variant="h6">
                  {
                    // format the priceing with money number
                    new Intl.NumberFormat('ko-KR', {
                      // style: 'currency',
                      // currency: 'KRW',
                    }).format(item.publication.priceInfo.price)
                  }
                  원
                </Typography>
              </Stack>

              <Stack className={s.price_detail}>
                <Stack direction="row" alignItems="center" className={s.rating}>
                  <Star /> {item.publication.rating}
                </Stack>
              </Stack>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Items;
