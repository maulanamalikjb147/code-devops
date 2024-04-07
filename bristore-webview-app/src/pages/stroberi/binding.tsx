import React from 'react';
import dynamic from 'next/dynamic';

import NavigationLayout from '@/layouts/Navigation';

const BindingContainer = dynamic(() => import('@/containers/Stroberi/Binding'), { ssr: false });

const BindingPages = () => {
  return <BindingContainer />;
};

BindingPages.getLayout = function getLayout(page: React.ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>;
};

export default BindingPages;
