import { css } from '@emotion/react';

export const container = css`
  display: flex;
  flex-direction: column;
  margin: 0 0 18px 0;
`;

export const title = css`
  color: var(--adm-color-text-secondary);
  font-size: var(--adm-font-size-7);
  margin-bottom: 8px;
`;

export const card = css`
  border-radius: 8px;
  padding: 20px;
  margin-top: 4px;
  box-shadow: 0 0 8px 2px rgba(17, 17, 26, 0.14);
  .adm-card-body {
    padding: 0;
  }
`;

export const grid = css`
  margin-top: 8px;
`;

export const titleValue = css`
  word-break: break-all;
`;
