import glasses from './glass-designs';
import magnets from './magnet-designs';
import mugs from './mug-designs';
import sports from './sports-designs';
import stickers from './sticker-designs';
import tshirts from './t-shirt-designs';
import xmas from './xmas-designs';

const allProducts = [
  ...glasses,
  ...magnets,
  ...mugs,
  ...sports,
  ...stickers,
  ...tshirts,
  ...xmas,
];

const storefront = {
  products: allProducts,
  glasses,
  magnets,
  mugs,
  sports,
  stickers,
  tshirts,
  xmas,
};

export default storefront;
