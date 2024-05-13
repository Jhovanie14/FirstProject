import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constant/Theme";

const ButtonSubmit = ({ text, onPress, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        backgroundColor: COLORS.primary,
        height: 40,
        justifyContent: "center",
        borderRadius: 12,
        marginTop: 15,
      }}>
      <Text
        style={{
          fontSize: SIZES.medium,
          fontWeight: "bold",
          alignSelf: "center",
          color: COLORS.lightWhite,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonSubmit;
