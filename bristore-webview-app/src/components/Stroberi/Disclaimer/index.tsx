import React, { memo } from 'react';

import * as styles from '@/components/Stroberi/Disclaimer/styles';

const Disclaimer = () => {
  return (
    <div css={styles.disclaimer}>
      Seluruh data informasi produk termasuk deskripsi, harga, stock/persediaan, dan pencatatan transaksi atas segala aktivitas pada
      BRIStore dan Stroberi Kasir akan terhubung secara otomatis.
    </div>
  );
};

export default memo(Disclaimer);
