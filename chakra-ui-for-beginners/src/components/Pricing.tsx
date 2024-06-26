import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react';
import CheckIcon from '../Icons/CheckIcon';
import CustomButton from './CustomButton';

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;

  return (
    <HStack as='li' spacing='5' {...rest}>
      <Icon as={CheckIcon} w='22px' h='22px'></Icon>
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box
      maxW='994px'
      margin='auto'
      mt='-40'
      borderRadius='xl'
      overflow='hidden'
      boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
    >
      <Flex>
        <Box bg='#F0EAFB' p='60px' color='#171923' textAlign='center'>
          <Text fontSize='xl' fontWeight='extrabold'>
            Premium PRO
          </Text>
          <Heading as='h3' fontSize='6xl' mt='4'>
            $329
          </Heading>
          <Text color='gray.900' fontSize='lg' fontWeight='medium' mt='2'>
            billed just once
          </Text>
          <CustomButton>Get Started</CustomButton>
        </Box>
        <Box color='#171923' padding='60px' fontSize='lg' bg='white'>
          <Text textAlign='left'>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as='ul' spacing='5' pt='6'>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
