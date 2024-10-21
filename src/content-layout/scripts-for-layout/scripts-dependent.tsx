import React, { useEffect, useState } from 'react';
//  hooks
import useBackgroundColorToken from '../../hooks/use-background-color-token';
import useScript from '../../hooks/use-script';
//  utlities
import getWindow from '../../utilities/window/get-window';

/*
SOURCE: https://ko-fi.com/Manage/donation-widget-setup
DATE: 2024-09-29

<script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
<script>
  kofiWidgetOverlay.draw('beareactdev', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#00b9fe',
    'floating-chat.donateButton.text-color': '#fff'
  });
</script>
*/

const AffectIframe = () => {
  const { bgColorToken } = useBackgroundColorToken();

  useScript({
    async: true,
    innerHTML: `
    if (window) {
      if (window.kofiWidgetOverlay) {
        var iframe = window.document.getElementsByTagName('iframe')[0];
        iframe.style.background = '${bgColorToken}';
        iframe.contentWindow.document.body.style.backgroundColor = '${bgColorToken}';
      }
    }`,
    type: 'application/javascript',
  });

  return <></>;
};

const UseScript = () => {
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

  //  DOES NOT WORK - CROSS ORIGIN ISSUE...
  // return <AffectIframe />;

  return <></>;
};

const DependentScripts = () => {
  const [isWindow, setIsWindow] = useState(false);
  const windowGlobal = getWindow();

  //  isWindow effect
  useEffect(() => {
    if (windowGlobal) {
      setIsWindow(true);
    }

    return () => setIsWindow(false);
  }, [windowGlobal]);

  if (!isWindow) return null;

  return <UseScript />;
};

export default DependentScripts;
