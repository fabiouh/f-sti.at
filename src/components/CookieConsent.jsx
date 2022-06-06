import React, { useState } from 'react';
import {
  Flex,
  Text,
  useColorModeValue as mode,
  Button,
  Box,
  Spacer,
  Center
} from '@chakra-ui/react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import styled, { keyframes } from 'styled-components';
import { fadeInUp as animation } from 'react-animations';

function CookieConsent(props) {
  const CookieConsent = styled(Flex)`
    animation: 1s ${keyframes`${animation}`};

    @media screen and (min-width: 1200px) {
      width: 30vw;
      bottom: 0;
      right: 0;
      margin: 18px;
      border-radius: 12px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: 1200px) {
      bottom: 0;
      width: 100vw;
      box-shadow: 0px -10px 25px 0px rgba(0, 0, 0, 0.1);
    }
  `;
  let [consentAccepted, setConsentAccepted] =
    useState(false);

  const onAccept = () => {
    setConsentAccepted(true);
  };

  const onDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  if (consentAccepted === true) {
    return;
  } else {
    return (
      <CookieConsent
        zIndex={1}
        position="fixed"
        textAlign="center"
        p={4}
        bg={mode('gray.50', 'gray.700')}
        flexDirection="row"
      >
        <Center>
          {/* eslint-disable-next-line */}
          <Text>{props.text}</Text>
        </Center>
        <Spacer />
        <Box>
          <Button
            leftIcon={<AiFillCloseCircle />}
            colorScheme="red"
            m={1}
            onClick={() => onDecline()}
            size="sm"
            /* eslint-disable-next-line */
          >
            Decline
          </Button>
          <Button
            leftIcon={<TiTick />}
            colorScheme="green"
            m={1}
            /* eslint-disable-next-line */
            onClick={() => onAccept()}
            size="sm"
          >
            Accept
          </Button>
        </Box>
      </CookieConsent>
    );
  }
}

export default CookieConsent;
