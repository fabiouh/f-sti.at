import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactRotatingText from 'react-rotating-text';

function AboutMe() {
  const RotatingText = styled(ReactRotatingText)`
    font-weight: bold;
  `;

  const ContactHREF = styled.u`
    color: #4287f5;
    :hover {
      color: #5391f5;
    }
  `;

  return (
    <>
      <Box my={4}>
        <Heading size="md" fontFamily="Urbanist">
          About me 🤷‍♂️
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Text fontFamily="Urbanist" fontSize="lg">
        I particularly work for friends and small local
        companys. If you want me to work for you, feel free
        to{' '}
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
    </>
  );
}

export default AboutMe;
