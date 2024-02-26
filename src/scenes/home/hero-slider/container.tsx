import AlertMessage from '@/components/ui/alert';
import { API_URL } from '@/config/constants';
import HeroSlider from '@/scenes/home/hero-slider/index';
import { type Banner } from '@/types';

async function HeroSliderContainer() {
  const banner: Banner[] = await fetch(API_URL.BANNER_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async (res) => await res.json());

  if (!banner)
    return <AlertMessage message="There was an error fetching the banners. Please try again later." severity="error" />;

  return <HeroSlider bannersData={banner} />;
}

export default HeroSliderContainer;
