import {Text, Container,Flex} from "@chakra-ui/react"

export const Amount=()=>{
        return(
                <Container  background="#fff" p="4" m="3">

           
                       <Flex justifyContent="space-between" p="1">

                        <Text>Sub Total</Text> <Text>₹1299</Text>
                       </Flex>
                       <Flex justifyContent="space-between" p="1">

                        <Text>Shipping Charge</Text> <Text color="#4DB6AC">Free</Text>
                       </Flex>
                       <Flex justifyContent="space-between" p="1">

                        <Text>Discount</Text> <Text>0</Text>
                       </Flex>
                       <Flex justifyContent="space-between" p="1">

                        <Text>Grand Total</Text> <Text>₹1299</Text>
                       </Flex>
                       
                
              
                </Container>
        )
}