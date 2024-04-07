import React, { memo } from 'react';

import { Button, Result as AntdResult } from 'antd-mobile';

import Image from 'next/image';

import * as styles from '@/components/common/Result/styles';

const Result = ({ type, title, description, mainButton, secondaryButton }: ResultProps) => {
  return (
    <div css={styles.container}>
      <AntdResult
        icon={
          {
            error: <Image src={'/icons/error.svg'} alt={'error-illustration'} width={220} height={220} />,
            success: <Image src={'/icons/success.svg'} alt={'verified-illustration'} width={280} height={280} />
          }[type]
        }
        title={title}
        description={description}
      />

      <div css={styles.action}>
        {mainButton && (
          <Button color={'primary'} fill={'solid'} shape={'rounded'} loading={'auto'} block={true} onClick={mainButton.action}>
            {mainButton.title}
          </Button>
        )}

        {secondaryButton && (
          <Button color={'primary'} fill={'outline'} shape={'rounded'} loading={'auto'} block={true} onClick={secondaryButton.action}>
            {secondaryButton.title}
          </Button>
        )}
      </div>
    </div>
  );
};

export type ResultProps = {
  type: 'error' | 'success' | string;
  title: string;
  description: string;
  mainButton?: {
    title: string;
    action: () => Promise<void>;
  };
  secondaryButton?: {
    title: string;
    action: () => Promise<void>;
  };
};

export default memo(Result);
