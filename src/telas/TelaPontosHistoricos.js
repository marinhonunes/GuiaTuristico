import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaPontosHistoricos() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Pontos Históricos</Text>
      <Text style={estilos.texto}>- Praça Central: Um marco histórico da cidade.</Text>
      <Text style={estilos.texto}>- Museu Cultural: Repleto de artefatos históricos.</Text>
      <Text style={estilos.texto}>- Igreja Matriz: Construída no século XVIII.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', 
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    color: '#e0e0e0',
    marginBottom: 10,
  },
});
