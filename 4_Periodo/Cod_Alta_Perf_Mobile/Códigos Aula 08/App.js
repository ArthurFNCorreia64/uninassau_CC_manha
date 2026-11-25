import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { getDatabase, ref, onValue, push, remove, update } from 'firebase/database';
import { database } from './firebaseConfig';

export default function App() {
  const [nome, setNome] = useState('');
  const [itens, setItens] = useState([]);
  const [idAtualizacao, setIdAtualizacao] = useState(null);

  useEffect(() => {
    const itensRef = ref(database, 'itens');
    onValue(itensRef, (snapshot) => {
      const dados = snapshot.val();
      const listaItens = dados ? Object.keys(dados).map(key => ({
        id: key,
        ...dados[key]
      })) : [];
      setItens(listaItens);
    });
  }, []);

  const adicionarItem = () => {//função adicionar intens
    const itensRef = ref(database, 'itens'); //referencia para o lugar no banco onde desejamos salvar os itens
    if (idAtualizacao) {
      const itemRef = ref(database, `itens/${idAtualizacao}`);
      update(itemRef, { nome });
      setIdAtualizacao(null);//Se setIdAtualizacao for null, estamos adicionando um novo item; caso contrário, estamos 
      //atualizando um item existente.
    } else {
      push(itensRef, { nome });
    }
    setNome('');
  };

  const apagarItem = (id) => {
    const itemRef = ref(database, `itens/${id}`);
    remove(itemRef);
  };
/*A função editarItem carrega o texto do item no campo de entrada e define setIdAtualizacao para o ID do item, 
permitindo que a próxima submissão do formulário atualize o item existente.*/
  const editarItem = (item) => {
    setNome(item.nome);
    setIdAtualizacao(item.id);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Demo de Banco de Dados em Tempo Real</Text>
      <TextInput
        style={estilos.entrada}
        placeholder="Adicionar ou Atualizar Item"
        value={nome}
        onChangeText={setNome}
      />
      <Button title={idAtualizacao ? "Atualizar" : "Adicionar"} onPress={adicionarItem} />
      <View style={estilos.lista}>
        {itens.map(item => (//expressão  utilizada para transformar a lista de itens em elementos de interface
        // (UI) que podem ser renderizados na tela.
          <View key={item.id} style={estilos.itemLista}>
            <Text>{item.nome}</Text>
            <TouchableOpacity onPress={() => editarItem(item)}>
              <Text style={estilos.botaoEditar}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => apagarItem(item.id)}>
              <Text style={estilos.botaoApagar}>Apagar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  entrada: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '100%',
  },
  lista: {
    marginTop: 20,
    width: '100%',
  },
  itemLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  botaoEditar: {
    color: 'blue',
    marginRight: 10,
  },
  botaoApagar: {
    color: 'red',
  },
});
