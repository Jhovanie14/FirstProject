import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constant/Theme";

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item && { backgroundColor: COLORS.primary },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    backgroundColor: COLORS.gray,
    padding: 10,
    textAlign: "center",
    borderRadius: 8,
    marginHorizontal: 5,
  },
});

export default Category;
