import './App.css';
import { Box, Flex, Spacer } from '@chakra-ui/react';

function App() {
  return (
    <div className='App'>
      <Flex justify='space-between' align='center'>
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
      </Flex>
    </div>
  );
}

export default App;
