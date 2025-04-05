import useSWR from 'swr';

import MainLayout from '../layouts/MainLayout';
import fetcher from '../lib/fetcher';

function ListPage() {
  const { data, error } = useSWR('/surveys', fetcher);

  if (error) return <div> 에러 발생 </div>;
  if (!data) return <div> 로딩중 </div>;

  return <MainLayout> ListPage </MainLayout>;
}

export default ListPage;
