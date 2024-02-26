'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import { BottomNav } from '@/components/Layout/bottom-nav';
import { TopNav } from '@/components/Layout/top-nav';
import { MotionParent } from '@/components/MotionItems';
import s from './layout.module.scss';
import { AnimatePresence } from 'framer-motion';

const Layout = ({ children }: any) => {
  const pathname = usePathname();
  // const removeUnusedStyles = useNextCssRemovalPrevention();

  return (
    <main className={s.layout}>
      <AnimatePresence
        mode="wait"
        custom={{ pathname }}
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <MotionParent key={pathname}>
          <>
            <TopNav />

            {children}

            <BottomNav />
          </>
        </MotionParent>
      </AnimatePresence>
    </main>
  );
};

export default Layout;
