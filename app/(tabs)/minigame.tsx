import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

const EMOJIS = ["🎮", "🚀", "👾", "💻", "🧩", "🎲", "🕹️"];

export default function MiniGame() {
  const [emoji, setEmoji] = useState("");

  const gerarEmoji = () => {
    const index = Math.floor(Math.random() * EMOJIS.length);
    setEmoji(EMOJIS[index]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clique no botão para gerar um emoji!</Text>
      
      <TouchableOpacity style={styles.button} onPress={gerarEmoji}>
        <Text style={styles.buttonText}>Gerar Emoji</Text>
      </TouchableOpacity>

      {emoji !== "" && <Text style={styles.emoji}>{emoji}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#081E1A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: "#F01D8D",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#F01D8D",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  emoji: {
    fontSize: 60,
    marginTop: 30,
  },
});
