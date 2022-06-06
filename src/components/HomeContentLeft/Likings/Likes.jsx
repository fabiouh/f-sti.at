import React from 'react';
import {
  Box,
  Heading,
  Badge,
  Divider
} from '@chakra-ui/react';
import BadgeWrapper from './BadgeWrapper';

function Likes() {
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
    <Box my={4}>
      <Box>
        <Heading size="md" fontFamily="Urbanist">
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
  );
}

export default Likes;
