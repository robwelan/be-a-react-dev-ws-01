import React from 'react';
import { Router } from '@reach/router';
//  pages
import PageAbout from '../../pages/about';
import PageCookies from '../../pages/legal/cookies';
import PageGameRockPaperScissors from '../../pages/games/rock-paper-scissors';
import PageGameRockPaperScissorsLizardSpock from '../../pages/games/rock-paper-scissors-lizard-spock';
import PageHome from '../../pages/index';
import PageAppFelonyChargesDJT from '../../pages/apps/felony-charges-of-donald-j-trump';
import PageAppJAT from '../../pages/apps/job-application-tracking';
import PageAppToDo from '../../pages/apps/to-do';
import PageFelonyChargesDJT from '../../pages/felony-charges-of-donald-j-trump';
import PagePrivacy from '../../pages/legal/privacy';
import PageNotFound from '../../pages/404';
import PageShop from '../../pages/shop';
import PageTerms from '../../pages/legal/terms';
import PageTikTokBio from '../../pages/tik-tok-bio';
//  security
import {
  PUBLIC_ROUTE_PAGE_ABOUT,
  PUBLIC_ROUTE_PAGE_APPS_FELONY_CHARGES_DJT,
  PUBLIC_ROUTE_PAGE_APPS_JOB_HUNTING_JAT,
  PUBLIC_ROUTE_PAGE_APPS_TO_DO,
  PUBLIC_ROUTE_PAGE_COOKIES,
  PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORS,
  PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORSLIZARDSPOCK,
  PUBLIC_ROUTE_PAGE_HOME,
  PUBLIC_ROUTE_PAGE_FELONY_CHARGES_DJT,
  PUBLIC_ROUTE_PAGE_PRIVACY,
  PUBLIC_ROUTE_PAGE_TERMS,
  PUBLIC_ROUTE_PAGE_SHOP,
  PUBLIC_ROUTE_PAGE_TIKTOKBIO,
} from '../../security/constants/routes-public';

const Routes = ({ element, location }) => {
  return (
    <Router basepath={PUBLIC_ROUTE_PAGE_HOME}>
      <PageNotFound default />

      <PageHome path={PUBLIC_ROUTE_PAGE_HOME} />

      {/* games */}
      <PageGameRockPaperScissors
        path={PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORS}
      />
      <PageGameRockPaperScissorsLizardSpock
        path={PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORSLIZARDSPOCK}
      />
      {/* apps */}
      <PageAppFelonyChargesDJT
        path={PUBLIC_ROUTE_PAGE_APPS_FELONY_CHARGES_DJT}
      />
      <PageAppJAT path={PUBLIC_ROUTE_PAGE_APPS_JOB_HUNTING_JAT} />
      <PageAppToDo path={PUBLIC_ROUTE_PAGE_APPS_TO_DO} />
      {/* other */}
      <PageAbout path={PUBLIC_ROUTE_PAGE_ABOUT} />
      <PageFelonyChargesDJT path={PUBLIC_ROUTE_PAGE_FELONY_CHARGES_DJT} />
      <PageTikTokBio path={PUBLIC_ROUTE_PAGE_TIKTOKBIO} />
      {/* legal */}
      <PageCookies path={PUBLIC_ROUTE_PAGE_COOKIES} />
      <PagePrivacy path={PUBLIC_ROUTE_PAGE_PRIVACY} />
      <PageShop path={PUBLIC_ROUTE_PAGE_SHOP} />
      <PageTerms path={PUBLIC_ROUTE_PAGE_TERMS} />
      {element}
    </Router>
  );
};

export default Routes;
