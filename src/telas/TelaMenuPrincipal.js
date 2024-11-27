import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function TelaMenuPrincipal({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Bem-vindo a cidade de Iepê!</Text>

      <Image source={require('../../assets/cidade.jpg')} style={estilos.principal} />
      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('PontosHistoricos')}>
        <Image source={require('../../assets/icone-historico.png')} style={estilos.icone} />
        <Text style={estilos.textoBotao}>Pontos Históricos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Restaurantes')}>
        <Image source={require('../../assets/icone-restaurantes.png')} style={estilos.icone} />
        <Text style={estilos.textoBotao}>Restaurantes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('AtividadesAoArLivre')}>
        <Image source={require('../../assets/icone-atividades.png')} style={estilos.icone} />
        <Text style={estilos.textoBotao}>Atividades ao Ar Livre</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', 
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
  },
  textoBotao: {
    fontSize: 16,
    color: '#ffffff', 
    textAlign: 'center',
  },
  icone: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  principal: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 200,
  }
});
