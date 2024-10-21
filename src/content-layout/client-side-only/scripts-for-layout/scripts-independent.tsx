import React from 'react';
//  hooks
import useScript from '../../../hooks/use-script';

const UseScriptOverlay = () => {
  useScript({
    async: true,
    src: 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js',
    type: 'application/javascript',
  });

  return <></>;
};

const IndependentScripts = () => (
  <>
    <UseScriptOverlay />
  </>
);

export default IndependentScripts;
