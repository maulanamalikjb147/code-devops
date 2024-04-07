import React, { memo } from 'react';
import { tryit } from 'radash';

import { Toast } from 'antd-mobile';

import OtpForm from '@/components/Stroberi/OtpForm';

import { useRouter } from 'next/router';
import { useRequest } from 'ahooks';

import { Binding, Registration, RegistrationOTP, BindingOTP } from '@/services/stroberi.service';

const OtpContainer = () => {
  const router = useRouter();
  const binding = useRequest(Binding, { manual: true });
  const registration = useRequest(Registration, { manual: true });
  const bindingOtp = useRequest(BindingOTP, { manual: true });
  const registrationOtp = useRequest(RegistrationOTP, { manual: true });

  const onResend = async () => {
    let error;

    const token = (window as any)?.Mobile?.getTokenWebview();
    const phoneNumber = (router?.query?.phoneNumber as string) || '';

    if (router?.query?.state === 'BINDING') [error] = await tryit(() => binding.runAsync({ token, phoneNumber }))();
    if (router?.query?.state === 'REGISTRATION') [error] = await tryit(() => registration.runAsync({ token }))();

    if (error) {
      Toast.show({ icon: 'fail', maskClassName: 'toast-center', content: (error as any)?.data?.responseDesc || 'Terjadi kesalahan!' });
    }
  };

  const onConfirm = async (passcode: string) => {
    let error;

    const token = (window as any)?.Mobile?.getTokenWebview();
    const password = (router?.query?.password as string) || '';

    if (router?.query?.state === 'BINDING') [error] = await tryit(() => bindingOtp.runAsync({ token, passcode }))();
    if (router?.query?.state === 'REGISTRATION') [error] = await tryit(() => registrationOtp.runAsync({ token, passcode, password }))();

    if (!error) {
      await router.push({ pathname: '/stroberi/receipt', query: { type: 'success' } }, 'otp');
    } else if (['003', '004'].includes((error as any)?.data?.responseCode)) {
      Toast.show({ icon: 'fail', maskClassName: 'toast-center', content: (error as any)?.data?.responseDesc || 'Terjadi kesalahan!' });
    } else {
      await router.push({ pathname: '/stroberi/receipt', query: { type: 'error' } }, 'otp');
    }
  };

  return <OtpForm phoneNumber={(router?.query?.phoneNumberMask as string) || '********'} onResend={onResend} onConfirm={onConfirm} />;
};

export default memo(OtpContainer);
