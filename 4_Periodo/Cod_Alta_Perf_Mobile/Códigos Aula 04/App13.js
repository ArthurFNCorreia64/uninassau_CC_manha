import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,    
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
     borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:'#6B8E23'
  },
  img:{
    width: 200,
    height:200,
    borderRadius: 25
  },  
  textoFrase:{
    fontSize:20,
    color:'#6B8E23',
    margin: 30,
    fontStyle:'italic',
    textAlign:'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth:2,
    borderColor:'#6B8E23',
    borderRadius: 25
  },
  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:'#6B8E23'
  }  
})
class App extends Component{  
  constructor(props){
    super(props);
    this.state ={
      textoFrase:'',
      img: require("../../src/jaca.jpg")
    }
    this.penaJaca = this.penaJaca.bind(this)
    this.frases = ['Tem duas coisas que quem tem não diz: amante fora de casa e dinheiro dentro do bolso.',
      'Acredite no impossível, mas nunca pense que vai passar pela vida sem levar chifre.',
      'Dinheiro nem sempre é bom, às vezes ele é ótimo e outras vezes ele é maravilhoso.',
      'Bebe igual uma doida, passa mal e a culpa é da azeitona.',
      'Tem gente que limpa melhor o nariz do que a própria casa.',
      'A crise tá tão grande, que até elevador tá subindo de escada.',
      'Nível de preguiça: puxar a roupa do varal sem tirar os pregadores.',
      'Nove em cada dez homens casados consideram que as mulheres têm sempre razão. O décimo desapareceu misteriosamente.',
      'Em casa de perdedor, só o que vence são as contas.',
      'Se fosse fácil se chamaria miojo, não relacionamento!',
      'Não adianta ter o controle da situação, se você perdeu as pilhas.']
  }

  penaJaca(){
    //gerando um numero aleatório levando como base a quantidade de frases dentro do array
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    //Atualizando o texto e a imagem no app
    this.setState({
      textoFrase:' " ' + this.frases[numeroAleatorio ] + ' " ',//concatenando as aspas com a frase escolhida
      img: require("../../src/penajaca.jpg")// mudando a imagem
    })

  }

  render(){
    return(      
      <View style={styles.container}>
        <Image
          source = {this.state.img}
          style={styles.img}
        />      
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>{/*ao clicar no botão vai buscar o texto
        no array*/}
        {/*Ao pressionar o botão vai ser acionado a função penaJaca*/}
        <TouchableOpacity style={styles.botao} onPress={this.penaJaca}> 
          <View style={styles.btnArea}>{/*Área do botão*/}
            <Text style={styles.btnTexto}>Pise na jaca.</Text>{/*Texto dentro do botão*/}
          </View>
        </TouchableOpacity>  
      </View>
    )
  }
}
export default App;


