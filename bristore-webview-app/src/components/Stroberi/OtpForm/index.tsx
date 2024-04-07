import React, { memo, useState } from 'react';
import { useLockFn } from 'ahooks';
import dynamic from 'next/dynamic';

import { AutoCenter, PasscodeInput, Space, NumberKeyboard, Button, Toast } from 'antd-mobile';

import * as styles from '@/components/Stroberi/OtpForm/styles';

const CountdownResend = dynamic(() => import('@/components/Stroberi/CountdownResend'), {
  ssr: false
});

const OtpForm = ({ phoneNumber, onResend, onConfirm }: OtpFormProps) => {
  const [otp, setOtp] = useState('');

  const onConfirmClick = useLockFn(async () => {
    if (otp.length === 6) await onConfirm(otp);
    else Toast.show({ icon: 'fail', maskClassName: 'toast-center', content: 'Anda harus mengisi OTP terlebih dahulu.' });
  });

  const onResendClick = useLockFn(async () => {
    await onResend();
  });

  return (
    <AutoCenter>
      <h1 css={styles.title}>Masukkan Kode OTP</h1>

      <Space direction={'vertical'} block={true} css={styles.container}>
        <span css={styles.description}>Kami telah mengirimkan kode OTP melalui WhatsApp ke nomor {phoneNumber}.</span>

        <div css={styles.passcodeContainer}>
          <PasscodeInput value={otp} caret={false} keyboard={<NumberKeyboard />} seperated={true} onChange={(value) => setOtp(value)} />
        </div>

        <div css={styles.passcodeResend}>
          <span className={'description'}>Belum mendapatkan kode OTP anda?</span>
          <CountdownResend duration={5 * (60 * 1000)} onResend={onResendClick} />
        </div>

        <Button color={'primary'} shape={'rounded'} block={true} loading={'auto'} onClick={onConfirmClick} disabled={!(otp.length === 6)}>
          Konfirmasi
        </Button>
      </Space>
    </AutoCenter>
  );
};

export type OtpFormProps = {
  phoneNumber: string;
  onResend: () => Promise<void>;
  onConfirm: (passcode: string) => Promise<void>;
};

export default memo(OtpForm);
