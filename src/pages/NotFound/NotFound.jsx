import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import {
  Box,
  Heading,
  Text,
  Button
} from '@chakra-ui/react';
import { flipInX as AnimationType } from 'react-animations';

export default function NotFound() {
  const navigate = useNavigate();
  const ReturnToHome = () => {
    let path = '/';
    navigate(path);
  };

  const animation = keyframes`${AnimationType}`;
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `;

  return (
    <AnimationDiv>
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bg="red"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Site not found
        </Text>
        <Text color={'gray.500'} mb={6}>
          Oops, seems like this site is not existing.
        </Text>

        <Button
          colorScheme="gray"
          variant="solid"
          onClick={ReturnToHome}
        >
          Back to home
        </Button>
      </Box>
    </AnimationDiv>
  );
}
