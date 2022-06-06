import React from 'react';
import {
  Heading,
  Box,
  Divider,
  Text,
  useColorMode,
  Button
} from '@chakra-ui/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Hero = () => {
  /* eslint-disable-next-line */
  const { colorMode, toggleColorMode } = useColorMode();

  const Mail = styled(Link)`
    color: #4287f5;
    :hover {
      color: #5391f5;
    }
  `;

  return (
    <Box
      mx={{ base: '50px', md: '100px', lg: '200px' }}
      my={10}
    >
      <Button
        size="sm"
        mb={4}
        leftIcon={<BsFillArrowLeftCircleFill />}
        onClick={() => (window.location.href = '/')}
      >
        Back to home
      </Button>

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
  );
};

export default Hero;
