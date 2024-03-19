import React from 'react';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import {NativeBaseProvider, StatusBar, Text}from 'native-base';
import { temas } from './src/estilos/temas';

export default function App() {
  return ( <NativeBaseProvider theme={temas}>
    <StatusBar backgroundColor={temas.colors.blue[800]}  />
<Cadastro></Cadastro>
  </NativeBaseProvider>
  ); 
}



