import AlertMessage from '@/components/ui/alert';
import { API_URL } from '@/config/constants';
import Items from '@/scenes/home/sections/items';
import { type ItemsType } from '@/types';
import s from './sections.module.scss';

async function Sections() {
  const sectionsData: {
    items: ItemsType[];
  } = await fetch(API_URL.ITEMS_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // cache: 'no-cache',
  }).then(async (res) => await res.json());

  if (!sectionsData)
    return (
      <AlertMessage message={'There was an error fetching the Products. Please try again later.'} severity={'error'} />
    );

  return (
    <div className={s.container}>
      {sectionsData.items
        ?.filter((i) => i.items?.length > 0)
        .map((item, index) => <Items key={index} sectionData={item} />)}
    </div>
  );
}

export default Sections;
