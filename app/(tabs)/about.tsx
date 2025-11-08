import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>
        Este aplicativo foi desenvolvido em React Native com Expo e Expo Router.{"\n"}
        Utiliza TypeScript, componentes funcionais e ícones da biblioteca Ionicons.
      </Text>
      <Text style={styles.text}>
         Funcionalidade extra: MiniGame para gerar emojis aleatórios.
      </Text>
      <Text style={styles.text}>
         Tecnologias: React Native, Expo, Expo Router, TypeScript.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center", 
    alignItems: "center",     
    padding: 20,
    backgroundColor: "#081E1A",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#F01D8D",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 8,
    textAlign: "center",
  },
});
