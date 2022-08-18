import React from 'react';

const lazy = (component: string) => {
    const Comp = React.lazy(() => import(`@/pages/${component}`))
    return <React.Suspense fallback={<>...</>}><Comp /></React.Suspense>
}


export default [{
    name: '首页',
    path: '/blog',
    element: lazy('list'),
}, {
    name: '详情',
    path: '/blog/detail',
    element: lazy('detail')
}]
