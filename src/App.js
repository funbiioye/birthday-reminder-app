import { Center, Stack, Box } from "@chakra-ui/layout";
import {useState} from 'react';
import Header from './components/Header';
import List from './components/List';
import ClearAll from './components/ClearAll';
import data from './components/data';

function App() {

  const [people, setPeople] = useState(data)

  return (
    <Stack>
      <Center>
        <Box>
          <Header />
          <List people={people} />
          <ClearAll onClick={() => setPeople([])} />
        </Box>
      </Center>
    </Stack>
  );
}

export default App;
