import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constant/Theme";
import styles from "../../styles/Login";
import Input from "../../components/Input";
import ButtonSubmit from "../../components/ButtonSubmit";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    setError(errors);

    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    if (validateForm()) {
      console.log("submitted", email, password);
      Keyboard.dismiss();
      navigation.navigate("Bottom Stack", { screen: "Home" });
      setEmail("");
      setPassword("");

      setError({});
    }
  };
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
        <Input
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor={COLORS.lightWhite}
        />
        {error.email ? (
          <Text style={styles.errorText}>{error.email}</Text>
        ) : null}
        <Text style={styles.textLabel}>Password</Text>
        <Input
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor={COLORS.lightWhite}
          place
        />
        {error.password ? (
          <Text style={styles.errorText}>{error.password}</Text>
        ) : null}
        <View style={{ alignItems: "flex-end" }}>
          <Text
            style={{
              marginBottom: 20,
            }}>
            Forgot password?
          </Text>
        </View>
        <ButtonSubmit text="Log in" onPress={handleSubmit} />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 40,
        }}>
        <Text style={{}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#2b81bf",
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
