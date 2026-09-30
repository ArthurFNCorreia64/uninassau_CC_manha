import React, {Component} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';

//criando um estilo para a view usando StyleSheet
const styles = StyleSheet.create({
  container:{
    flex:1,  //vai pegar toda a tela
  },
  box1:{
    backgroundColor:'red',
    height:250
  },
  box2:{
    backgroundColor:'green',
    height:250
  },
  box3:{
    backgroundColor:'yellow',
    height:250
  },
  box4:{
    backgroundColor:'blue',
    height:250
  }
  
})

class App extends Component{ 

  render(){
    return(
      
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>{/*Removendo a barra de rolagem */}
        <View style = {styles.box1}></View>
        <View style = {styles.box2}></View>
        <View style = {styles.box3}></View>
        <View style = {styles.box4}></View>
      </ScrollView>  
      </View>      
    )
  }
}
export default App;


