import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import styles from "../../styles/Home";
import Input from "../../components/Input";
import { SIZES, COLORS } from "../../constant/Theme";
import Category from "./Category";
import Cards from "../../components/Cards";

const categories = [
  "trending Now",
  "All",
  "New",
  "Smartphones",
  "Men",
  "Women",
];

const HomeScreen = () => {
  const [pressed, setPressed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.container}>
      <Input style={styles.input} placeholder="Search" icon="search" />

      <View style={styles.categoryText}>
        <Text style={styles.textLabel}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Category
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{ flexDirection: "row" }}>
        <Cards />
        <Cards />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Cards />
        <Cards />
      </View>
    </View>
  );
};

export default HomeScreen;
