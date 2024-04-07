import React, { memo } from 'react';

import Image from 'next/image';

import * as styles from '@/components/Stroberi/Header/styles';

const Header = () => {
  return (
    <div css={styles.container}>
      <div css={styles.briStoreLogo}>
        <Image src={'/brands/bristore.svg'} alt={'bristore-logo'} width={120} height={24} />
      </div>

      <div css={styles.linkLogo}>
        <Image src={'/icons/link.png'} alt={'bristore-logo'} width={20} height={20} />
      </div>

      <div css={styles.stroberiLogo}>
        <Image src={'/brands/stroberi.svg'} alt={'bristore-logo'} width={140} height={44} />
      </div>
    </div>
  );
};

export default memo(Header);
