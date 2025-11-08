import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Projects() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Projetos</Text>

      <View style={styles.item}>
        <Image
          source={require("../../assets/juryscan.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>
          JuryScan{"\n"}Site para análise de documentos jurídicos
        </Text>
      </View>

      <View style={styles.item}>
        <Image
          source={require("../../assets/freelance.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>
          Trampaí{"\n"}App para trabalhos freelance em Recife
        </Text>
      </View>

      <View style={styles.item}>
        <Image
          source={require("../../assets/game.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>
          Minijogo de aventura{"\n"}Estilo Mario
        </Text>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#081E1A", 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F01D8D", 
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",       
    alignItems: "center",      
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,            
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",           
    flexShrink: 1,              
  },
});

