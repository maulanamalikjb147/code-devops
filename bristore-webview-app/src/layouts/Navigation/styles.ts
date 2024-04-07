import { css } from '@emotion/react';

export const app = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const header = css`
  flex: 0;
  position: sticky;
  top: 0;
  background-color: var(--primary-background-color) !important;
  z-index: 4;
`;

export const navbar = css`
  padding: 8px 16px;
  .adm-nav-bar-title {
    padding-right: 0;
  }
  .adm-nav-bar-back {
    margin-top: 4px;
    margin-right: 0;
  }
  .adm-nav-bar-title {
    padding: 0;
  }
`;

export const body = css`
  position: relative;
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  padding: 0 16px;
  overflow: auto;
`;

export const search = css`
  font-size: 22px;
`;
