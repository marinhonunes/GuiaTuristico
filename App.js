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
    background: '#121212', 
    card: '#1f1f1f',
    text: '#ffffff', 
    border: '#272727',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={TemaEscuro}>
      <PilhaNavegacao.Navigator
        initialRouteName="MenuPrincipal"
        screenOptions={{
          headerStyle: { backgroundColor: '#1f1f1f' }, 
          headerTintColor: '#ffffff',
          headerTitleAlign: 'center', 
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  text: {
    color: '#ffffff', 
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
