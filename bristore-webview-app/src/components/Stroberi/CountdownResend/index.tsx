import React, { useState } from 'react';
import { sleep, tryit } from 'radash';

import { Button } from 'antd-mobile';

import { useCountDown, useLockFn } from 'ahooks';

import * as styles from '@/components/Stroberi/CountdownResend/styles';

const CountdownResend = ({ duration, onResend }: CountdownResendProps) => {
  const [targetDate, setTargetDate] = useState(duration);
  const [countdown, formattedRes] = useCountDown({ leftTime: duration, targetDate: targetDate });

  const onResendClick = useLockFn(async () => {
    const [error] = await tryit(() => onResend())();
    if (!error) await setTargetDate(0);
  });

  const { minutes, seconds } = formattedRes;

  return (
    <>
      {countdown === 0 ? (
        <Button color={'primary'} fill={'none'} size={'mini'} css={styles.passcodeResend} onClick={onResendClick} loading={'auto'}>
          Kirim Ulang
        </Button>
      ) : (
        <span css={styles.resendCountdown}>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </span>
      )}
    </>
  );
};

export type CountdownResendProps = {
  duration: number;
  onResend: () => Promise<void>;
};

export default CountdownResend;
