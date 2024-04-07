import React, { memo, useState } from 'react';
import { CenterPopup, SpinLoading } from 'antd-mobile';

import * as styles from '@/components/Stroberi/TermsAndConditions/styles';

const TermsAndConditions = ({ show, onClose }: TermsAndConditionsProps) => {
  const [iframe, setIframe] = useState(false);

  return (
    <CenterPopup visible={show} css={styles.tncModal} showCloseButton={true} onClose={onClose}>
      <div css={styles.tncModalContent}>
        {!iframe ? <SpinLoading css={styles.tncLoading} color={'primary'} /> : null}
        <iframe src={'https://stroberi.id/kasir-terms-and-conditions'} onLoad={() => setIframe((iframe) => true)} />
      </div>
    </CenterPopup>
  );
};

export type TermsAndConditionsProps = {
  show: boolean;
  onClose?: () => void;
};

export default memo(TermsAndConditions);
