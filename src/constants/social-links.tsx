import React from 'react';
//  react icons
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaMedium } from '@react-icons/all-files/fa/FaMedium';
import { FaPatreon } from '@react-icons/all-files/fa/FaPatreon';
import { FaRssSquare } from '@react-icons/all-files/fa/FaRssSquare';
import { FaStackOverflow } from '@react-icons/all-files/fa/FaStackOverflow';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
//  custom icons
import IconKofi from '../images/third-party-icons/kofi-icon';

//  TODO: convert evrything to beareact dev and make constant linkEmail more re-used and split all links out to indivvidual items so turn this file into an index.tsx in a folder of the same name

const linkEmail = {
  alt: 'email me using rob.welan@beareact.dev',
  href: 'mailto:rob.welan@beareact.dev',
  icon: FaEnvelope,
  label: 'Rob Welan <rob.welan@beareact.dev>',
  site: 'email',
  type: 'contact',
};

const linksSocial = [
  linkEmail,
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
    alt: 'collaborate with me on stack overflow',
    href: 'https://stackoverflow.com/users/5420953/rob-welan',
    icon: FaStackOverflow,
    label: 'Stack Overflow',
    site: 'Stack Overflow',
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
