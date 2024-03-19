import {
  ScrollView,
  Image,
  Text,
  FormControl,
  Box,
  Input,
  Button,
  Link,
  Center,Checkbox 
} from "native-base";
import Logo from "./assets/Logo.png";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { secoes } from "./CadastroEntradaTexto";
export default function Login() {
  const [numSecao, setNumSecao] = useState(0);
  
  function avancarSecao(){
    if(numSecao <secoes.length -1){
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao(){
    if(numSecao >0){
      setNumSecao(numSecao -1)
    }

  }
  return (
    <ScrollView flex={1}  p={5}>
      <Image source={Logo} alt="Logo Voll" alignItems="center"   />

      <Titulo>{secoes[numSecao].titulo}</Titulo>
      <Box>
        {secoes[numSecao]?.entradaTexto?.map((entrada) => 
        {
          return (
            <EntradaTexto
              label={entrada.label}
              placeholder={entrada.placeholder}
              key={entrada.id}
            />
          );
        })}
      </Box>
      <Box>
      <Text color="blue.800" > Selecione o plano</Text>


      {secoes[numSecao]?.checkbox?.map(checkbox => 
            {
            return <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
        })
      }
    </Box>

      <Botao onPress={voltarSecao} bgColor={"gray.400"} >Voltar</Botao>
      <Botao onPress={avancarSecao}  mt={4} mb={20} >Avançar</Botao>
    </ScrollView>
  );
      }
