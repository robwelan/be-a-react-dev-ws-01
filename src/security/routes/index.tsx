import React from 'react';
import { Router } from '@reach/router';
//  pages
import PageAffiliateCoursesHelloCodingAnyoneCanLearnToCode from '../../pages/affiliate/courses/hello-coding-anyone-can-learn-to-code';
import PageAbout from '../../pages/about';
import PageBlog from '../../pages/blog';
import PageCookies from '../../pages/legal/cookies';
import PageGameRockPaperScissors from '../../pages/games/rock-paper-scissors';
import PageGameRockPaperScissorsLizardSpock from '../../pages/games/rock-paper-scissors-lizard-spock';
import PageHome from '../../pages/index';
import PageAppEmojis from '../../pages/apps/emojis';
import PageAppFelonyChargesDJT from '../../pages/apps/felony-charges-of-donald-j-trump';
import PageAppJAT from '../../pages/apps/job-application-tracking';
import PageAppToDo from '../../pages/apps/to-do';
import PageAppUsefulHtmlEntities from '../../pages/apps/useful-html-entities';
import PageAppWeather from '../../pages/apps/weather';
import PageFelonyChargesDJT from '../../pages/felony-charges-of-donald-j-trump';
import PagePrivacy from '../../pages/legal/privacy';
import PageNotFound from '../../pages/404';
import PageResources from '../../pages/resources';
import PageSitemap from '../../pages/sitemap';
import PageShop from '../../pages/shop';
import PageTerms from '../../pages/legal/terms';
import PageTikTokBio from '../../pages/tik-tok-bio';
import PageTutorials from '../../pages/tutorials';
import PageTutorialsAppToDo from '../../pages/tutorials/todo-app-with-recoil';
import PageTutorialsGameRockPaperScissors from '../../pages/tutorials/rock-paper-scissors-game-with-react';
import PageTutorialBuildTikTokBioPage from '../../pages/tutorials/build-a-tik-tok-bio-page';
//  security
import {
  PUBLIC_ROUTE_PAGE_COURSE_HELLO_CODING_ANYONE_CAN_LEARN_TO_CODE,
  PUBLIC_ROUTE_PAGE_ABOUT,
  PUBLIC_ROUTE_PAGE_APPS_EMOJI_DICTIONARY,
  PUBLIC_ROUTE_PAGE_APPS_FELONY_CHARGES_DJT,
  PUBLIC_ROUTE_PAGE_APPS_JOB_HUNTING_JAT,
  PUBLIC_ROUTE_PAGE_APPS_TO_DO,
  PUBLIC_ROUTE_PAGE_APPS_USEFUL_HTML_ENTITIES,
  PUBLIC_ROUTE_PAGE_APPS_WEATHER,
  PUBLIC_ROUTE_PAGE_BLOG,
  PUBLIC_ROUTE_PAGE_COOKIES,
  PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORS,
  PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORSLIZARDSPOCK,
  PUBLIC_ROUTE_PAGE_HOME,
  PUBLIC_ROUTE_PAGE_FELONY_CHARGES_DJT,
  PUBLIC_ROUTE_PAGE_PRIVACY,
  PUBLIC_ROUTE_PAGE_RESOURCES,
  PUBLIC_ROUTE_PAGE_SITEMAP,
  PUBLIC_ROUTE_PAGE_SHOP,
  PUBLIC_ROUTE_PAGE_TERMS,
  PUBLIC_ROUTE_PAGE_TIKTOKBIO,
  PUBLIC_ROUTE_PAGE_TUTORIALS,
  PUBLIC_ROUTE_PAGE_TUTORIALS_APP_TODO,
  PUBLIC_ROUTE_PAGE_TUTORIALS_GAME_ROCK_PAPER_SCISSORS,
  PUBLIC_ROUTE_PAGE_TUTORIALS_MISC_TIKTOKBIOPAGE,
} from '../../security/constants/routes-public';

const Routes = ({ element, location }) => {
  return (
    <Router basepath={PUBLIC_ROUTE_PAGE_HOME}>
      <PageNotFound default />

      <PageHome path={PUBLIC_ROUTE_PAGE_HOME} />
      <PageBlog path={PUBLIC_ROUTE_PAGE_BLOG} />
      <PageResources path={PUBLIC_ROUTE_PAGE_RESOURCES} />
      <PageSitemap path={PUBLIC_ROUTE_PAGE_SITEMAP} />

      {/* games */}
      <PageGameRockPaperScissors
        path={PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORS}
      />
      <PageGameRockPaperScissorsLizardSpock
        path={PUBLIC_ROUTE_PAGE_GAMES_ROCKPAPERSCISSORSLIZARDSPOCK}
      />
      {/* affiliate courses */}
      <PageAffiliateCoursesHelloCodingAnyoneCanLearnToCode
        path={PUBLIC_ROUTE_PAGE_COURSE_HELLO_CODING_ANYONE_CAN_LEARN_TO_CODE}
      />
      {/* apps */}
      <PageAppEmojis path={PUBLIC_ROUTE_PAGE_APPS_EMOJI_DICTIONARY} />
      <PageAppFelonyChargesDJT
        path={PUBLIC_ROUTE_PAGE_APPS_FELONY_CHARGES_DJT}
      />
      <PageAppJAT path={PUBLIC_ROUTE_PAGE_APPS_JOB_HUNTING_JAT} />
      <PageAppToDo path={PUBLIC_ROUTE_PAGE_APPS_TO_DO} />
      <PageAppUsefulHtmlEntities
        path={PUBLIC_ROUTE_PAGE_APPS_USEFUL_HTML_ENTITIES}
      />
      <PageAppWeather path={PUBLIC_ROUTE_PAGE_APPS_WEATHER} />
      {/* other */}
      <PageAbout path={PUBLIC_ROUTE_PAGE_ABOUT} />
      <PageFelonyChargesDJT path={PUBLIC_ROUTE_PAGE_FELONY_CHARGES_DJT} />
      <PageTikTokBio path={PUBLIC_ROUTE_PAGE_TIKTOKBIO} />
      {/* tutorials */}
      <PageTutorials path={`${PUBLIC_ROUTE_PAGE_TUTORIALS}/:tutorial`} />
      <PageTutorialsAppToDo path={PUBLIC_ROUTE_PAGE_TUTORIALS_APP_TODO} />
      <PageTutorialsGameRockPaperScissors
        path={PUBLIC_ROUTE_PAGE_TUTORIALS_GAME_ROCK_PAPER_SCISSORS}
      />
      <PageTutorialBuildTikTokBioPage
        path={PUBLIC_ROUTE_PAGE_TUTORIALS_MISC_TIKTOKBIOPAGE}
      />
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
