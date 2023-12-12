import { useEffect, useState } from 'react';
//  recoil
import { useSetRecoilState } from 'recoil';
//  hooks
import useDeviceSize from './use-device-size';
//  state
import { siteConfiguration } from '../state';
import { SiteConfiguration } from '../state/types';

const useSiteConfiguration = () => {
  const [mounted, setMounted] = useState(false);
  const setSiteConfiguration = useSetRecoilState(siteConfiguration);
  const device = useDeviceSize();

  const configuration = {
    device,
  };

  //  mounting
  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  //  mounted effect
  useEffect(() => {
    if (mounted) {
      setSiteConfiguration((prevState: SiteConfiguration) => ({
        ...prevState,
        ...configuration,
        loaded: true,
      }));
    }
  }, [mounted]);

  return null;
};

export default useSiteConfiguration;
