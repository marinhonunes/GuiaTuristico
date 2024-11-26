import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaAtividadesAoArLivre() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Atividades ao Ar Livre</Text>
      <Text>- Trilha das Cachoeiras: Caminhada em meio à natureza.</Text>
      <Text>- Parque da Cidade: Ótimo para piqueniques e esportes.</Text>
      <Text>- Lago Azul: Ideal para esportes aquáticos.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
