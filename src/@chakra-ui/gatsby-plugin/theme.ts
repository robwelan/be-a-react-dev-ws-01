import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
//  custom theming
import Form from '../../components/theme-customisation/form';

const theme = extendTheme(
  {
    components: {
      Form,
    },
  },
  withProse(),
);

export default theme;
