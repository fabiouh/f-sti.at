import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Badge
} from '@chakra-ui/react';
import BadgeWrapper from './BadgeWrapper';

function Dislikes() {
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
    <Box my={4}>
      <Box>
        <Heading size="md" fontFamily="Urbanist">
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
  );
}

export default Dislikes;
