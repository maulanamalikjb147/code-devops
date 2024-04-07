import React, { memo } from 'react';

import { capitalize } from 'radash';
import { Card, Grid } from 'antd-mobile';

import * as styles from '@/components/Stroberi/InformationCard/styles';

const InformationCard = ({ dataSource }: InformationCardProps) => {
  return (
    <div css={styles.container}>
      <span css={styles.title}>Informasi akun BRIStore</span>

      <Card css={styles.card}>
        {Object.entries(dataSource).map(([title, value], index) => (
          <Grid key={title} css={index !== 0 && styles.grid} columns={12} gap={8}>
            <Grid.Item span={4}>
              <div>{capitalize(title)}</div>
            </Grid.Item>
            <Grid.Item span={1}>
              <div>:</div>
            </Grid.Item>
            <Grid.Item span={7}>
              <div css={styles.titleValue}>{value}</div>
            </Grid.Item>
          </Grid>
        ))}
      </Card>
    </div>
  );
};

export type InformationCardProps = {
  dataSource: {
    [key: string]: string;
  };
};

export default memo(InformationCard);
