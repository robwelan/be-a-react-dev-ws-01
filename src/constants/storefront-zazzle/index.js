import mugs from './mug-designs';
import sports from './sports-designs';
import stickers from './sticker-designs';
import tshirts from './t-shirt-designs';

const store = {
  name: 'Be A React Dev',
  uri: 'https://www.zazzle.com.au/store/beareactdev',
};

const getAllProducts = () => [...mugs, ...sports, ...stickers, ...tshirts];

const storefront = {
  store,
  products: () => getAllProducts(),
  mugs,
  sports,
  stickers,
  tshirts,
};

export default storefront;
