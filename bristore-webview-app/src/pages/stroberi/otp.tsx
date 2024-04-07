import React from 'react';

import NavigationLayout from '@/layouts/Navigation';
import ContainerStroberiOtp from '@/containers/Stroberi/Otp';

const OtpPages = () => {
  return <ContainerStroberiOtp />;
};

OtpPages.getLayout = function getLayout(page: React.ReactElement) {
  return <NavigationLayout isUseRouter={true}>{page}</NavigationLayout>;
};

export default OtpPages;
