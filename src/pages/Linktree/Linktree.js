import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
import { Box, Heading, Divider } from '@chakra-ui/react';
import LinktreeCard from '../../components/LinktreeCard';

function Linktree() {
  const animation = keyframes`${bounceIn}`;
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `;

  const Elements = [
    {
      title: 'Instagram',
      href: 'http://instagram.com/fabiouuh'
    },
    {
      title: 'Facebook',
      href: 'https://www.facebook.com/fabi.stifter.3'
    },
    {
      title: 'GitHub',
      href: 'https://www.github.com/fabiouh'
    }
  ];

  return (
    <AnimationDiv>
      <Box
        mx={{ base: '50px', md: '100px', lg: '200px' }}
        my={10}
      >
        <Box>
          <Heading size="lg" fontFamily="Urbanist">
            My Linktree 🌳
          </Heading>
          <Divider w={'full'} my={2} />
        </Box>
        <Box>
          {Elements.map((item, i) => (
            <LinktreeCard
              title={item.title}
              href={item.href}
              key={i}
            />
          ))}
        </Box>
      </Box>
    </AnimationDiv>
  );
}

export default Linktree;
