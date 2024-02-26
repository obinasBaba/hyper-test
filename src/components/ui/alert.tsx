'use client';

import { Alert, AlertTitle } from '@mui/material';
import React from 'react';

import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';

interface Props {
  message: string;
  severity: 'error' | 'success' | 'info' | 'warning';
  title?: string;
}

const AlertMessage = ({ message, severity, title }: Props) => {
  return (
    <Stack width="100%" alignItems="center">
      <Alert severity={severity} sx={{ m: '2rem' }}>
        {title && <AlertTitle>{title}</AlertTitle>}
        <Typography>{message}</Typography>
      </Alert>
    </Stack>
  );
};

export default AlertMessage;
