import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react';
import CheckIcon from '../Icons/CheckIcon';

const ListItem = ({ children }: StackProps) => {
  return (
    <HStack as='li' spacing='20px'>
      <Icon as={CheckIcon} w='24px' h='24px'></Icon>
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box maxW='994px' margin='auto'>
      <Flex>
        <Box bg='purple.100' p='60px' textAlign='center'>
          <Text fontSize='24px' fontWeight='800'>
            Premium PRO
          </Text>
          <Heading as='h3' fontSize='60px' pt='16px'>
            $329
          </Heading>
          <Text color='grey.900' fontSize='16px' fontWeight='500'>
            billed just once
          </Text>
          <Button colorScheme='purple' size='lg' w='282px' mt='24px'>
            Get Started
          </Button>
        </Box>
        <Box fontSize='18px' p='60px'>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            aliquam?
          </Text>
          <Stack as='ul' spacing='20px' pt='24px'>
            <ListItem>Lorem ipsum dolor consectetur adipisicing elit.</ListItem>
            <ListItem>Lorem ipsum dolor consectetur adipisicing elit.</ListItem>
            <ListItem>Lorem ipsum dolor consectetur adipisicing elit.</ListItem>
            <ListItem>Lorem ipsum dolor consectetur adipisicing elit.</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
