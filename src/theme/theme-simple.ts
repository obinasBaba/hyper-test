import { red } from '@mui/material/colors';
import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';

import { createTypography } from '@/theme/create-typography'; // #ededed

export default function createTheme(light: boolean) {
  const HeadingFont = 'var(--sofia-pro)';
  const fontFamily = 'var(--sofia-pro)';

  const typography = createTypography();

  return responsiveFontSizes(
    createMuiTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 576,
          md: 768,
          lg: 992,
          xl: 1200,
          xxl: 1600,
          xxxl: 1900,
        } as any,
      },

      typography,

      palette: {
        mode: light ? 'light' : 'dark',

        background: {
          // default: '#0D0D0D',
        },
        primary: {
          main: '#10B981',
        },
        secondary: {
          main: '#8d8d8d',
        },
        error: {
          main: red.A400,
        },
      },
    }),
    {}
  );
}
