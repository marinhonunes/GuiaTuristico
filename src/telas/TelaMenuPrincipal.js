import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function TelaMenuPrincipal({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Bem-vindo ao Guia Turístico!</Text>
      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('PontosHistoricos')}>
        <Image source={require('../../assets/icone-historico.png')} style={estilos.icone} />
        <Text>Pontos Históricos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Restaurantes')}>
        <Image source={require('../../assets/icone-restaurantes.png')} style={estilos.icone} />
        <Text>Restaurantes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('AtividadesAoArLivre')}>
        <Image source={require('../../assets/icone-atividades.png')} style={estilos.icone} />
        <Text>Atividades ao Ar Livre</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  botao: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  icone: { width: 50, height: 50, marginRight: 10 },
});
