import React, { ComponentType } from 'react';

const lazy = (component: string) => {
  const modules = import.meta.glob(`@/pages/${component}.tsx`);

  const Comp = React.lazy(() => import.meta.glob(`@/pages/${component}.tsx`));
  return (
    <React.Suspense fallback={<>...</>}>
      <Comp />
    </React.Suspense>
  );
};

export default [
  {
    name: '首页',
    path: '/blog',
    element: lazy('list')
  },
  {
    name: '首页',
    path: '/blog/list',
    element: lazy('list')
  },
  {
    name: '详情',
    path: '/blog/detail',
    element: lazy('detail')
  }
];
