import React from 'react';
import {
  Heading,
  Box,
  Divider,
  Text,
  Center,
  useColorMode
} from '@chakra-ui/react';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
import '../../style.css';

const Hero = () => {
  /* eslint-disable-next-line */
  const { colorMode, toggleColorMode } = useColorMode();

  const animation = keyframes`${bounceIn}`;
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `;

  return (
    <AnimationDiv>
      <Box
        mx={{ base: '50px', md: '100px', lg: '200px' }}
        my={10}
      >
        <Box>
          <Heading size="lg" fontFamily="Urbanist">
            Who am I? 🤨
          </Heading>
          <Divider w={'full'} my={2} />
        </Box>
        <Box>
          <Center>
            <Text fontFamily="Urbanist" fontSize="lg">
              My name is Fabian. I started doing some small
              design work as a teenager for a few famous
              youtubers back in the days. Someday i wanted
              to do something more challenging and learn
              something new. I was always interested in
              coding and how computers work, so I started
              coding some smaller plugins and mods for
              different video games. I somehow discovered
              React and TypeScript, and this was the
              beginning of me being a front-end developer. I
              started doing projects for fun but someday,
              friends and local companys got interested in
              my work.
            </Text>
          </Center>
        </Box>
      </Box>
    </AnimationDiv>
  );
};

export default Hero;
