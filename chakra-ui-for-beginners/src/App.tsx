import './App.css';
import Header from './components/Header';
// import {
//   Box,
//   Spacer,
//   Stack,
//   Text,
//   VStack,
//   Heading,
//   Button,
// } from '@chakra-ui/react';

function App() {
  return (
    <div className='App'>
      {/* <VStack spacing='24px'>
        <Box as='section' bg='tomato' w='120px' h='150px' color='white'>
          This is a box.
        </Box>
        <Spacer />
        <Box as='section' bg='yellow' w='120px' h='100px' color='white'>
          This is a box.
        </Box>
        <Box as='section' bg='red' w='140px' h='100px' color='white'>
          This is a box.
        </Box>
        <Box as='section' bg='teal' w='150px' h='150px' color='white'>
          This is a box.
        </Box>
      </VStack>
      <Text as='b' fontSize='lg' color='tomato' noOfLines={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut
        ipsam itaque necessitatibus iste tempora quidem cupiditate deleniti
        laborum. Itaque nesciunt perspiciatis, voluptatibus ex molestias
        voluptates libero impedit odit officiis.
      </Text>
      <Heading as='h1'>I am a heading</Heading>
      <Box h='200px' w='300px' bg='teal' mt='10px'>
        <Text fontSize='32px'>I am text in a box</Text>
        <Button
          mt='32px'
          colorScheme='red'
          _hover={{ background: 'blue' }}
          _focus={{ background: 'yellow.300', color: 'red.500' }}
        >
          Click Me
        </Button>
      </Box> */}
      <Header></Header>
    </div>
  );
}

export default App;
