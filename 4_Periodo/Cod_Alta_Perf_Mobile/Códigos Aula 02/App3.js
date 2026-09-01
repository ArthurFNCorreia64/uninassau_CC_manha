import React, {Component} from "react";
import {View, Text} from 'react-native';

class App extends Component{
  render(){
    
    return(
        <View>
          <Text>Olá, galera! </Text> 
          <Text style={{color : 'red', fontSize: 18, margin:15}}>
            Olá, galera! 
          </Text>          
        </View>
    )
  }
}
export default App;