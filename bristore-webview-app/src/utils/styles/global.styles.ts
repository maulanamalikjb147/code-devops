import { css } from '@emotion/react';

export const globalStyles = css`
  :root:root {
    --adm-font-size-main: 14px;
    --adm-color-primary: #ef4700;
    --adm-font-family: 'Nunito', -apple-system, blinkmacsystemfont, 'Helvetica Neue', helvetica, segoe ui, arial, roboto, 'PingFang SC',
      'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif !important;
  }

  html * {
    font-family: 'Nunito', -apple-system, blinkmacsystemfont, 'Helvetica Neue', helvetica, segoe ui, arial, roboto, 'PingFang SC', 'miui',
      'Hiragino Sans GB', 'Microsoft Yahei', sans-serif !important;
  }

  html {
    background-color: var(--primary-background-color);
  }

  body {
    margin: 0;
  }

  input {
    font-weight: 400;
    font-size: 14px !important;
  }

  #__next {
    max-width: 500px;
    margin: 0 auto;
  }

  .adm-form-footer {
    padding: 12px 0 !important;
  }

  .adm-list-item {
    padding-left: 2px !important;
  }

  .adm-list-item-content {
    padding-right: 2px !important;
  }

  .adm-input-disabled {
    opacity: 1 !important;
  }

  .flex {
    display: flex;
  }

  .text-center {
    text-align: center;
  }

  .toast-center {
    .adm-auto-center-content {
      text-align: center;
      word-break: break-word;
    }
  }

  .general-input {
    padding: 0 !important;
    border-radius: 8px;
    box-shadow: 0 0 0 1px #d9d9d9;

    > input {
      padding: 8px 16px;
      border-radius: 8px;
    }

    > input:focus {
      box-shadow: 0 0 0 1px var(--adm-color-primary);
      border-radius: 8px;
    }
  }

  .general-input-disabled {
    padding: 0 !important;
    border-radius: 8px;
    background-color: #f5f5f5;
    box-shadow: 0 0 0 1px #d9d9d9;
    color: #00000040 !important ;

    > input {
      padding: 8px 16px;
      border-radius: 8px;
      box-shadow: 0 0 0 1px #d9d9d9;
      color: #00000040 !important;
    }
  }

  .general-input-span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 37px;
    font-size: 14px;
  }
`;
