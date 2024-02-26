import { siteConfig } from '@/config/site.config';
import { ThemeProvider } from '@/shared/theme-provider';
// styles
import 'swiper/css';
import 'swiper/css/pagination';
import '@global/index.scss';

import Layout from '@/components/Layout';
import MuiThemeRegistry from '@/theme/theme-provider';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <body
        // to prevent any warning that is caused by third party extensions like Grammarly
        suppressHydrationWarning
      >
        <ThemeProvider>
          <MuiThemeRegistry>
            <Layout>{children}</Layout>
          </MuiThemeRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
