import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaRestaurantes() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Restaurantes Recomendados</Text>
      <Text>- La Trattoria: Culinária italiana autêntica, $$$.</Text>
      <Text>- Sabor Mineiro: Comida caseira com toque mineiro, $$.</Text>
      <Text>- Café Gourmet: Cafés e sobremesas deliciosas, $.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
