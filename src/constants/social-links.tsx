import React from 'react';
import { Icon } from '@chakra-ui/react';

import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaMedium } from '@react-icons/all-files/fa/FaMedium';
import { FaPatreon } from '@react-icons/all-files/fa/FaPatreon';
import { FaRssSquare } from '@react-icons/all-files/fa/FaRssSquare';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import IconKofi from '../images/third-party-icons/kofi-icon';

const linksSocial = [
  {
    alt: 'follow me on facebook',
    href: 'https://www.facebook.com/rmw.its/',
    icon: FaFacebook,
    label: 'Facebook',
    site: 'facebook',
  },
  {
    alt: 'buy me a ko-fi',
    href: 'https://ko-fi.com/beareactdev',
    icon: () => <IconKofi />,
    label: 'Ko-Fi',
    site: 'ko-fi',
  },
  {
    alt: 'connect with me on linkedIn',
    href: 'https://www.linkedin.com/in/robwelan/',
    icon: FaLinkedin,
    label: 'LinkedIn',
    site: 'LinkedIn',
  },
  {
    alt: 'read me on Medium',
    href: 'https://medium.com/@rmw.its',
    icon: FaMedium,
    label: 'Medium',
    site: 'Medium',
  },
  {
    alt: 'join on patreon',
    href: 'https://www.patreon.com/BeAReactDev',
    icon: FaPatreon,
    label: 'Patreon',
    site: 'Patreon',
  },
  {
    alt: 'read the feed',
    href: 'https://beareact.dev/rss.xml',
    icon: FaRssSquare,
    label: 'RSS Feed',
    site: 'beareact.dev',
  },
  {
    alt: 'follow me on twitter',
    href: 'https://twitter.com/rmwits',
    icon: FaTwitter,
    label: 'Twitter',
    site: 'twitter',
  },
];

export default linksSocial;
