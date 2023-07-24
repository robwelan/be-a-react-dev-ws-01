//  react icons
import { FiInfo } from '@react-icons/all-files/fi/FiInfo';
import { AiOutlineShop } from '@react-icons/all-files/ai/AiOutlineShop';

//  routes
import {
  PUBLIC_ROUTE_PAGE_ABOUT,
  PUBLIC_ROUTE_PAGE_SHOP,
} from '../../security/constants/routes-public';

const linkItems = [
  {
    icon: FiInfo,
    name: 'About',
    route: PUBLIC_ROUTE_PAGE_ABOUT,
  },
  {
    icon: AiOutlineShop,
    name: 'Shop',
    route: PUBLIC_ROUTE_PAGE_SHOP,
  },
];

export default linkItems;
