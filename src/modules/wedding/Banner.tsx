import { Box, Link, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { FaDotCircle } from 'react-icons/fa';

const Banner = (): JSX.Element => {
  return (
    <Box as="section">
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        py="3"
        px={{ base: '3', md: '6', lg: '8' }}
        color="white"
        bg={'primary'}
        justifyContent="center"
        alignItems="center"
      >
        <Link
          href="https://youtu.be/3kh2NQWfn5I"
          d="flex"
          alignItems="center"
          py={2}
          px={{ base: '3', md: '6', lg: '8' }}
          fontSize={'md'}
          rounded={'full'}
          bg={'rgba(0,0,0,.5)'}
          color={'white'}
          isExternal
          _hover={{
            bg: 'secondary',
            color: 'black',
          }}
          _focus={{
            bg: 'secondary',
            color: 'black',
          }}
        >
          <FaDotCircle />
          <Text ml="2">Live Streaming (3 July) Click Here</Text>
        </Link>
      </Stack>
    </Box>
  );
};

export default Banner;
