import AlertMessage from '@/components/ui/alert';
import { API_URL } from '@/config/constants';
import Categories from '@/scenes/home/categories/index';
import { Category } from '@/types';

async function CategoriesContainer() {
  const categories: Category[] = await fetch(API_URL.CATEGORIES_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async (res) => await res.json());

  if (!categories)
    return (
      <AlertMessage
        message={'There was an error fetching the Categories. Please try again later.'}
        severity={'error'}
      />
    );

  return <Categories categories={categories} />;
}

export default CategoriesContainer;
