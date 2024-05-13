import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constant/Theme";
import styles from "../../styles/Signup";
import Input from "../../components/Input";
import ButtonSubmit from "../../components/ButtonSubmit";

export default function RegisterScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}>
      <View style={styles.form}>
        <View style={styles.welcome}>
          {/* <Text style={styles.label}>Welcome to</Text> */}
          <Image
            style={styles.image}
            source={require("../../assets/favicon.png")}
          />
          <Text style={styles.createText}>Sign up to get free vouchers</Text>
        </View>
        <Text style={styles.textLabel}>Full name</Text>
        <Input
          style={styles.input}
          placeholder="Enter Full name"
          placeholderTextColor={COLORS.lightWhite}
        />
        <Text style={styles.textLabel}>Email</Text>
        <Input
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor={COLORS.lightWhite}
        />
        <Text style={styles.textLabel}>Password</Text>
        <Input
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor={COLORS.lightWhite}
          place
        />
        <ButtonSubmit text="Submit" />
      </View>
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          // backgroundColor: COLORS.gray,
          marginBottom: 20,
        }}>
        <Text style={{}}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#2b81bf",
            }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
