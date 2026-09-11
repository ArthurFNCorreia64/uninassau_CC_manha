import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';

//criando um estilo para a view usando StyleSheet
const styles = StyleSheet.create({
  container:{
    flex:1,  //vai pegar toda a tela
  },
  //criando um grupo de estilos para o textinput
  input:{
    height:45,
    borderWidth: 1,
    borderColor:'#222',
    margin:10,
    fontSize:20,
    padding:10 //* corresponde ao espaçamento no inicio do campo de texto
  },
  texto:{
    textAlign:'center',
    fontSize:25
  }
})

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      nome:''
    }
    this.mudaNome = this.mudaNome.bind(this);//o bind faz com que a função criada
    //tenha acesso a todo o props    
  }
  //criando a função mudaNome com uma estrutura condicional
  mudaNome(texto){ 
    if (texto.length > 0){
      this.setState({nome:'Bem vindo, ' + texto + '!'})
    }else{
      this.setState({nome:''})
    }
  }
  render(){
    return(
      
      <View style={styles.container}>
        <Text></Text>
        <Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"//é o que vai aparecer dentro do campo
          onChangeText={this.mudaNome}//função a ser chamada toda vez que 
          //digitarmos algo no campo.Modifica o texto.
        />
        <Text style={styles.texto}>{this.state.nome}</Text>
        
      </View>
    )
  }
}
export default App;


