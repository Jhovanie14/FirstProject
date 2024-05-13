import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Input = ({
  placeholder,
  value,
  onChangeText,
  style,
  keyboardType,
  icon,
}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={style}
        keyboardType={keyboardType}
      />
      <Ionicons name={icon} size={20} style={styles.icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default Input;
