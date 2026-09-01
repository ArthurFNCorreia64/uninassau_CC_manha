import React, {Component} from "react";
import {View, Text, Button} from 'react-native';

class App extends Component{
  constructor(props){//construtor de states
    super(props);//acesso total as props
    this.state = {
      nome:'Victor' //estado inicial
    };
    //permite que a função consiga acessar todas as props
    this.mudar = this.mudar.bind(this);
  
  }
  mudar(){//função para substituir o texto
    this.setState({
      nome: 'Sotero' //estado final
    })
  }
  render(){
    return(
        <View>
         
          {/* acesando o state nome e criando um botão que ao ser pressionado
          vai modificar o texto  */}
          <Text style={{color : 'red', fontSize: 18, margin:15}}>{this.state.nome} </Text>
          <Button title="Mudar" onPress={this.mudar}/>
        </View>
    )
  }
}
export default App;

