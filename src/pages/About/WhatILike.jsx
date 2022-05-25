import React from 'react';
import {
  Heading,
  Box,
  Divider,
  useColorMode,
  Badge
} from '@chakra-ui/react';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
import '../../style.css';

const WhatILike = () => {
  /* eslint-disable-next-line */
  const { colorMode, toggleColorMode } = useColorMode();

  const animation = keyframes`${bounceIn}`;
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `;

  const BadgeWrapper = styled.span`
    margin-right: 5px;
  `;

  const Likes = [
    'Coding',
    'Medicine',
    'Biology',
    'UI/UX Design',
    'Swimming',
    'Holidays',
    'White Chocolate',
    'Dogs',
    'Cats'
  ];

  return (
    <AnimationDiv>
      <Box
        mx={{ base: '50px', md: '100px', lg: '200px' }}
        my={10}
      >
        <Box>
          <Heading size="lg" fontFamily="Urbanist">
            I like 😃
          </Heading>
          <Divider w={'full'} my={2} />
        </Box>
        <Box>
          {Likes.map(function (item, i) {
            return (
              <BadgeWrapper key={i}>
                <Badge variant="subtle" colorScheme="green">
                  {item}
                </Badge>
              </BadgeWrapper>
            );
          })}
        </Box>
      </Box>
    </AnimationDiv>
  );
};

export default WhatILike;
