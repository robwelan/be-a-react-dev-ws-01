import tshirtMenAutisticAsFuck from './tshirt-men-autistic-as-fuck';
import tshirtMenMerryEverything from './tshirt-men-merry-everything';
import tshirtMenNSFW from './tshirt-men-nsfw';
import tshirtMenTheSystemIsFixed from './tshirt-men-the-system-is-fixed';
import tshirtMenWistful from './tshirt-men-wistful';
import tshirtWomenAutisticAsFuck from './tshirt-women-autistic-as-fuck';
import tshirtWomenMerryEverything from './tshirt-women-merry-everything';
import tshirtWomenNSFW from './tshirt-women-nsfw';
import tshirtWomenTheSystemIsFixed from './tshirt-women-the-system-is-fixed';
import tshirtWomenWistful from './tshirt-women-wistful';

const shared = {
  store: {
    name: 'Be A React Dev',
    uri: 'https://www.zazzle.com.au/store/beareactdev',
  },
};

const storefront = [
  tshirtMenAutisticAsFuck,
  tshirtMenMerryEverything,
  tshirtMenNSFW,
  tshirtMenTheSystemIsFixed,
  tshirtMenWistful,

  tshirtWomenAutisticAsFuck,
  tshirtWomenMerryEverything,
  tshirtWomenNSFW,
  tshirtWomenTheSystemIsFixed,
  tshirtWomenWistful,
];

const store = {
  common: shared,
  products: storefront,
};

export { store };

export default storefront;