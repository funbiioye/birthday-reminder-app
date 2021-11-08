import { Button } from '@chakra-ui/button'
import { Center } from '@chakra-ui/layout'
import {useState} from 'react'
import data from './data'

function ClearAll() {

    const [people, setPeople] = useState(data)

    return (
        <Center>
            <Button onClick={ () => setPeople([])}>
                Clear All
            </Button>
        </Center>
        
    )
}

export default ClearAll
