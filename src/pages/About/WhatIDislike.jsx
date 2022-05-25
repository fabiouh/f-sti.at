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

const WhatIDislike = () => {
  /* eslint-disable-next-line */
  const { colorMode, toggleColorMode } = useColorMode();

  const animation = keyframes`${bounceIn}`;
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `;

  const BadgeWrapper = styled.span`
    margin-right: 5px;
  `;

  const Dislikes = [
    'Working Overtime',
    'Stress',
    'Latin',
    'Maths',
    'Cleaning up',
    'Tap Water',
    'Normal Chocolate'
  ];

  return (
    <AnimationDiv>
      <Box
        mx={{ base: '50px', md: '100px', lg: '200px' }}
        my={10}
      >
        <Box>
          <Heading size="lg" fontFamily="Urbanist">
            I don&apos;t like 😒
          </Heading>
          <Divider w={'full'} my={2} />
        </Box>
        <Box>
          {Dislikes.map(function (item, i) {
            return (
              <BadgeWrapper key={i}>
                <Badge variant="subtle" colorScheme="red">
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

export default WhatIDislike;
