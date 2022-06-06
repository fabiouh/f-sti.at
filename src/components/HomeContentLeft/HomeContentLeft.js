import React from 'react';
import { useColorMode, Box } from '@chakra-ui/react';
import GridElement from '../GridElement';

import Greeting from './Greeting';
import AboutMe from './AboutMe';
import Likes from './Likings/Likes';
import LatestRepos from './LatestRepos';
import Dislikes from './Likings/Dislikes';

function HomeContentLeft() {
  /* eslint-disable-next-line */
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <GridElement>
      <Box>
        <Greeting />
        <AboutMe />
        <Likes />
        <Dislikes />
        <LatestRepos />
      </Box>
    </GridElement>
  );
}

export default HomeContentLeft;
