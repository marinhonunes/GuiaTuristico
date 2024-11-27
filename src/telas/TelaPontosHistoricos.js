import React from "react";
import { Text, StyleSheet, Image, ScrollView } from "react-native";

export default function TelaPontosHistoricos() {
  return (
    <ScrollView style={estilos.container}>
      <Text style={estilos.titulo}>Pontos Históricos</Text>

      <Text style={estilos.titulo}>PRAÇA CENTRAL</Text>
      <Image
        source={require("../../assets/pracaiepe.jpg")}
        style={estilos.principal}
      />
      <Text style={estilos.texto}>
        A Praça Central da cidade recebe nesta semana uma decoração
        confeccionada a partir de materiais recicláveis, como garrafas pet e
        pneus. O local ganha ainda luzes para celebrar a data, graças ao
        trabalho de funcionários e voluntários.
      </Text>

      <Text style={estilos.titulo}>MAI - MUSEU DE ARQUEOLOGIA DE IEPÊ</Text>
      <Image
        source={require("../../assets/MUSEU.jpg")}
        style={estilos.principal}
      />
      <Text style={estilos.texto}>
        O acervo Guarani exposto no museu é composto por mais de 100 peças,
        entre vasilhas de cerâmica inteiras, fragmentos de vasilhas cerâmicas,
        pedras lascadas, pedras polidas, vasilha esculpida em pedra, mãos de
        pilão, lâminas de machado, fragmentos de lâmina de machado, boleadeiras,
        virotes, peça polida em osso, tembetás e urnas funerárias, entra as
        quais está uma das maiores urnas funerárias indígena Guarani do Brasil,
        com 1,16 cm de diâmetro. Entre o acervo dos sítios localizados em Iepê,
        que conta com aproximadamente 40 mil peças guardadas em Reserva Técnica,
        estão alguns artefatos procedentes de áreas pertencentes aos municípios
        de Nantes, Taciba, Campinas, Luiziânia e também de outras localidades. O
        Museu desenvolve atividades sobre a temática indígena em Escolas
        Estaduais, Municipais e Privadas de toda a região de Assis, Presidente
        Prudente e também de outras regiões.
      </Text>

      <Text style={estilos.titulo}>
        Igreja Matriz: Paróquia São João Batista Iepê-SP
      </Text>
      <Image
        source={require("../../assets/igreja.jpg")}
        style={estilos.principal}
      />
      <Text style={estilos.texto}>
        Em meados da década de 1930, tem início um nova empreitada: elevar a
        Capela de Iepê à condição de Paróquia. Para tanto, foi constituída uma
        comissão que muito batalhou para ver esse sonho realizado. Finalmente,
        aos 27/09/1937 foi criada em Iepê a Paróquia São João Batista, cuja
        denominação foi sugerida pelo Sr. André Garbosa. Sua instalação
        aconteceu no dia 03 de outubro, quando chegou a cavalo, vindo de
        Maracaí, o seu primeiro pároco, o Padre Francisco Xavier Penzkofer, que
        tomou posse às 8h00 daquele mesmo dia, sob uma forte tempestade que caía
        sobre a cidade. Recém chegado de sua Alemanha natal, mal falando e
        entendendo a língua portuguesa, desconhecendo os hábitos e costumes
        locais, tão diversos de sua terra longínqua, Padre Francisco vem para
        cumprir o ideal jurado na profissão de sua fé: “Servir a Deus e ao
        próximo, por amor a ambos.”
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
