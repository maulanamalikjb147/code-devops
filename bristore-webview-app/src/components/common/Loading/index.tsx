import React, { memo } from 'react';

import { SpinLoading } from 'antd-mobile';

import * as styles from '@/components/common/Loading/styles';

const Loading = () => {
  return (
    <div css={styles.loading}>
      <SpinLoading color={'primary'} />
    </div>
  );
};

export default memo(Loading);
