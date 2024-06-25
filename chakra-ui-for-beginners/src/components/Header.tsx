import { Box, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as='section' pb='114px'>
      <Box
        color='#F7FAFC'
        bg='#6B46C1'
        pt='90px'
        pb='198px'
        px='32px'
        textAlign='center'
      >
        <Heading fontSize='48px' fontWeight='800'>
          Simple heading
        </Heading>
        <Text fontSize='24px' fontWeight='500' pt='16px'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea totam
          tempora reiciendis quibusdam, error neque provident sapiente assumenda
          quidem minima cupiditate soluta impedit vero dolorum, consectetur
          praesentium doloribus fugit. Sunt?
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
