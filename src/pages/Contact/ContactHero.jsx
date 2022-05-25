import React from 'react';
import {
  Heading,
  Box,
  Divider,
  Text,
  useColorMode
} from '@chakra-ui/react';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

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
            Contact me 💌
          </Heading>
          <Divider w={'full'} my={2} />
        </Box>
        <Box>
          <Text fontFamily="Urbanist" fontSize="lg">
            You are interested in my person or my work?
            Great!
          </Text>
        </Box>
      </Box>
    </AnimationDiv>
  );
};

export default Hero;
