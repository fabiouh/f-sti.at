import React from 'react';
import {
  Box,
  Text,
  useColorMode,
  Heading,
  Divider
} from '@chakra-ui/react';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
import ReactRotatingText from 'react-rotating-text';
import { Link } from 'react-router-dom';
import '../../style.css';

const AboutMe = () => {
  /* eslint-disable-next-line */
  const { colorMode, toggleColorMode } = useColorMode();

  const animation = keyframes`${bounceIn}`;
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `;

  const ContactHREF = styled.u`
    color: #4287f5;
    :hover {
      color: #5391f5;
    }
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
          <Heading size="md" fontFamily="Urbanist">
            About me 🤷‍♂️
          </Heading>
          <Divider w={'full'} my={2} />
        </Box>
        <Text fontFamily="Urbanist" fontSize="lg">
          I particularly work for friends and small local
          companys. If you want me to work for you, feel
          free to{' '}
          <Link to="/contact">
            <ContactHREF>contact me</ContactHREF>
          </Link>
          . Some of my clients:{' '}
          <RotatingText
            fontWeight="bold"
            items={[
              'Kräutermanufaktur Burgenland',
              'Engineverse',
              'Schülerunion',
              'Junge ÖVP',
              'True-Life',
              'Kärnten-RP'
            ]}
          />
        </Text>
      </Box>
    </AnimationDiv>
  );
};

export default AboutMe;
