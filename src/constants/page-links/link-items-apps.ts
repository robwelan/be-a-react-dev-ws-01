//  react-icons
import { FaTasks } from '@react-icons/all-files/fa/FaTasks';
// import IconDonaldJTrump from '../../images/apps/felony-charges-of-donald-j-trump/noun-trump';
import { GoPersonFill } from 'react-icons/go';
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
    description: 'A quick reference of standard emojis to search and Copy to Clipboard feature to help you quickly use them.',
    icon: MdOutlineEmojiSymbols,
    name: 'Emojis',
    route: PUBLIC_ROUTE_PAGE_APPS_EMOJI_DICTIONARY,
  },
  {
    description:
      '91 Felony Charges of Donald J Trump autoscrolling in a marquee style billboard display.',
    icon: GoPersonFill,
    name: 'Donald J Trump',
    route: PUBLIC_ROUTE_PAGE_APPS_FELONY_CHARGES_DJT,
  },
  {
    description: 'Simple to-do list manager for task organization.',
    icon: FaTasks,
    name: 'To Do',
    route: PUBLIC_ROUTE_PAGE_APPS_TO_DO,
  },
  {
    description:
      'Handy set of useful HTML codes, symbols and entities with a Copy to Clipboard feature to help you quickly use them.',
    icon: MdOutlineEmojiSymbols,
    name: 'Useful HTML Entities',
    route: PUBLIC_ROUTE_PAGE_APPS_USEFUL_HTML_ENTITIES,
  },
  {
    description: 'Simple weather forecasting app based on current location.',
    icon: WiBarometer,
    name: 'Weather',
    route: PUBLIC_ROUTE_PAGE_APPS_WEATHER,
  },
];

export default linkItems;
