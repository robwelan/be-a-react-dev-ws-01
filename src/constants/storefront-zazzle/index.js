import mugs from './mug-designs';
import stickers from './sticker-designs';
import tshirts from './t-shirt-designs';

const store = {
  name: 'Be A React Dev',
  uri: 'https://www.zazzle.com.au/store/beareactdev',
};

const storefront = {
  store,
  products: [...mugs, ...stickers, ...tshirts],
  mugs,
  stickers,
  tshirts,
};

export default storefront;
