import React, {Component} from "react";
import {View, Text} from 'react-native';

class App extends Component{
  render(){
    const nome = 'Victor Sotero';
    return(
        <View>
          <Text>Olá, galera! </Text> 
          <Text style={{color : 'red', fontSize: 18, margin:15}}>
            Olá, galera! 
          </Text>      
          <Text style={{color : 'blue', fontSize: 20, margin:25}}>{nome}</Text>  
          
           
        </View>
    )
  }
}
export default App;