type Children =
  | null
  | string
  | JSX.Element
  | JSX.Element[]
  | (() => JSX.Element);

type Location = {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  key: string;
  origin: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  state: {
    key: string;
  };
};

type LayoutConfiguration = {
  color: {
    colorMode: string;
    toggleColorMode: any;
  };
  device: {
    container: string;
    screen: {
      isExtraLarge: boolean;
      isExtraSmall: boolean;
      isLarge: boolean;
      isMedium: boolean;
      isSmall: boolean;
      isTwoExtraLarge: boolean;
    };
    type: {
      isDesktop: boolean;
      isMobile: boolean;
      isTablet: boolean;
    };
    window: {
      height: number;
      width: number;
    };
  };
  disclosure: {
    isOpen: boolean;
    onClose: any;
    onOpen: any;
  };
};

export { Children, LayoutConfiguration, Location };
