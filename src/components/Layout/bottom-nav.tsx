import { IconButton } from '@mui/material';
import React from 'react';

import { Typography } from '@/components/ui';
import { Stack } from '@/components/ui/stack';
import s from './layout.module.scss';
import { FavoriteBorder, Home, MenuOutlined, Person, Search } from '@mui/icons-material';

const Icons = [Home, Person, Search, MenuOutlined, FavoriteBorder];

export const BottomNav = () => {
  return (
    <div className={s.bottom_nav}>
      {
        // loop 5 times
        Icons.map((Icon, index) => (
          <Stack key={index} direction="column" alignItems="center">
            <IconButton>
              <Icon sx={{ fontSize: '2rem' }} color={index === 0 ? 'primary' : 'secondary'} />
            </IconButton>
            <Typography variant="body2">카테고리</Typography>
          </Stack>
        ))
      }
    </div>
  );
};
