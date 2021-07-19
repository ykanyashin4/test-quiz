import React, { FC } from 'react';
import { Loader, MarginWrapper } from '@sbol/design-system';
import { ContainerStyled } from './Loading.styles';

export const Loading: FC = () => {
  return (
    <ContainerStyled>
      <MarginWrapper verticalMarginDirection='top' verticalMargin='inner' size='h1'>
        <Loader size="lg" />
      </MarginWrapper>
    </ContainerStyled>
  );
};