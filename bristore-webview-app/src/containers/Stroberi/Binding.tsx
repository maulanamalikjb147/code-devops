import React, { memo, useEffect, useState } from 'react';
import { maskPhoneNumber } from '@/utils/functions/mask-phone-number';
import { tryit } from 'radash';

import { Toast } from 'antd-mobile';

import Header from '@/components/Stroberi/Header';
import InformationCard from '@/components/Stroberi/InformationCard';
import BindingForm from '@/components/Stroberi/BindingForm';
import Loading from '@/components/common/Loading';
import Result from '@/components/common/Result';

import { useRouter } from 'next/router';
import { useRequest } from 'ahooks';

import { User, Binding } from '@/services/stroberi.service';

const BindingContainer = () => {
  const router = useRouter();
  const user = useRequest(User, { manual: true });
  const binding = useRequest(Binding, { manual: true });

  const [device, setDevice] = useState<'unknown' | 'mobile' | 'web'>('unknown');

  const onBindingSubmit = async (params: { phoneNumber: string }) => {
    const mobileToken = (window as any)?.Mobile?.getTokenWebview();
    const [error] = await tryit(() => binding.runAsync({ phoneNumber: params.phoneNumber, token: mobileToken }))();
    if (!error) {
      const query = { state: 'BINDING', phoneNumber: params.phoneNumber, phoneNumberMask: maskPhoneNumber(params.phoneNumber) };
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
      <InformationCard dataSource={{ Nama: user.data.name, Email: user.data.email, 'No Telepon': user.data.phoneNumber }} />
      <BindingForm onFormSuccess={onBindingSubmit} />
    </div>
  );
};

export default memo(BindingContainer);
