'use client';

import React from 'react';

import s from './categories.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';

import { Typography } from '@/components/ui';
import { Stack } from '@/components/ui/stack';
import { Category } from '@/types';


interface Props {
  categories: Category[];
}

const Categories = ({ categories }: Props) => {
  return (
    <div className={s.container}>
      {categories.map((category, index) => (
        <Stack key={index} className={s.category}>
          <div className={s.img_wrap}>
            <Image fill src={category.imageUrl} alt={category.title} />
          </div>
          <Typography>{category.title}</Typography>
        </Stack>
      ))}
    </div>
  );
};

export default Categories;
