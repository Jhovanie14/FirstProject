import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES, SHADOWS } from "./constant/Theme";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, SHADOWS.small]}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: SIZES.medium,
    height: 200,
    width: "90%",
  },
});
