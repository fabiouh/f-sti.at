import React from 'react';
import {
  Heading,
  Box,
  Divider,
  Text,
  useColorMode
} from '@chakra-ui/react';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
import { Link } from 'react-router-dom';
import '../../style.css';

const Hero = () => {
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

  return (
    <AnimationDiv>
      <Box
        mx={{ base: '50px', md: '100px', lg: '200px' }}
        my={10}
      >
        <Box>
          <Heading size="lg" fontFamily="Urbanist">
            Imprint 📄
          </Heading>
          <Divider w={'full'} my={2} />
        </Box>
        <Box>
          <Text fontFamily="Urbanist" fontSize="lg">
            Fabian Stifter
          </Text>
          <Text fontFamily="Urbanist" fontSize="lg">
            <Mail to="mailto:fab@f-sti.at">
              fab@f-sti.at (click me!)
            </Mail>
          </Text>
          <Text fontFamily="Urbanist" fontSize="lg">
            Feldgasse 19
          </Text>
          <Text fontFamily="Urbanist" fontSize="lg">
            7331 Weppersdorf
          </Text>
          <Text fontFamily="Urbanist" fontSize="lg">
            Austria
          </Text>
        </Box>
      </Box>
    </AnimationDiv>
  );
};

export default Hero;
