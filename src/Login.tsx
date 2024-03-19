import {  VStack, Image, Text, FormControl, Box, Input, Button, Link, Center}from 'native-base'
import Logo from './assets/Logo.png'
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/Titulo';
export default function Login() {
  return (<VStack  flex={1}alignItems="center" 
             justifyContent="center" p={5}  >
           <Image source={Logo} alt="Logo Voll" />
           <Titulo>
            Faça login em sua conta
           </Titulo>
           <Box>
            <FormControl mt={3} >
              <FormControl.Label>Email</FormControl.Label>
              <Input placeholder='Insira seu endereço de email'
               size='lg'
               w="100%"
               borderRadius='lg'
               bgColor='gray.100'
               shadow={3}
              
              ></Input>
            </FormControl>
            <FormControl mt={3} >
              <FormControl.Label></FormControl.Label>
              <Input placeholder='Insira sua senha'
               size='lg'
               w="100%"
               borderRadius='lg'
               bgColor='gray.100'
               shadow={3}
              
              ></Input>
            </FormControl>
           </Box>
           <Button w="100%" bg="blue.800" mt={10} borderRadius="lg"></Button>
           <Link href='https://www.google.com.br/' mt={2} >Esqueceu sua senha?</Link>
           <Box w="100%" flexDirection ="row" justifyContent="center" mt={8}  >
            <Text>Ainda não tem cadastro?</Text>
            <TouchableOpacity>
              <Text color="blue.500">Faça seu cadastro!</Text>
            </TouchableOpacity>
           </Box>
         </VStack>
    
  );
}



