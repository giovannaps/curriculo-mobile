import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giovanna Lima</Text>
      <Text style={styles.subtitle}>
        Seja bem-vindo ao meu Portfólio!
      </Text>
      <Text style={styles.text}>
         Apaixonada por tecnologia!{"\n"}
        Foco em Back-end, Data Analysis e Game Development.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#081E1A", 
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#F01D8D",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 16,
    textAlign: "center",
    lineHeight: 24, 
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
});


