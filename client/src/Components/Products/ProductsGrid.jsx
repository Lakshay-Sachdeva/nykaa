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
    Icon
} from '@chakra-ui/react';
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai'


function ProductGrid() {

    const boxData = [
        {
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/81f14fenykac00000435_1.jpg",
            name: "Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2",
            mrpO: 398,
            mrpR: 338,
            disc: 15
        },
        {
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/81f14fenykac00000435_1.jpg",
            name: "Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2",
            mrpO: 398,
            mrpR: 338,
            disc: 15
        },
        {
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/81f14fenykac00000435_1.jpg",
            name: "Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2",
            mrpO: 398,
            mrpR: 338,
            disc: 15
        },
        {
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/81f14fenykac00000435_1.jpg",
            name: "Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2",
            mrpO: 398,
            mrpR: 338,
            disc: 15
        },
        {
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/81f14fenykac00000435_1.jpg",
            name: "Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2",
            mrpO: 398,
            mrpR: 338,
            disc: 15
        },
        {
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/81f14fenykac00000435_1.jpg",
            name: "Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2",
            mrpO: 398,
            mrpR: 338,
            disc: 15
        },
        {
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/81f14fenykac00000435_1.jpg",
            name: "Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2",
            mrpO: 398,
            mrpR: 338,
            disc: 15
        },
        {
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/81f14fenykac00000435_1.jpg",
            name: "Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2",
            mrpO: 398,
            mrpR: 338,
            disc: 15
        },
        {
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/81f14fenykac00000435_1.jpg",
            name: "Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2",
            mrpO: 398,
            mrpR: 338,
            disc: 15
        },
        {
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/81f14fenykac00000435_1.jpg",
            name: "Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2",
            mrpO: 398,
            mrpR: 338,
            disc: 15
        },
        {
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/81f14fenykac00000435_1.jpg",
            name: "Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2",
            mrpO: 398,
            mrpR: 338,
            disc: 15
        },
    ]

    return (
        <div>
            <Box w="100%" my="10px" >
            {/* <Box mr="27%" my="0px" > */}
                <Grid templateColumns="repeat(3, 1fr)" gap={5} w="90%">
                    {boxData.map((e) => (
                        <Box
                            key={e.img}
                            // ratio={16/9}
                            // backgroundPosition="fit"
                            borderRadius="5px"
                            border='1px'
                            borderColor='gray.200'
                            boxShadow='base'
                            h="400px"

                        >
                            <Box h="100%" w="100%"  >
                                <Flex mr="20%" p="5%">

                                    <Text align="center" color="#fc2779" fontSize='sm'>
                                        FEATURED
                                    </Text>
                                    <Text align="center" color="orange" fontSize='sm' ml="5%">
                                        OFFER
                                    </Text>
                                </Flex>
                                <Image src={e.img} mx="7%"></Image>
                                <Text fontSize="sm" mt="5%">{e.name}</Text>
                                
                                <Flex mx="25%" mt="1%"><Text fontSize="sm" color="gray.400">MRP&nbsp;<Text as="s">₹{e.mrpO}</Text>&nbsp;|</Text><Text fontSize="sm">&nbsp;₹{e.mrpR}</Text></Flex>
                                <Box w="100%"  h="13%" mt="9%">
                                    <Flex>

                                    <Box w="25%" pt="4%">
                                        <Icon as={AiOutlineHeart} w={8} h={8} color="#fc2779" /></Box>
                                    <Box as="button" w="75%" p="4%" color="white" bg="#fc2779" borderRadius="5px">
                                        ADD TO BAG
                                    </Box>
                                    </Flex>
                                </Box>


                            </Box>
                        </Box>

                    ))}
                </Grid>
            </Box>
        </div>


    );
}

export default ProductGrid;
