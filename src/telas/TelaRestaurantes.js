import React from "react";
import { ScrollView, Text, Image, StyleSheet } from "react-native";

export default function TelaRestaurantes() {
  return (
    <ScrollView style={estilos.container}>
      <Text style={estilos.titulo}>RESTAURANTES</Text>

      <Text style={estilos.titulo}>A FIGUEIRA</Text>
      <Image
        source={require("../../assets/FIGUEIRA.jpg")}
        style={estilos.principal}
      />
      <Text style={estilos.texto}>
        🍻🍖🔥Restaurante e Petiscaria "A FIGUEIRA", A árvore centenária em
        IEPÊ-SP que dá o nome ao restaurante 🌳
      </Text>

      <Text style={estilos.titulo}>PESQUEIRO PAIANOS</Text>
      <Image
        source={require("../../assets/pesqueiro.jpg")}
        style={estilos.principal}
      />
      <Text style={estilos.texto}>
        Pesqueiro e Restaurante Diversão e boa comida Porções 🍤 Frango caipira
        🍗 Porco no tacho🥘 Cerveja gelada 🍺 Suco natural 🍹 Entre Nantes e
        Iepê 📍
      </Text>

      <Text style={estilos.titulo}>RAIZ MUSIC BAR</Text>
      <Image
        source={require("../../assets/RANCHOBAR.jpg")}
        style={estilos.principal}
      />
      <Text style={estilos.texto}>
        RESTAURANTE PUP - Drinks/Cervejas/Porções
      </Text>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
  texto: {
    fontSize: 16,
    color: "#e0e0e0",
    marginBottom: 50,
    marginTop: 50,
    textAlign: "justify",
  },
  principal: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 200,
  },
});
