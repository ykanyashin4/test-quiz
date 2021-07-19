import { css } from '@emotion/react';
import SBSansTextBold2 from '../assets/fonts/SBSansText-Bold.woff2';
import SBSansTextBold from '../assets/fonts/SBSansText-Bold.woff';
import SBSansTextSemibold2 from '../assets/fonts/SBSansText-Semibold.woff2';
import SBSansTextSemibold from '../assets/fonts/SBSansText-Semibold.woff';
import SBSansTextMedium2 from '../assets/fonts/SBSansText-Medium.woff2';
import SBSansTextMedium from '../assets/fonts/SBSansText-Medium.woff';
import SBSansTextRegular2 from '../assets/fonts/SBSansText-Regular.woff2';
import SBSansTextRegular from '../assets/fonts/SBSansText-Regular.woff';
import SBSansDisplaySemiBold2 from '../assets/fonts/SBSansDisplay-SemiBold.woff2';
import SBSansDisplaySemiBold from '../assets/fonts/SBSansDisplay-SemiBold.woff';
import SBSansDisplayRegular2 from '../assets/fonts/SBSansDisplay-Regular.woff2';
import SBSansDisplayRegular from '../assets/fonts/SBSansDisplay-Regular.woff';

export const fontStyle = css`
  @font-face {
    font-family: 'SBSans';
    font-display: swap;
    src:
      url(${SBSansTextBold2}) format('woff2'),
      url(${SBSansTextBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'SBSans';
    font-display: swap;
    src:
      url(${SBSansTextSemibold2}) format('woff2'),
      url(${SBSansTextSemibold}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'SBSans';
    font-display: swap;
    src:
      url(${SBSansTextMedium2}) format('woff2'),
      url(${SBSansTextMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'SBSans';
    font-display: swap;
    src:
      url(${SBSansTextRegular2}) format('woff2'),
      url(${SBSansTextRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SBSansDisplay';
    font-display: swap;
    src:
      url(${SBSansDisplaySemiBold2}) format('woff2'),
      url(${SBSansDisplaySemiBold}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'SBSansDisplay';
    font-display: swap;
    src:
      url(${SBSansDisplayRegular2}) format('woff2'),
      url(${SBSansDisplayRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
