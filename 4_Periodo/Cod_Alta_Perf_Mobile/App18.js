import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';

  //Para instalar: npm install @react-native-async-storage/async-storage​
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      input: '',
      nome: ''
    };

    this.gravaNome = this.gravaNome.bind(this);
  }

  //componentDidMount: Quando o componente é montado em tela vai buscar algo no banco através da chave 'nome'
  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value)=> {
      this.setState({nome: value});
    })
  }

  //componentDidUpdate: toda vez que um state é atualizado fazer algo..
  async componentDidUpdate(_, prevState){
    const nome = this.state.nome;

    if(prevState !== nome){//se o estado anterior for diferente do estado atual faça a atribuição do que foi digitado a chave nome
      await AsyncStorage.setItem('nome', nome);//por ser uma função assincrona o await faz com que fique aguardando sincronização para poder atualizar
    }
  }

  gravaNome(){
    this.setState({
      nome: this.state.input //a State nome vai receber o que for digitado dentro do input
    });
    alert('Salvo com sucesso!');
    Keyboard.dismiss(); //faz com que o teclado desapareça da tela toda vez que o botão for pressionado
  }

  render(){
    return(
      <View style={styles.container}>

      <View style={styles.viewInput}>
        <TextInput
        style={styles.input}
        value={this.state.input}  
        onChangeText={(text)=> this.setState({input: text})}//Ao ser digitado o estado da entrada será modificado
        />

        <TouchableOpacity onPress={this.gravaNome}>{/*Ao pressionar o botão a função fechar nome vai ser chamada*/} 
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nome}>{this.state.nome}</Text>

      </View>    
    );

  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 50,
    alignItems: 'center'
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 250,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao:{
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  }

  
});

