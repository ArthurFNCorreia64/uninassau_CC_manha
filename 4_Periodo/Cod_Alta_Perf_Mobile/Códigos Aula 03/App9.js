import React, {Component} from "react";
import {View, Text, Button} from 'react-native';


class App extends Component{
  render(){
    return(
        <View style={{flex:1, backgroundColor:'#222'}}>
          <View style={{height:65, backgroundColor:'#2F4F4F'}}></View>{/*colocando a altura 65 */}
          <View style={{flex:1, backgroundColor:'#98FB98'}}></View>
          <View style={{height:65, backgroundColor:'#2F4F4F'}}></View>          
        </View>
    )
  }
}
export default App;

