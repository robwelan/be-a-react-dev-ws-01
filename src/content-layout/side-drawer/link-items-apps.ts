//  react-icons
import { FaTasks } from '@react-icons/all-files/fa/FaTasks';
import IconDonaldJTrump from '../../images/apps/felony-charges-of-donald-j-trump/noun-trump';
//  constants
import {
  PUBLIC_ROUTE_APPS_FELONY_CHARGES_DJT,
  PUBLIC_ROUTE_PAGE_APPS_TO_DO,
} from '../../security/constants/routes-public';

const linkItems = [
  {
    icon: IconDonaldJTrump,
    name: 'Donald J Trump',
    route: PUBLIC_ROUTE_APPS_FELONY_CHARGES_DJT,
  },
  {
    icon: FaTasks,
    name: 'To Do',
    route: PUBLIC_ROUTE_PAGE_APPS_TO_DO,
  },
];

export default linkItems;
