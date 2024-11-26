import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaPontosHistoricos() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Pontos Históricos</Text>
      <Text>- Praça Central: Um marco histórico da cidade.</Text>
      <Text>- Museu Cultural: Repleto de artefatos históricos.</Text>
      <Text>- Igreja Matriz: Construída no século XVIII.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
