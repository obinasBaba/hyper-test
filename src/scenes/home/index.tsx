import { Suspense } from 'react';

import { CircularProgress } from '@/components/ui';
import CategoriesContainer from '@/scenes/home/categories/container';
import HeroSliderContainer from '@/scenes/home/hero-slider/container';
import Sections from '@/scenes/home/sections';
import s from './homescene.module.scss';

const Loading = () => {
  return (
    <div className={s.loading}>
      <CircularProgress />
    </div>
  );
};

async function HomeScene() {
  return (
    <div className={s.container}>
      <Suspense fallback={<Loading />}>
        <HeroSliderContainer />
      </Suspense>

      <div className={s.wrapper}>
        <Suspense fallback={<Loading />}>
          <CategoriesContainer />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Sections />
        </Suspense>
      </div>
    </div>
  );
}

export default HomeScene;
