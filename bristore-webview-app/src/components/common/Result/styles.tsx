import { css } from '@emotion/react';

export const container = css`
  .adm-result {
    padding: 0 !important;
  }

  .adm-result .adm-result-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }

  .adm-result .adm-result-title {
    font-weight: 700;
  }
`;

export const action = css`
  margin: 70px 0;
  > button {
    margin-bottom: 20px;
  }
`;
