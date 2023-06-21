import React from 'react';
//  hooks
import useScript from '../hooks/use-script';

const DependentScripts = () => {
  useScript({
    async: true,
    innerHTML: `
    if (window) {
      if (window.kofiWidgetOverlay) {
        window.kofiWidgetOverlay.draw('beareactdev', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': 'Support me',
          'floating-chat.donateButton.background-color': '#00b9fe',
          'floating-chat.donateButton.text-color': '#fff'
        });
      }
    }`,
    type: 'application/javascript',
  });

  return <></>;
};

export default DependentScripts;
