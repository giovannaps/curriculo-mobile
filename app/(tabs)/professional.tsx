import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function ExperienciaProfissional() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Experiência Profissional/Skills</Text>

      <View style={styles.item}>
        <Image
          source={require("../../assets/java.png")} 
          style={styles.icon}
        />
        <Text style={styles.text}>
          Java + Spring Boot
        </Text>
      </View>

      <View style={styles.item}>
        <Image
          source={require("../../assets/data-storage.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>
         SQL / PostgreSQL
        </Text>
      </View>

      <View style={styles.item}>
        <Image
          source={require("../../assets/robot.png")} 
          style={styles.icon}
        />
        <Text style={styles.text}>
          Hackathon Robô NAO - 2° lugar
        </Text>
      </View>


 <View style={styles.item}>
        <Image
          source={require("../../assets/python.png")} 
          style={styles.icon}
        />
        <Text style={styles.text}>
          Análise de dados / Python 
        </Text>
      </View>

      <View style={styles.item}>
        <Image
          source={require("../../assets/game.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>
          Equipe (CNTRL) - Voltada para jogos 
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
    justifyContent: "flex-start", 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F01D8D",
    marginBottom: 12,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

