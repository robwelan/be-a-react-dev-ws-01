//  react-icons
import { FaTasks } from '@react-icons/all-files/fa/FaTasks';
import IconDonaldJTrump from '../../images/apps/felony-charges-of-donald-j-trump/noun-trump';
import { MdOutlineEmojiSymbols } from 'react-icons/md';
import { WiBarometer } from 'react-icons/wi';
//  constants
import {
  PUBLIC_ROUTE_PAGE_APPS_EMOJI_DICTIONARY,
  PUBLIC_ROUTE_PAGE_APPS_FELONY_CHARGES_DJT,
  PUBLIC_ROUTE_PAGE_APPS_TO_DO,
  PUBLIC_ROUTE_PAGE_APPS_USEFUL_HTML_ENTITIES,
  PUBLIC_ROUTE_PAGE_APPS_WEATHER,
} from '../../security/constants/routes-public';

const linkItems = [
  {
    icon: MdOutlineEmojiSymbols,
    name: 'Emojis',
    route: PUBLIC_ROUTE_PAGE_APPS_EMOJI_DICTIONARY,
  },
  {
    icon: IconDonaldJTrump,
    name: 'Donald J Trump',
    route: PUBLIC_ROUTE_PAGE_APPS_FELONY_CHARGES_DJT,
  },
  {
    icon: FaTasks,
    name: 'To Do',
    route: PUBLIC_ROUTE_PAGE_APPS_TO_DO,
  },
  {
    icon: MdOutlineEmojiSymbols,
    name: 'Useful HTML Entities',
    route: PUBLIC_ROUTE_PAGE_APPS_USEFUL_HTML_ENTITIES,
  },
  {
    icon: WiBarometer,
    name: 'Weather',
    route: PUBLIC_ROUTE_PAGE_APPS_WEATHER,
  },
];

export default linkItems;
