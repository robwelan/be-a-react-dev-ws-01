type Payload = {
  icons: object;
  code: number;
  icon: string;
};

const getAsset = (payload: Payload) => {
  const { icons = {}, code, icon } = payload;
  const asset = icons[code as keyof typeof icons];
  const assetIcon = asset[icon];
  const assetColorScheme = asset['colorScheme'];

  return {
    colorScheme: assetColorScheme,
    icon: assetIcon,
    theme: asset['theme'],
  };
};

export default getAsset;
