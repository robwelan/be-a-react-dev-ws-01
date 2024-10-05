//  react icons
import { FaRegHandScissors } from 'react-icons/fa';
import { FaRegHandSpock } from 'react-icons/fa';
//  routes
import {
  PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORS,
  PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORSLIZARDSPOCK,
} from '../../security/constants/routes-public';

const linkItems = [
  {
    description: 'Classic game where you choose between Rock, Paper, or Scissors.',
    icon: FaRegHandScissors,
    name: 'Rock Paper Scissors',
    route: PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORS,
  },
  {
    description: 'An extended version of the original game with two additional elements.',
    icon: FaRegHandSpock,
    name: 'Rock Paper Scissors Lizard Spock',
    route: PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORSLIZARDSPOCK,
  },
];

export default linkItems;
