type SiteConfiguration = {
  device: {
    container: string;

    screen: {
      isExtraSmall: boolean;
      isSmall: boolean;
      isMedium: boolean;
      isLarge: boolean;
      isExtraLarge: boolean;
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
};

export { SiteConfiguration };
