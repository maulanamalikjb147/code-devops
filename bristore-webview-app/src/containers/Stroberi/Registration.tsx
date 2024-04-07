import React, { memo, useEffect, useState } from 'react';
import { tryit } from 'radash';

import { Toast } from 'antd-mobile';

import Loading from '@/components/common/Loading';
import Header from '@/components/Stroberi/Header';
import RegisterForm from '@/components/Stroberi/RegistrationForm';
import Result from '@/components/common/Result';

import { useRequest } from 'ahooks';
import { useRouter } from 'next/router';

import { User, Registration } from '@/services/stroberi.service';

const RegistrationContainer = () => {
  const router = useRouter();
  const user = useRequest(User, { manual: true });
  const registration = useRequest(Registration, { manual: true });

  const [device, setDevice] = useState<'unknown' | 'mobile' | 'web'>('unknown');

  const onRegistrationSubmit = async (params: { phoneNumber: string; phoneNumberMask: string; password: string }) => {
    const mobileToken = (window as any)?.Mobile?.getTokenWebview();
    const [error] = await tryit(() => registration.runAsync({ token: mobileToken }))();

    if (!error) {
      const query = { state: 'REGISTRATION', phoneNumberMask: params.phoneNumberMask, password: params.password };
      await router.push({ pathname: '/stroberi/otp', query: query }, 'otp');
    } else {
      Toast.show({ icon: 'fail', maskClassName: 'toast-center', content: (error as any)?.data?.responseDesc || 'Terjadi kesalahan!' });
    }
  };

  useEffect(() => {
    const mobileToken = (window as any)?.Mobile?.getTokenWebview();
    if (mobileToken) {
      setDevice('mobile');
      user.run({ token: mobileToken });
    } else {
      setDevice('web');
    }
  }, []);

  if (device === 'unknown' || user.loading) {
    return <Loading />;
  }

  if (user.error) {
    return (
      <Result
        type={'error'}
        title={'Terjadi kesalahan!'}
        description={'Terjadi kesalahan ketika mengambil data server!  Coba lagi nanti.'}
        secondaryButton={{ title: 'Kembali ke BRIStore', action: async () => await (window as any)?.Mobile?.backToHomeStroberi() }}
      />
    );
  }

  if (!user.data) {
    return (
      <Result
        type={'error'}
        title={'Terjadi kesalahan!'}
        description={'Pastikan anda mengakses fitur ini menggunakan aplikasi BRIStore.'}
        secondaryButton={{ title: 'Kembali ke BRIStore', action: async () => await (window as any)?.Mobile?.backToHomeStroberi() }}
      />
    );
  }

  return (
    <div>
      <Header />
      <RegisterForm user={user.data} onFormSuccess={onRegistrationSubmit} />
    </div>
  );
};

export default memo(RegistrationContainer);
