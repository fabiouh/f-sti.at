import React from 'react';
import { Box, Heading, Divider } from '@chakra-ui/react';
import GitHubCard from './GitHubCard';
import GitHubAPI from '../../api/github';
import moment from 'moment';

function LatestRepos() {
  const { data } = GitHubAPI();

  return (
    <>
      <Box my={4}>
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
    </>
  );
}

export default LatestRepos;
