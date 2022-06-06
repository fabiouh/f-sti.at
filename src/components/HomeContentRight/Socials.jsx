import React from 'react';
import {
  Box,
  Heading,
  Divider,
  IconButton
} from '@chakra-ui/react';
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillMail
} from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

function Socials() {
  const Redirector = (val) => {
    window.location.href = val;
  };

  return (
    <Box my={4}>
      <Box>
        <Heading size="md" fontFamily="Urbanist">
          My Socials 🤷‍♂️
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>

      <Box>
        <IconButton
          icon={<AiFillInstagram />}
          size="md"
          m={1}
          onClick={() =>
            Redirector('https://www.instagram.com/fabiouuh')
          }
        />
        <IconButton
          icon={<BsFacebook />}
          size="md"
          m={1}
          onClick={() =>
            Redirector(
              'https://www.facebook.com/fabi.stifter.3'
            )
          }
        />
        <IconButton
          icon={<AiFillGithub />}
          size="md"
          m={1}
          onClick={() =>
            Redirector('https://github.com/fabiouh')
          }
        />
        <IconButton
          icon={<AiFillMail />}
          size="md"
          m={1}
          onClick={() => Redirector('mailto:fab@f-sti.at')}
        />
      </Box>
    </Box>
  );
}

export default Socials;
