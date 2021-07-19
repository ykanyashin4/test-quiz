import { css, Theme } from '@emotion/react';
import { fontStyle } from './fonts.styles';

export const getGlobalStyles = () => (theme: Theme): ReturnType<typeof css> => css`
  ${fontStyle}

  html {
    height: 100%;
    overflow-x: hidden;
  }

  html,
  body {
    font-family: 'SBSans', Arial, Helvetica, sans-serif;
    background: ${theme.noColor};
    position: relative;
  }

  body {
    min-height: 100%;
  }

  * {
    vertical-align: baseline;
    box-sizing: border-box;
    font: inherit;
    padding: 0;
    margin: 0;
    outline: none;
    border: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }`;
  