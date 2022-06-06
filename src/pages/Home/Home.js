import React from 'react';
import HomeContentLeft from '../../components/HomeContentLeft/HomeContentLeft';

import styled from 'styled-components';
import HomeContentRight from '../../components/HomeContentRight/HomeContentRight';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  max-height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

function Home() {
  return (
    <Wrapper>
      <HomeContentLeft />
      <HomeContentRight />
    </Wrapper>
  );
}

export default Home;
