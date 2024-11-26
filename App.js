import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaMenuPrincipal from './src/telas/TelaMenuPrincipal.js';
import TelaPontosHistoricos from './src/telas/TelaPontosHistoricos.js';
import TelaRestaurantes from './src/telas/TelaRestaurantes.js';
import TelaAtividadesAoArLivre from './src/telas/TelaAtividadesAoArLivre.js';

const PilhaNavegacao = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PilhaNavegacao.Navigator initialRouteName="MenuPrincipal">
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
