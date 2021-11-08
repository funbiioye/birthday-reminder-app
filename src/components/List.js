import { Box, Center, Text, Flex } from '@chakra-ui/layout'
import { Image } from "@chakra-ui/react"
import React from 'react'

function List({people}) {

    

    return (
        <Center>
            <Box bgGradient="linear(to-b, cyan.400, blue.500, purple.600)" mt={5} boxShadow={true}  w='400px' borderRadius='15px'>
                {people.map ((person) => { 
                    const {id, name, age, image} = person
                    return(
                       <Flex alignItems='center' key={id} pl={4} pt={4} pb={2}>
                            <Image src={image} alt='celebrants' w='100px' h='100px' borderRadius='50%' />
                            <Box>
                                <Text color='black' pl={8}> {name}</Text>
                                <Text color='black' pl={8}> {age} years</Text>
                            </Box>
                       </Flex>
                    )
                })}
            </Box>
        </Center>
      
    )
}

export default List
