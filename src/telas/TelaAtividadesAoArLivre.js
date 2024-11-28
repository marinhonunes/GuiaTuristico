import React from "react";
import { ScrollView, Text, Image, StyleSheet } from "react-native";

export default function TelaAtividadesAoArLivre() {
  return (
    <ScrollView style={estilos.container}>
      <Text style={estilos.titulo}>OPÇÕES AO AR LIVRE</Text>

      <Text style={estilos.titulo}>CACHOEIRA</Text>
      <Image
        source={require("../../assets/CACHOEIRA.jpg")}
        style={estilos.principal}
      />
      <Text style={estilos.texto}>
        Dias que os turistas pode ir para usufruir Seg, ter, quarta, sexta e
        domingo . Quinta e sábado é uso exclusivo do hotel . Só permitirmos o
        máximo de 30 pessoas no local ,por conta da aglomeração. Não
        recomendamos entrar na água, por que a queda é grande e água muito
        forte. É apenas para visitação. Todo lixo levado deve ser trazido de
        volta. Não permitimos churrasco. Não permitimos que pulem da parte de
        cima da cachoeira de forma alguma. Fotógrafos devem agendar na recepção
        do hotel para usar o espaço.
      </Text>

      <Text style={estilos.titulo}>HOTEL FAZENDA CLIV SOL</Text>
      <Image
        source={require("../../assets/CLIVSOL.jpeg")}
        style={estilos.principal}
      />
      <Text style={estilos.texto}>
        O Hotel Fazenda Cliv Sol oferece infraestrutura completa para cada tipo
        de hospedagem. As acomodações foram idealizadas para proporcionar
        aconchego e conforto nos momentos de descanso, embalados por inigualável
        orquestra de pássaros e sons da natureza. Temos 16 suites localizadas em
        uma típica área rural do Oeste Paulista, muito charme, conforto e
        qualidade de atendimento para uma vivência da vida no campo em sua
        hospedagem.
      </Text>

      <Text style={estilos.titulo}>POUSADA DONA NAIR</Text>
      <Image
        source={require("../../assets/DONANAIR.jpg")}
        style={estilos.principal}
      />
      <Text style={estilos.texto}>
        Instalada em uma ampla área verde. Casas com uma infra-estrutura
        completa. Um lugar maravilhoso onde você e sua família poderão desfrutar
        de momentos especiais. Uma excelente opção para suas férias ou seu final
        de semana.
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
