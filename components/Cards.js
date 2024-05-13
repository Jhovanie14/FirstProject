import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles/Card";

const Cards = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/pngwing.com.png")}
        style={styles.coverImage}
        resizeMode="contain"
      />
      <Text style={styles.title}>Air Pods Gen 2</Text>
      <Text style={styles.price}>$89.99</Text>
    </View>
  );
};

export default Cards;
