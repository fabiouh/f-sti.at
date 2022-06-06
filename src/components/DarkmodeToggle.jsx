import React from 'react';
import styled from 'styled-components';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function DarkmodeToggle() {
  const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    margin: 12px;
    z-index: 2;
  `;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Wrapper>
      <IconButton
        onClick={toggleColorMode}
        icon={
          colorMode === 'light' ? <MoonIcon /> : <SunIcon />
        }
        isRound
      ></IconButton>
    </Wrapper>
  );
}

export default DarkmodeToggle;
