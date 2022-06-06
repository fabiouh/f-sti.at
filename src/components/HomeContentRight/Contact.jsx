import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Text
} from '@chakra-ui/react';

function Contact() {
  return (
    <>
      <Box mb={4}>
        <Heading size="lg" fontFamily="Urbanist">
          Contact me 💌
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text fontFamily="Urbanist" fontSize="lg">
          You think my work is cool and you think I can code
          your ideas? Feel free to contact me and we will
          find a solution:
        </Text>
      </Box>
    </>
  );
}

export default Contact;
