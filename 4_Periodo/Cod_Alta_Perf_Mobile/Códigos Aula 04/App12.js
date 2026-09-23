import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

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
  constructor(props){//o construtor de states vai inicializar o state de input em branco
    super(props);
    this.state={
      input:''
    }
    //o bind faz com que a função criada tenha acesso a todo o props
    this.entrar = this.entrar.bind(this);
  }
  entrar(){/* Caso o usuário não digite nada e pressione o botão vai ser solicitado que
  ele digite seu nome. */
    if (this.state.input===''){
      alert('Digite seu nome!');
      return;
    }//Ao ser pressionado e fornecido um nome, a mensagem abaixo vai aparecer.
    this.setState({nome:'Bem vindo, ' + this.state.input});

  }

  render(){
    return(
      
      <View style={styles.container}>
        <Text></Text>
        <Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"//é o que vai aparecer dentro do campo
          onChangeText={(texto) => this.setState({input: texto})}/*Quando digitamos algo vai ser
          armazenado no State input e ao pressionar o botão, chamamos a função entrar*/
        />
        <Button title="Acessar" onPress={this.entrar}/>
        <Text style={styles.texto}>{this.state.nome}</Text>
        
      </View>
    )
  }
}
export default App;


