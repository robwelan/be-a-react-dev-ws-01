const returnProduct = (payload) => {
  const { label, sex = 'unisex', src, type = 't-shirt', uri } = payload;

  return {
    asset: {
      image: {
        alt: label.toLowerCase(),
        src,
      },
      uri,
    },
    sex,
    name: label,
    type,
  };
};

export default returnProduct;
