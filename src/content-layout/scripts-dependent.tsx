import React from 'react';
//  hooks
import useBackgroundColorToken from '../hooks/use-background-color-token';
import useScript from '../hooks/use-script';

const DependentScripts = () => {
  const { bgColorToken } = useBackgroundColorToken();

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

        var iframe = document.getElementsByTagName('iframe')[0];
        iframe.style.background = '${bgColorToken}';
        iframe.contentWindow.document.body.style.backgroundColor = '${bgColorToken}';
      }
    }
    `,
    type: 'application/javascript',
  });

  return <></>;
};

export default DependentScripts;
