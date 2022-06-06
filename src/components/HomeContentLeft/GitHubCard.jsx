/* eslint-disable */
import {
  Box,
  Divider,
  HStack,
  Text,
  IconButton,
  Flex,
  useColorModeValue as mode
} from '@chakra-ui/react';
import * as React from 'react';
import { AiFillStar, AiFillCalendar } from 'react-icons/ai';
import { CgGitFork } from 'react-icons/cg';
import { IoMdOpen } from 'react-icons/io';

const GitHubCard = (props) => {
  const openRepo = (val) => {
    window.location.href = val;
  };

  return (
    <Box
      rounded={{ lg: 'lg' }}
      bg={mode('gray.50', 'gray.700')}
      mx="auto"
      shadow="base"
      overflow="hidden"
      borderRadius={7}
      fontFamily="Urbanist"
      mb={2}
    >
      <Box px="6" py="4">
        <Flex>
          <Text
            as="h3"
            fontWeight="bold"
            fontSize="lg"
            justify="flex-start"
            flex="1"
          >
            {props.title}
          </Text>
          <IconButton
            isRound
            size="sm"
            icon={<IoMdOpen />}
            onClick={() => openRepo(props.link)}
            justify="flex-end"
          />
        </Flex>
        <Text
          color={mode('gray.600', 'gray.300')}
          fontSize="sm"
        >
          {props.description}
        </Text>
      </Box>
      <Divider />
      <HStack mx={6} my={2}>
        <HStack>
          <AiFillStar />
          <span>{props.stars}</span>
        </HStack>
        <HStack>
          <CgGitFork />
          <span>{props.forks}</span>
        </HStack>
        <HStack>
          <AiFillCalendar />
          <span>{props.dateModified}</span>
        </HStack>
      </HStack>
    </Box>
  );
};

export default GitHubCard;
