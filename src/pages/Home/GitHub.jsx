import React from 'react';
import {
  Box,
  useColorMode,
  Heading,
  Divider
} from '@chakra-ui/react';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
import GitHubAPI from '../../api/github';
import GitHubCard from '../../components/GitHubCard';
import moment from 'moment';

const GitHub = () => {
  /* eslint-disable-next-line */
  const { colorMode, toggleColorMode } = useColorMode();

  const animation = keyframes`${bounceIn}`;
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `;

  const { data } = GitHubAPI();

  return (
    <AnimationDiv>
      <Box
        mx={{ base: '50px', md: '100px', lg: '200px' }}
        my={10}
      >
        <Box>
          <Heading size="md" fontFamily="Urbanist">
            My latest GitHub Repos 🖥
          </Heading>
          <Divider w={'full'} my={2} />
        </Box>
        {data?.length >= 1
          ? data.map((item, i) => (
              <GitHubCard
                title={item.full_name}
                description={item.description}
                stars={item.stargazers_count}
                forks={item.forks}
                link={item.html_url}
                dateModified={moment(item.updated_at)
                  .utc()
                  .format('DD-MM-YYYY')}
                key={i}
              />
            ))
          : null}
      </Box>
    </AnimationDiv>
  );
};

export default GitHub;
