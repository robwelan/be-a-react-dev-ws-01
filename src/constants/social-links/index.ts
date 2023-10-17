//  links
import linkEmail from './link-email';
import linkFacebook from './link-facebook';
import linkKofi from './link-kofi';
import linkLinkedIn from './link-linkedin';
import linkMedium from './link-medium';
import linkPatreon from './link-patreon';
import linkRssFeed from './link-rss-feed';
import linkStackOverflow from './link-stack-overflow';
import linkX from './link-x';
//  TODO: convert evrything to beareact dev and make constant linkEmail more re-used and split all links out to indivvidual items so turn this file into an index.tsx in a folder of the same name

const linksSocial = [
  linkEmail,
  linkFacebook,
  linkKofi,
  linkLinkedIn,
  linkMedium,
  linkPatreon,
  linkRssFeed,
  linkStackOverflow,
  linkX,
];

export default linksSocial;
