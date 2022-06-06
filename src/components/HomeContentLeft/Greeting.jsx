import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Text
} from '@chakra-ui/react';
import ReactRotatingText from 'react-rotating-text';
import styled from 'styled-components';
import '../../style.css';

function Greeting() {
  const RotatingText = styled(ReactRotatingText)`
    font-weight: bold;
  `;

  return (
    <>
      <Box mb={4}>
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
    </>
  );
}

export default Greeting;
