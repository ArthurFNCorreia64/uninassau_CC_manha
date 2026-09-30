import React, {Component} from "react";
import {View, Text, StyleSheet, Switch} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:50
  }, 
  text:{
    fontSize: 20,
    textAlign:'center'
  }

})
class App extends Component{ 

  constructor(props){
    super(props);
    this.state={
      status:false
  }
  }

  render(){
    return(
      <View style = {styles.container}>  
      <Switch
        /*Atualizando a state na medida que o Switch for pressionado*/
      value={this.state.status}
      onValueChange={(valorSwtich) => this.setState({status: valorSwtich})}
      thumbColor="green"
      />
      <Text style={styles.text}>
     { /*Criando um operador ternário para mostrar a palavra ativo ou inativo de 
     acordo co o Switch*/}
        {(this.state.status) ? "Ativo" : "Inativo" }
      </Text>

    
      </View>
    )
  }
}

export default App;


