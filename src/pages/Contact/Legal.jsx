import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

function Legal() {
  const Href = styled(Link)`
    font-family: Urbanist;
    color: #4287f5;
    :hover {
      color: #5391f5;
    }
  `;
  return (
    <Box mx={{ base: '50px', md: '100px', lg: '200px' }}>
      <Href to="/legal">Imprint & Privacy (click me!)</Href>
    </Box>
  );
}

export default Legal;
