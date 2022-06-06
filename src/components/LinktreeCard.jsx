/* eslint-disable */
import React from 'react';
import {
  Box,
  Text,
  useColorModeValue as mode
} from '@chakra-ui/react';
import styled from 'styled-components';

const CardBox = styled(Box)`
  &:hover {
    cursor: pointer;
  }
`;

function Card(props) {
  const openHref = (val) => {
    window.location.href = val;
  };
  return (
    <CardBox
      rounded={{ lg: 'lg' }}
      bg={mode('gray.50', 'gray.700')}
      mx="auto"
      shadow="base"
      overflow="hidden"
      borderRadius={7}
      fontFamily="Urbanist"
      mb={2}
      p={4}
      onClick={() => openHref(props.href)}
      _hover={{
        bg: mode('gray.100', 'gray.600')
      }}
    >
      <Text
        as="h3"
        fontWeight="bold"
        fontSize="lg"
        justify="flex-start"
        flex="1"
      >
        {props.title}
      </Text>
    </CardBox>
  );
}

export default Card;
