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


function OnlyAtNykaa(data) {
    console.log(data.data)
    const boxData = data.data;

    function changeBackground(e) {
        e.target.style.boxShadow = "0 10px 10px 0 #00000038";
    }
    function changeBackground2(e) {
        e.target.style.boxShadow = "none";
    }

    return (
         <div>
            <Box mx="6%" my="20%" >
                <Grid templateColumns="repeat(2, 1fr)" gap={10} h='300px' w="98%">
                    {boxData.map((e) => (
                    <Box
                        backgroundImage={`url(${e.link})`}
                        // backgroundPosition="fit"
                        backgroundRepeat="no-repeat"
                        // backgroundSize="contain"
                        borderRadius="5px"
                        border='1px'
                        borderColor='gray.200'
                        boxShadow='base'
                        onMouseEnter={changeBackground}
                        onMouseLeave={changeBackground2}
                    // bg="gray.200"
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

export default OnlyAtNykaa;
