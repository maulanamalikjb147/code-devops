import { css } from '@emotion/react';

export const tncModal = css`
  --background-color: var(--adm-color-white);
  --min-width: 85vw;
  --max-width: 95vw;
`;

export const tncModalContent = css`
  width: 85vw;
  height: 85vh;
  box-sizing: border-box;
  position: relative;
  padding: 42px 16px 24px;

  iframe {
    height: 100%;
    width: 100%;
    border: 0 !important;
  }
`;

export const tncLoading = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
