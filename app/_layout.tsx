import { Stack } from "expo-router";
import { View, StatusBar } from "react-native";

const COLORS = {
  primary: "#F01D8D",
  background: "#081E1A",
  text: "#FFFFFF",
};

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: COLORS.background },
        }}
      />
    </View>
  );
}
