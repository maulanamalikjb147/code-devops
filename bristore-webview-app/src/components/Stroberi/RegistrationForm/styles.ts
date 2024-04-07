import { css } from '@emotion/react';

export const form = css`
  --border-bottom: 0 solid transparent;
  --border-inner: 0 solid transparent;
  --border-top: 0 solid transparent;
`;

export const title = css`
  font-size: 16px;
  color: var(--adm-color-text);
  margin: 12px 0 0;
`;

export const info = css`
  font-size: 14px;
  margin: 4px 0 6px;
`;

export const tnc = css`
  font-size: 14px;
  font-weight: 400;
  margin-left: 16px;
  text-align: left;
  padding: 6px 0;
  :before {
    opacity: 0 !important;
  }
`;
