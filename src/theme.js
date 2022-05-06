import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const styles = {
  global: () => ({
    body: { background: 'transparent' }
  })
};

const theme = extendTheme({ config, styles });

export default theme;