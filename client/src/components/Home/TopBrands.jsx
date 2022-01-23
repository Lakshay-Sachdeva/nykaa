import {
    Box,
    Image,
    Button,
    Container,
    Heading,
    Grid,
    Link,
    Text
} from '@chakra-ui/react';


function TopBrands(data) {
    console.log(data.data)
    const boxData = data.data;

    return (
         <div>
            <Box mx="6%" my="100px" mb="40px">
                <Grid templateColumns="repeat(2, 1fr)" gap={10} h='300px' w="98%">
                    {boxData.map((e) => (
                    <Box
                        key={e.link}
                        // ratio={16/9}
                        backgroundImage={`url(${e.link})`}
                        // backgroundPosition="fit"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        borderRadius="5px"
                        border='1px'
                        borderColor='gray.200'
                        boxShadow='base'
                        _hover={{
                            boxShadow: "0 20px 20px 0 #00000038"
                          }}
                        
                    >
                        <Box mt="41%" mx="2%" boxShadow='md' borderRadius="4px" align="center" h="20" bg="white" >
                            <Text align="center" color="#fc2779" fontSize='xl'>
                                {e.head}
                            </Text>
                            <Text align="center" color="#3f414d" fontSize='md'>
                                {e.desc}
                            </Text>

                        </Box>
                    </Box>
                       
                    ))}
                </Grid>
            </Box>
         </div>

        
    );
}

export default TopBrands;
