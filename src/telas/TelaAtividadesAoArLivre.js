import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaAtividadesAoArLivre() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Atividades ao Ar Livre</Text>
      <Text style={estilos.texto}>- Trilha das Cachoeiras: Caminhada em meio à natureza.</Text>
      <Text style={estilos.texto}>- Parque da Cidade: Ótimo para piqueniques e esportes.</Text>
      <Text style={estilos.texto}>- Lago Azul: Ideal para esportes aquáticos.</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff', 
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: '#ffffff', 
    marginBottom: 5,
  },
});
