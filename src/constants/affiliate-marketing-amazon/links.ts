import amazonAffiliateList01 from './links-list-01';
import amazonAffiliateList02 from './links-list-02';
import amazonAffiliateList03 from './links-list-03';
import productsLaptops from './products-laptops';

const amazonAffiliateIndex = [
  ...amazonAffiliateList01,
  ...amazonAffiliateList02,
  ...amazonAffiliateList03,
];

const shopAmazon = {
  products: {
    laptops: [...productsLaptops],
  },
};

export {
  amazonAffiliateIndex,
  amazonAffiliateList01,
  amazonAffiliateList02,
  amazonAffiliateList03,
  shopAmazon,
};
