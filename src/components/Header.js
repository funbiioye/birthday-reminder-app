import {useState} from 'react';
import { Heading, Center, VStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import React from 'react'
import List from './List'
import data from './data'

function Header() {

    const [people, setPeople] = useState(data)

    return (
        <Center>
            <VStack>
                <Heading p={2} bgGradient="linear(to-r, #7928CA, #FF0080)" bgClip='text'>
                    {people.length} Birthday's Today
                </Heading>
                <List people={people} />
                <Button onClick={ () => setPeople([])}>
                    Clear All
                </Button>
            </VStack>
        </Center>
        
    )
}

export default Header
