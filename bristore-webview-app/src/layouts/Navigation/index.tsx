import React, { memo, useRef, useEffect } from 'react';

import { Dialog, NavBar } from 'antd-mobile';
import { CloseOutline } from 'antd-mobile-icons';

import { useRouter } from 'next/router';

import * as styles from '@/layouts/Navigation/styles';

const Navigation = ({ children, isUseRouter }: NavigationProps) => {
  const router = useRouter();
  const bodyRef = useRef<HTMLDivElement>(null);

  const onClosePage = () => {
    Dialog.confirm({
      content: <span className={'flex text-center'}>Apakah anda yakin ingin keluar dari halaman ini?</span>,
      cancelText: 'Tidak',
      confirmText: 'Ya',
      onConfirm: async () => {
        if (isUseRouter) {
          router.back();
        } else {
          (window as any)?.Mobile?.backToHomeStroberi();
        }
      }
    });
  };

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div css={styles.app}>
      <div css={styles.header}>
        <NavBar
          css={[styles.navbar]}
          right={
            <div>
              <CloseOutline css={styles.search} onClick={onClosePage} />
            </div>
          }
          back={null}
        ></NavBar>
      </div>
      <div ref={bodyRef} css={styles.body}>
        {children}
      </div>
    </div>
  );
};

export type NavigationProps = {
  children: React.ReactNode;
  isUseRouter?: boolean;
};

export default memo(Navigation);
