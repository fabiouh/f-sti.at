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
import ReactRotatingText from 'react-rotating-text';
import '../../style.css';

const Hero = () => {
  /* eslint-disable-next-line */
  const { colorMode, toggleColorMode } = useColorMode();

  const animation = keyframes`${bounceIn}`;
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `;

  const RotatingText = styled(ReactRotatingText)`
    font-weight: bold;
  `;

  return (
    <AnimationDiv>
      <Box
        mx={{ base: '50px', md: '100px', lg: '200px' }}
        my={10}
      >
        <Box>
          <Heading size="lg" fontFamily="Urbanist">
            Hey, I&apos;m Fabian 👋
          </Heading>
          <Divider w={'full'} my={2} />
        </Box>
        <Box>
          <Text fontFamily="Urbanist" fontSize="lg">
            I am a passionate designer and coder. I started
            with small mods and plugins for video games.
            Meanwhile, years after, I decided to switch to
            something &apos;bigger&apos;.
          </Text>
        </Box>
        <Box mt={1} fontFamily="Urbanist">
          <Text fontSize={'lg'}>
            I have experience in:{' '}
            <RotatingText
              items={[
                'JavaScript',
                'TypeScript',
                'C#',
                'SQL',
                'PHP',
                'HTML',
                'CSS',
                'PhotoShop',
                'Illustrator',
                'CAD'
              ]}
            />
          </Text>
        </Box>
      </Box>
    </AnimationDiv>
  );
};

export default Hero;
