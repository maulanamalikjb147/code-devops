import React from 'react';

import NavigationLayout from '@/layouts/Navigation';
import ReceiptContainer from '@/containers/Stroberi/Receipt';

const ReceiptPages = () => {
  return <ReceiptContainer />;
};

ReceiptPages.getLayout = function getLayout(page: React.ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>;
};

export default ReceiptPages;
