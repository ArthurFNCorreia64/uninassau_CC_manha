import React, {Component} from "react";
import {View, Text} from 'react-native';


class App extends Component{
  render(){
    return(
        <View style={{flex:1, 
          flexDirection:'row', 
          alignItems:'baseline', 
          justifyContent:'center'
        }}>
          <View style={{width:50, height:50, backgroundColor:'red'}}></View>
          <View style={{width:50, height:50, backgroundColor:'#98FB98'}}></View>
          <View style={{width:50, height:50, backgroundColor:'#2F4F4F'}}></View>          
        </View>
    )
  }
}
export default App;


