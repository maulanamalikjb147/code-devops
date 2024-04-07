import React from 'react';
import { tryit } from 'radash';

import { Toast } from 'antd-mobile';
import Result from '@/components/common/Result';

import { useRouter } from 'next/router';
import { useRequest } from 'ahooks';

import { GenerateStroberiToken } from '@/services/stroberi.service';

const Receipt = () => {
  const router = useRouter();
  const generateToken = useRequest(GenerateStroberiToken, { manual: true });

  const openBristore = async () => {
    (window as any)?.Mobile?.backToHomeStroberi();
  };

  const openStroberi = async () => {
    const token = (window as any)?.Mobile?.getTokenWebview();

    const [error, data] = await tryit(() => generateToken.runAsync({ token }))();

    if (!error) {
      (window as any)?.Mobile?.openStroberi(data?.responseData?.token || '');
    } else {
      Toast.show({ icon: 'fail', maskClassName: 'toast-center', content: (error as any)?.data?.responseDesc || 'Terjadi kesalahan!' });
    }
  };

  const RECEIPT_MAPPER = {
    success: {
      type: 'success',
      title: 'Akun Berhasil Terhubung!',
      description: 'Anda telah berhasil menghubungkan akun BRIStore ke Stroberi Kasir.',
      mainButton: {
        title: 'Buka Stroberi Kasir',
        action: openStroberi
      },
      secondaryButton: {
        title: 'Kembali ke BRIStore',
        action: openBristore
      }
    },
    error: {
      type: 'error',
      title: 'Gagal Menghubungkan Akun!',
      description: 'Gagal menghubungkan akun anda, silakan mencoba kembali.',
      secondaryButton: {
        title: 'Kembali ke BRIStore',
        action: openBristore
      }
    }
  };

  return (
    <div>
      <Result {...RECEIPT_MAPPER[(router?.query?.type as 'error' | 'success') || 'error']} />
    </div>
  );
};

export default Receipt;
