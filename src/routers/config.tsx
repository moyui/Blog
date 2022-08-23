/*
 * @Author       : gaoxiyu
 * @Date         : 2022-08-23 15:36:08
 * @LastEditTime : 2022-08-23 17:00:12
 * @LastEditors  : gaoxiyu
 */
import React, { ComponentType } from 'react';

const config = [
  {
    name: '首页',
    path: '/blog',
    element: 'list'
  },
  {
    name: '首页',
    path: '/blog/list',
    element: 'list'
  }
];

const lazyComponent = (component: typeof config) => {
  const modules = import.meta.glob(`@/pages/**/index.tsx`);
  return component.map((item) => {
    const Comp = modules[`/src/pages/${item.element}/index.tsx`] as () => Promise<{
      default: ComponentType<any>;
    }>;
    const CompWithLazy = React.lazy(Comp);
    return {
      ...item,
      element: (
        <React.Suspense fallback={<>...</>}>
          <CompWithLazy></CompWithLazy>
        </React.Suspense>
      )
    };
  });
};

export default lazyComponent(config);
