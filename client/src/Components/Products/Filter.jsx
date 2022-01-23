import {
    Box,
    Accordion,
    AccordionButton,
    AccordionPanel,
    AccordionItem,
    AccordionIcon,
    Stack,
    Checkbox,
    Input,
    InputGroup,
    InputLeftElement,
    CheckboxGroup,
    Image,
    Button,
    Container,
    Heading,
    Grid,
    Link,
    Text,
    Flex,
    Icon
} from '@chakra-ui/react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { SearchIcon } from '@chakra-ui/icons'


function Filter() {



    return (
        <>
            <Box w="27%">
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Brand
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Input type='text' placeholder='Search' />
                            <Stack mt={3} spacing={1}>
                                <Checkbox colorScheme='pink'>Nykaa Cosmetics</Checkbox>
                                <Checkbox colorScheme='pink'>Maybelline New York</Checkbox>
                                <Checkbox colorScheme='pink'>Kay Beauty</Checkbox>
                                <Checkbox colorScheme='pink'>Faces Canada</Checkbox>
                                <Checkbox colorScheme='pink'>Lotus Make Up</Checkbox>
                                <Checkbox colorScheme='pink'>Colorbar</Checkbox>
                                <Checkbox colorScheme='pink'>Lakme</Checkbox>
                                <Checkbox colorScheme='pink'>M.A.C</Checkbox>
                                <Checkbox colorScheme='pink'>Swiss Beauty</Checkbox>
                            </Stack>

                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Price
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Stack mt={1} spacing={1}>
                                <Checkbox colorScheme='pink'>Rs. 0 - Rs. 499</Checkbox>
                                <Checkbox colorScheme='pink'>Rs. 500 - Rs. 999</Checkbox>
                                <Checkbox colorScheme='pink'>Rs. 1000 - Rs. 1999</Checkbox>
                                <Checkbox colorScheme='pink'>Rs. 2000 - Rs. 3999</Checkbox>
                                <Checkbox colorScheme='pink'>Rs. 4000 & Above</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>

        </>


    );
}

export default Filter;
