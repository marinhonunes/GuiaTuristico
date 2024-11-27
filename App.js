import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import TelaMenuPrincipal from './src/telas/TelaMenuPrincipal.js';
import TelaPontosHistoricos from './src/telas/TelaPontosHistoricos.js';
import TelaRestaurantes from './src/telas/TelaRestaurantes.js';
import TelaAtividadesAoArLivre from './src/telas/TelaAtividadesAoArLivre.js';

const PilhaNavegacao = createStackNavigator();

const TemaEscuro = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#121212', // Fundo escuro
    card: '#1f1f1f', // Fundo do cabeçalho
    text: '#ffffff', // Texto claro
    border: '#272727',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={TemaEscuro}>
      <PilhaNavegacao.Navigator
        initialRouteName="MenuPrincipal"
        screenOptions={{
          headerStyle: { backgroundColor: '#1f1f1f' }, // Fundo do cabeçalho
          headerTintColor: '#ffffff', // Texto do cabeçalho
          headerTitleAlign: 'center', // Alinhamento central
        }}
      >
        <PilhaNavegacao.Screen
          name="MenuPrincipal"
          component={TelaMenuPrincipal}
          options={{ title: 'Guia Turístico' }}
        />
        <PilhaNavegacao.Screen
          name="PontosHistoricos"
          component={TelaPontosHistoricos}
          options={{ title: 'Pontos Históricos' }}
        />
        <PilhaNavegacao.Screen
          name="Restaurantes"
          component={TelaRestaurantes}
          options={{ title: 'Restaurantes Recomendados' }}
        />
        <PilhaNavegacao.Screen
          name="AtividadesAoArLivre"
          component={TelaAtividadesAoArLivre}
          options={{ title: 'Atividades ao Ar Livre' }}
        />
      </PilhaNavegacao.Navigator>
    </NavigationContainer>
  );
}

// Estilos globais
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fundo escuro
    alignItems: 'center', // Centralizado horizontalmente
    justifyContent: 'center', // Centralizado verticalmente
  },
  text: {
    color: '#ffffff', // Texto branco
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    backgroundColor: '#1f1f1f',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
});
