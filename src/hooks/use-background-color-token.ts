//  chakra-ui
import { useColorMode, useTheme, useToken } from '@chakra-ui/react';

const useBackgroundColorToken = () => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const bgColorVar =
    theme.semanticTokens.colors['chakra-body-bg'][`_${colorMode}`];
  const bgColorToken = useToken('colors', [bgColorVar]);

  return { bgColorToken };
};

export default useBackgroundColorToken;
