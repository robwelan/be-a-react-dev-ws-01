import tshirts from './tshirt-designs';

const getAllProducts = () => [...tshirts];

const storefront = {
  products: () => getAllProducts(),
  tshirts,
};

export default storefront;
