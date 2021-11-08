import {useState} from 'react';
import { Heading, Center } from '@chakra-ui/layout'
import React from 'react'
import data from './data'

function Header() {

    const [people, setPeople] = useState(data)

    return (
        <Center>
            <Heading p={2} bgGradient="linear(to-r, #7928CA, #FF0080)" bgClip='text'>
                {people.length} Birthday's Today
            </Heading>
        </Center>
        
    )
}

export default Header
