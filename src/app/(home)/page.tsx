import { Suspense } from 'react';
import HomeScene from 'src/scenes/home';

import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject(),
};

export default function Home() {
  return (
    <Suspense>
      <HomeScene />
    </Suspense>
  );
}
