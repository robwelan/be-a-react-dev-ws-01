type Payload = {
  icons: object;
  code: number;
};

const getAsset = (payload: Payload) => {
  const { icons = {}, code } = payload;
  const asset = icons[code as keyof typeof icons];

  return {
    label: asset['label'],
  };
};

export default getAsset;
