import React, {Component} from "react";
import {View, Text, Image} from 'react-native';

class App extends Component{
  render(){
    return(//chamando o componente Uninassau e atribuindo novas props
        <View>
          <Text>Olá, galera! </Text>
          <Senai largura={300} altura={300}/>    
          <Senai largura={200} altura={100}/>            
        </View>
    )
  }
}
export default App;

class Senai extends Component{//criando seu próprio componente
  render(){
    const imagem = 'https://logo.uninassau.edu.br/img/png/uninassau_share.png';
    return(
      <Image
      source = {{ uri: imagem}}//é obrigatório colocar largura e altura
      style={{width: this.props.largura, height: this.props.altura}}
      />  
    )
    }
}
