//  react icons
import { SiZeromq } from '@react-icons/all-files/si/SiZeromq';
//  routes
import {
  PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORS,
  PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORSLIZARDSPOCK,
} from '../../security/constants/routes-public';

const linkItems = [
  {
    icon: SiZeromq,
    name: 'Rock Paper Scissors',
    route: PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORS,
  },
  {
    icon: SiZeromq,
    name: 'Rock Paper Scissors Lizard Spock',
    route: PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORSLIZARDSPOCK,
  },
];

export default linkItems;
