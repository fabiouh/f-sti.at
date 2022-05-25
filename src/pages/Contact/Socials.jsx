import React from 'react';
import {
  Box,
  Text,
  useColorMode,
  Heading,
  Divider,
  Flex,
  Button
} from '@chakra-ui/react';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
import {
  AiFillInstagram,
  AiFillGithub
} from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Legal from './Legal';

const Socials = () => {
  /* eslint-disable-next-line */
  const { colorMode, toggleColorMode } = useColorMode();

  const animation = keyframes`${bounceIn}`;
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `;

  const Mail = styled(Link)`
    color: #4287f5;
    :hover {
      color: #5391f5;
    }
  `;

  const Instagram = () => {
    window.location.href = 'https://instagram.com/fabiouh';
  };

  const Facebook = () => {
    window.location.href =
      'https://www.facebook.com/fabi.stifter.3';
  };

  const GitHub = () => {
    window.location.href = 'https://github.com/fabiouh';
  };

  return (
    <AnimationDiv>
      <Box
        mx={{ base: '50px', md: '100px', lg: '200px' }}
        my={10}
      >
        <Box>
          <Heading size="md" fontFamily="Urbanist">
            My socials 📲
          </Heading>
          <Divider w={'full'} my={2} />
        </Box>
        <Text fontFamily="Urbanist" fontSize="lg">
          Check out my social medias!
        </Text>
        <Text fontFamily="Urbanist" fontSize="lg">
          Mail:{' '}
          <Mail to="mailto:fab@f-sti.at">
            fab@f-sti.at (click me!)
          </Mail>
        </Text>
        <Flex gap={3} mt={2}>
          <Button
            colorScheme="purple"
            size="sm"
            onClick={() => Instagram()}
          >
            <AiFillInstagram
              style={{ marginRight: '3px' }}
            />
            Instagram
          </Button>
          <Button
            colorScheme="blue"
            size="sm"
            onClick={() => Facebook()}
          >
            <BsFacebook style={{ marginRight: '3px' }} />
            Facebook
          </Button>
          <Button
            colorScheme="gray"
            size="sm"
            onClick={() => GitHub()}
          >
            <AiFillGithub style={{ marginRight: '3px' }} />
            Github
          </Button>
        </Flex>
      </Box>
      <Legal />
    </AnimationDiv>
  );
};

export default Socials;
