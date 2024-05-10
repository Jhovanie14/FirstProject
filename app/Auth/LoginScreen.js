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
import styles from "../../styles/Login";

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}>
      <View style={styles.form}>
        <View style={styles.welcome}>
          <Text style={styles.label}>Welcome to</Text>
          <Image
            style={styles.image}
            source={require("../../assets/favicon.png")}
          />
          <Text style={styles.createText}>
            Enter your credentials to log in your account
          </Text>
        </View>
        <Text style={styles.textLabel}>Your email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor={COLORS.lightWhite}
          place
        />
        <Text style={styles.textLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor={COLORS.lightWhite}
          place
        />
        <Text
          style={{
            alignSelf: "flex-end",
            color: COLORS.lightWhite,
            marginBottom: 20,
          }}>
          Forgot password?
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#952f8f",
            height: 40,
            justifyContent: "center",
            borderRadius: 12,
          }}>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontWeight: "bold",
              alignSelf: "center",
              color: COLORS.lightWhite,
            }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
