import React from 'react';
import GridElement from '../GridElement';
import { Box } from '@chakra-ui/react';

import Socials from './Socials';
import Contact from './Contact';
import Legal from './Legal';

function HomeContentRight() {
  return (
    <GridElement>
      <Box>
        <Contact />
        <Socials />
        <Legal />
      </Box>
    </GridElement>
  );
}

export default HomeContentRight;
