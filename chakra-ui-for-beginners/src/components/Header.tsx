import { Box, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as='section' pb='28'>
      <Box
        color='gray.50'
        bg='purple.600'
        pt='90px'
        pb='198px'
        px='8'
        textAlign='center'
      >
        <Heading fontSize='5xl' fontWeight='extrabold'>
          Simple pricing for your business
        </Heading>
        <Text fontSize='2xl' fontWeight='medium' pt='4'>
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
