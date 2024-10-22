//  react icons
import { FaHome } from 'react-icons/fa';
import { FaBlog } from 'react-icons/fa6';
import { FaCircleInfo } from 'react-icons/fa6';
import { FaCookieBite } from 'react-icons/fa6';
import { GoLaw } from 'react-icons/go';
import { GrResources } from 'react-icons/gr';
import { FaShop } from 'react-icons/fa6';
import { HiDocumentCheck } from 'react-icons/hi2';
import { MdOutlinePrivacyTip } from 'react-icons/md';
//  uuid
import { v4 as uuidv4 } from 'uuid';
//  routes
import {
  PUBLIC_ROUTE_PAGE_ABOUT,
  PUBLIC_ROUTE_PAGE_BLOG,
  PUBLIC_ROUTE_PAGE_COOKIES,
  PUBLIC_ROUTE_PAGE_HOME,
  PUBLIC_ROUTE_PAGE_PRIVACY,
  PUBLIC_ROUTE_PAGE_RESOURCES,
  PUBLIC_ROUTE_PAGE_SHOP,
  PUBLIC_ROUTE_PAGE_TERMS,
} from '../../../security/constants/routes-public';

const pageIndex = [
  {
    description:
      'This link returns you to the home page where you will find links to Apps, Games and Tutorials hosted on this site.',
    icon: FaHome,
    id: uuidv4(),
    link: PUBLIC_ROUTE_PAGE_HOME,
    name: 'Home Page',
  },
  {
    description: 'Explains the site’s purpose, background, and its creator.',
    icon: FaCircleInfo,
    id: uuidv4(),
    link: PUBLIC_ROUTE_PAGE_ABOUT,
    name: 'About Page',
  },
  {
    description:
      'Index of documents published to this site, including tutorials, musings and random thoughts.',
    icon: FaBlog,
    id: uuidv4(),
    link: PUBLIC_ROUTE_PAGE_BLOG,
    name: 'Blog',
  },
  {
    description: 'Useful tools, frameworks, and references.',
    icon: GrResources,
    id: uuidv4(),
    link: PUBLIC_ROUTE_PAGE_RESOURCES,
    name: 'Resources',
  },
  {
    description: `When you shop with us, your purchase directly supports the creation of valuable content for the developer community. Every dollar helps us produce tutorials, guides, and resources that keep you informed and skilled. Your support fuels our mission—join us in making a difference!`,
    icon: FaShop,
    id: uuidv4(),
    link: PUBLIC_ROUTE_PAGE_SHOP,
    name: 'Shop',
  },
  { icon: GoLaw, id: uuidv4(), name: 'Legal' },
  {
    description: 'Find out about what cookies we use on this site.',
    icon: FaCookieBite,
    id: uuidv4(),
    indent: true,
    link: PUBLIC_ROUTE_PAGE_COOKIES,
    name: 'Cookies',
  },
  {
    description: 'We care about your privacy. Find out more here.',
    icon: MdOutlinePrivacyTip,
    id: uuidv4(),
    indent: true,
    link: PUBLIC_ROUTE_PAGE_PRIVACY,
    name: 'Privacy Policy',
  },
  {
    description:
      'Use of this web site is subject to these terms. We hope you agree these are fair.',
    icon: HiDocumentCheck,
    id: uuidv4(),
    indent: true,
    link: PUBLIC_ROUTE_PAGE_TERMS,
    name: 'Terms',
  },
];

export default pageIndex;
