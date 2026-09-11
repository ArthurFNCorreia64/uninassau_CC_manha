import React, {Component} from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

//criando uma constante que vai receber o grupo de estilos
const estilos = StyleSheet.create({
  area:{
    marginTop: 80
  },
  textoPrincipal:{
    fontSize:25,
    color:'#FF0000'  
  },
  alinhaTexto:{
    textAlign:'center'
  }

})

class App extends Component{
  render(){
    return(
      //utilizando a constante(grupo de estilos)
        <View style={estilos.area}>
          <Text style={estilos.textoPrincipal}>Eu sou um texto 1</Text>
          <Text style={estilos.alinhaTexto}>Eu sou um texto 2</Text>
          <Text style={estilos.alinhaTexto}>Eu sou um texto 3</Text>     
        </View>
    )
  }
}

export default App;

