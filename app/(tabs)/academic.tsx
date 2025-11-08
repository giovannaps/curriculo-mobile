import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Academic() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>

      <View style={styles.item}>
        <Image
          source={require("../../assets/academic-icon.png")}
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.course}>Sistemas Para Internet{"\n"}UNICAP (2024.1 - 2026.1)</Text>
    
        </View>
      </View>

      <View style={styles.item}>
        <Image
          source={require("../../assets/academic-icon.png")}
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.course}>Engenharia da Computação{"\n"}UPE (2024.2 - 2029.2)</Text>
         
        </View>
      </View>

      <View style={styles.item}>
        <Image
          source={require("../../assets/livro-icon.png")}
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.course}>Bolsa de Iniciação Acadêmica {"\n"}BIA</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#081E1A",
    padding: 20,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#F01D8D",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 15,
  },
  textContainer: {
    flexShrink: 1,
  },
  course: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  school: {
    fontSize: 14,
    color: "#CCCCCC",
  },
});
