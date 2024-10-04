//  react icons
import { RiGameLine } from 'react-icons/ri';
//  routes
import {
  PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORS,
  PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORSLIZARDSPOCK,
} from '../../security/constants/routes-public';

const linkItems = [
  {
    icon: RiGameLine,
    name: 'Rock Paper Scissors',
    route: PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORS,
  },
  {
    icon: RiGameLine,
    name: 'Rock Paper Scissors Lizard Spock',
    route: PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORSLIZARDSPOCK,
  },
];

export default linkItems;
