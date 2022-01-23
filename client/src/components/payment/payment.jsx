import { Cart } from "../payment/cart"
import { Address } from "../payment/address"
import { Stack, HStack, VStack, } from '@chakra-ui/react'
import { Head } from "../payment/banner"
import {Amount} from "../payment/amount"
export const Home = () => {
        return (
                <>

                        <Head/>
                <HStack spacing='24px'>
                        <Address />
                        <Cart />
                        <Amount />
                </HStack>
                </>
        )
}

