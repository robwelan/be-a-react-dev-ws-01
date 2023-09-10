import React from 'react';
import { useRecoilValue } from 'recoil';
//  local components
import Charges from './charges';
import SizedCharges from './charges/sized-charges';
//  state
import { felonyHeight } from './state';
//  styles
import './styles/index.css';
import './styles/marquee.css';
//  view
import ViewIndex from './view';

const ContentFelonyCountsDJT = () => {
  const height = useRecoilValue(felonyHeight);

  if (height === 0) {
    return (
      <SizedCharges>
        <Charges />
      </SizedCharges>
    );
  }

  return (
    <>
      <ViewIndex>
        <Charges />
      </ViewIndex>
    </>
  );
};

export default ContentFelonyCountsDJT;
