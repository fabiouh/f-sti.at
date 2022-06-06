import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const GridElement = styled.div`
  animation: 1s ${keyframes`${bounceIn}`};
  padding: 6rem;
  display: flex;
  flex: 1;
  @media screen and (max-width: 768px) {
    padding: 2rem;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding: 4rem;
  }

  @media screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 5rem;
    overflow-y: scroll;
  }

  @media screen and (min-width: 1200px) {
    padding: 6rem;
  }
`;

export default GridElement;
