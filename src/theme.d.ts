import '@emotion/react';
import colors from '@sbol/design-system/core/styles/theme-colors';

type DesignSystemTheme = typeof colors.LIGHT;

declare module '@emotion/react' {
  export interface Theme extends DesignSystemTheme {}
}
