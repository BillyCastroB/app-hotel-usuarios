import { Image, ImageBackground, StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

import { router } from 'expo-router';
export default function index() {
  return (
    <Fondo
      source={require('../../assets/images/fondoIndex.jpg')}
    >
      <Main>
        <HeaderInicio>
          <Bienvenido>
            Bienvenido
          </Bienvenido>
          <Titulo>
            Hotel Palomar
          </Titulo>
          <Descripcion>
            Bienvenidos a la aplicación El Palomar
          </Descripcion>
        </HeaderInicio>
        <Presionable onPress={()=>router.replace("/habitaciones")}>
          <BotonIniciar>
              Iniciar
          </BotonIniciar>
        </Presionable>
      </Main>

    </Fondo>
  );
}

const Main = styled.View`
  justify-content: space-between;
  height: 90%;
`
const HeaderInicio = styled.View`
  margin-top: 70px;
`
const Bienvenido = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-top: 10px;
`
const Titulo = styled.Text`
  color: #b6b6b6;
  font-size: 50px;
  font-weight: bold;
`
const Descripcion = styled.Text`
margin-top: 25px;
  color: #0f0f0f;
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
`
const Fondo = styled.ImageBackground`
  height: 100%;
`
const BotonIniciar = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
  text-align: center;
`
const Presionable = styled.TouchableOpacity`
  width: 80%;
  margin: 0 auto;
  background-color: #660f0f;
  border-radius: 20px;
`