import React from 'react';
import dynamic from 'next/dynamic';

import NavigationLayout from '@/layouts/Navigation';

const RegistrationContainer = dynamic(() => import('@/containers/Stroberi/Registration'), { ssr: false });

const RegistrationPages = () => {
  return <RegistrationContainer />;
};

RegistrationPages.getLayout = function getLayout(page: React.ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>;
};

export default RegistrationPages;
