import React, { Component } from 'react';
import { View, StyleSheet, Modal, Button, Text } from 'react-native';

export default class App extends Component {
//importando os componentes e criando o construtor de props com o status de visibilidade false
  constructor(props){
    super(props);
    this.state = {isVisible: false};
  }

  render () {
    return(
      <View style={styles.container}>
        <Modal
          animationType={'slide'}// experimente mudar para fade
          transparent={false} //não renderizar o modal sob um plano de fundo transparente
          visible={this.state.isVisible}
          onRequestClose={() => { //detecta se o usuário clicou no botão de voltar do próprio Android
            this.setState({ isVisible: false });
          }}
        >

          <View style={styles.modal}>
            <Text style={styles.text}>MODAL ESTÁ ABERTO!</Text>
            <Button
              title="Clique para o Modal ser fechado"
              onPress={() => {
                this.setState({ isVisible: false });
                
              }}
            />
          </View>
        </Modal>

        <Button
          title="Clique para o Modal ser aberto!"
          onPress={() => {
            this.setState({ isVisible: true });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 100,
  },
  text: {
    color: '#000000',
    marginTop: 10,
  },
});