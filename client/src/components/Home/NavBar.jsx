import React from "react";
import {
    Box,
    Image,
    Button,
    Container,
    Heading,
    Grid,
    Link,
    Text,
    Flex,
    Spacer
} from '@chakra-ui/react';

import { Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'
import { FiSmartphone } from 'react-icons/fi'

// 2. Use the `as` prop
function Example() {
  return <Icon as={MdSettings} />
}


var link = "https://adn-static1.nykaa.com/media/wysiwyg/2021/topstrips17.jpg";
function NavBar() {
    return <>
        <Box
            w="100%"
            h="40px"
            backgroundImage={link}>
            <Box
                h="100%"
                mx="6%"
            >

                <Flex>
                    <Box h="30px" my="5px" w="60px" bg='red.400'>
                        <Icon as={FiSmartphone} />
                        Box 1
                    </Box>
                    <Spacer />
                    <Box w="30px" h="30px" my="5px" bg='green.400'>
                        Box 2
                    </Box>
                </Flex>


            </Box>

        </Box>

    </>
}
export default NavBar;


<Box>
    <a href="https://www.nykaa.com/offers.html?intcmp=hdr,top_strip,1,nykaa-sale" target="_blank" rel="noopener noreferrer"> Mega Republic Day Sale - Upto 50% Off </a>
</Box>
{/* <Spacer/> */ }
{/* <Box>
                <Box p="4" bg="red"></Box>
                <Box p="4" bg="red"></Box>
            </Box> */}