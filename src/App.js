import { Center, Stack, Box } from "@chakra-ui/layout";
import {useState} from 'react';
import Header from './components/Header';
import List from './components/List';import data from './components/data';

function App() {

  const [people, setPeople] = useState(data)

  return (
    <Stack>
      <Center>
        <Box>
          <Header />
        </Box>
      </Center>
    </Stack>
  );
}

export default App;
