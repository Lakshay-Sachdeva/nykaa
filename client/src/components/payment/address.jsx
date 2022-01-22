
import { useState } from 'react'
import {
        Stack,
        FormControl,
        FormLabel,
        Input,
        FormErrorMessage,
        FormHelperText,
        InputLeftAddon,
        InputGroup,
        Heading,
        Textarea,
        Text,
        Button

} from '@chakra-ui/react'


export const Address = () => {
   const [form,setForm]=useState(
           {
                   username:"",
                   email:"",
                   mobile:"",
                   pincode:"",
                   address:""
           }
   )

   const handleChange=(e)=>{
           const{name,value}=e.target;
           setForm({
                   ...form,
                   [name]:value,
           })

   }
   const handleSubmit=(e)=>{
   
         console.log(form)
         setForm({
                 ...form,
                username:"",
                email:"",
                mobile:"",
                pincode:"",
                address:"" 
         })
   }
        return (
                <Stack boxShadow='base' minW="30%" p={5} background="#fff" m="3">

                        <FormControl >
                                <Heading align="start" size="md" fontWeight="bold">Address</Heading >


                                <FormLabel htmlFor='email' opacity=".5" mt=".7rem">Name</FormLabel>
                                <Input name="username" id='name' type='text' placeholder='Enter name' variant='flushed' onChange={handleChange}/>

                                <FormLabel htmlFor='email' opacity=".5" mt=".7rem">Email address</FormLabel>
                                <Input name="email" id='email' type='email' placeholder='Enter email' variant='flushed' onChange={handleChange} />

                                <FormLabel htmlFor='email' opacity=".5" mt=".7rem">Phone</FormLabel>
                                <InputGroup mt=".7rem">
                                        <InputLeftAddon children='+91' variant='flushed' onChange={handleChange} />
                                        <Input name="mobile" type='tel' placeholder='phone number' variant='flushed' onChange={handleChange} />
                                </InputGroup>

                                <FormLabel htmlFor='pincode' opacity=".5" mt=".7rem">Pincode</FormLabel>
                                <Input name="pincode" type='number' placeholder='postel code' variant='flushed' onChange={handleChange} />
                                <FormLabel htmlFor='Address' opacity=".5" mt=".7rem">Address</FormLabel>
                                <Input name="address" type='address' placeholder='Enter Address' height="5rem"  onChange={handleChange} />

                                <Button
                                        mt={4}

                                        colorScheme='pink'
                                        color="white"
                                        type='submit'
                                        border="none"
                                        onClick={handleSubmit}
                                >
                                        Ship to This Address
                                </Button>

                                {/* {!isError ? (
                                        <FormHelperText>
                                                Enter the email you'd like to receive the newsletter on.
                                        </FormHelperText>
                                ) : (
                                        <FormErrorMessage>Email is required.</FormErrorMessage>
                                )} */}
                        </FormControl>
                </Stack>
        )
}      