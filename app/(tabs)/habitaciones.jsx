import { Image, ImageBackground, ScrollView, StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export default function habitaciones() {
  return (
    <ScrollView>
       <Main>
         <Titulo>Habitaciones</Titulo>
         <ContenedorIconos>
           <IconoCaracteristica/>
           <IconoCaracteristica/>
           <IconoCaracteristica/>
           <IconoCaracteristica/>
         </ContenedorIconos>
         {/* habitacion */}
         <ContenedorHabitacion>
          <NombreHabitacion>Habitacion Pareja</NombreHabitacion>
          <ImagenHabitacion source={require("../../assets/images/habitacion1.jpg")}/>
          <SubtituloHabitacion>Descripción</SubtituloHabitacion>
          <DescripcionHabitacion>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, eum assumenda nulla eaque velit itaque id aperiam! Iusto  dolorum facilis deleniti veniam perspiciatis deserunt, ullam, earum magnam nihil asperiores maxime.
          </DescripcionHabitacion>
          <View>
           <BotonReservar>
             <BotonReservarTexto>Reservar</BotonReservarTexto>
           </BotonReservar>
          </View>
         </ContenedorHabitacion>
         {/* habitacion */}
         <ContenedorHabitacion>
          <NombreHabitacion>Habitacion Pareja</NombreHabitacion>
          <ImagenHabitacion source={require("../../assets/images/habitacion1.jpg")}/>
          <SubtituloHabitacion>Descripción</SubtituloHabitacion>
          <DescripcionHabitacion>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, eum assumenda nulla eaque velit itaque id aperiam! Iusto  dolorum facilis deleniti veniam perspiciatis deserunt, ullam, earum magnam nihil asperiores maxime.
          </DescripcionHabitacion>
          <View>
           <BotonReservar>
             <BotonReservarTexto>Reservar</BotonReservarTexto>
           </BotonReservar>
          </View>
         </ContenedorHabitacion>
         {/* habitacion */}
         <ContenedorHabitacion>
          <NombreHabitacion>Habitacion Pareja</NombreHabitacion>
          <ImagenHabitacion source={require("../../assets/images/habitacion1.jpg")}/>
          <SubtituloHabitacion>Descripción</SubtituloHabitacion>
          <DescripcionHabitacion>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, eum assumenda nulla eaque velit itaque id aperiam! Iusto  dolorum facilis deleniti veniam perspiciatis deserunt, ullam, earum magnam nihil asperiores maxime.
          </DescripcionHabitacion>
          <View>
           <BotonReservar>
             <BotonReservarTexto>Reservar</BotonReservarTexto>
           </BotonReservar>
          </View>
         </ContenedorHabitacion>
         {/* habitacion */}
         <ContenedorHabitacion>
          <NombreHabitacion>Habitacion Pareja</NombreHabitacion>
          <ImagenHabitacion source={require("../../assets/images/habitacion1.jpg")}/>
          <SubtituloHabitacion>Descripción</SubtituloHabitacion>
          <DescripcionHabitacion>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, eum assumenda nulla eaque velit itaque id aperiam! Iusto  dolorum facilis deleniti veniam perspiciatis deserunt, ullam, earum magnam nihil asperiores maxime.
          </DescripcionHabitacion>
          <View>
           <BotonReservar>
             <BotonReservarTexto>Reservar</BotonReservarTexto>
           </BotonReservar>
          </View>
         </ContenedorHabitacion>
         {/* habitacion */}
         <ContenedorHabitacion>
          <NombreHabitacion>Habitacion Pareja</NombreHabitacion>
          <ImagenHabitacion source={require("../../assets/images/habitacion1.jpg")}/>
          <SubtituloHabitacion>Descripción</SubtituloHabitacion>
          <DescripcionHabitacion>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, eum assumenda nulla eaque velit itaque id aperiam! Iusto  dolorum facilis deleniti veniam perspiciatis deserunt, ullam, earum magnam nihil asperiores maxime.
          </DescripcionHabitacion>
          <View>
           <BotonReservar>
             <BotonReservarTexto>Reservar</BotonReservarTexto>
           </BotonReservar>
          </View>
         </ContenedorHabitacion>
         {/* habitacion */}
         <ContenedorHabitacion>
          <NombreHabitacion>Habitacion Pareja</NombreHabitacion>
          <ImagenHabitacion source={require("../../assets/images/habitacion1.jpg")}/>
          <SubtituloHabitacion>Descripción</SubtituloHabitacion>
          <DescripcionHabitacion>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, eum assumenda nulla eaque velit itaque id aperiam! Iusto  dolorum facilis deleniti veniam perspiciatis deserunt, ullam, earum magnam nihil asperiores maxime.
          </DescripcionHabitacion>
          <View>
           <BotonReservar>
             <BotonReservarTexto>Reservar</BotonReservarTexto>
           </BotonReservar>
          </View>
         </ContenedorHabitacion>
       </Main>
      </ScrollView>
  );
}

const Main = styled.View`
 height: 100%;
 background-color: #11112e;
`
const Titulo = styled.Text`
 color: white;
 margin-top: 45px;
 text-align: center;
 font-size: 35px;
`
const ContenedorIconos = styled.View`
 flex-direction: row;
 justify-content: space-around;
 margin-top: 30px;
`
const IconoCaracteristica = styled.Image`
 background-color: white;
 width: 50px;
 height: 50px;
 border-radius: 10px;
`
const ContenedorHabitacion = styled.View`
 width: 90%;
 margin: 20px auto;
 background-color: transparent;
 height: 390px;
 border-radius: 20px;
 border: 2px solid #152661;

`
const NombreHabitacion = styled.Text`
 background-color: transparent;
 text-align: center;
 color: white;
 font-size: 18px;
 margin: 10px 0;
`
const ImagenHabitacion = styled.Image`
 width: 100%;
 height: 150px;
 position: center;
`
const SubtituloHabitacion = styled.Text`
 color: #184780;
 margin-left: 20px;
 margin-top: 10px;
 font-size: 20px;
 font-weight: bold;
`
const DescripcionHabitacion = styled.Text`
 padding: 5px 10px;
 font-size: 13px;
 font-weight: 500;
 color: white;
`
const BotonReservar = styled.TouchableOpacity`
 width: 70%;
 background-color: white;
 margin: 10px auto;
 border-radius: 5px;
 padding: 10px 0;
`
const BotonReservarTexto = styled.Text`
 text-align: center;
`