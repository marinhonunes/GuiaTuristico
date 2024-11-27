import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaRestaurantes() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Restaurantes Recomendados</Text>
      <Text style={estilos.texto}>- La Trattoria: Culinária italiana autêntica, $$$.</Text>
      <Text style={estilos.texto}>- Sabor Mineiro: Comida caseira com toque mineiro, $$.</Text>
      <Text style={estilos.texto}>- Café Gourmet: Cafés e sobremesas deliciosas, $.</Text>
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
