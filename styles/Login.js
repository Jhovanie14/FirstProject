import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constant/Theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    padding: 20,
    borderRadius: 10,
    width: "95%",
  },
  label: {
    fontSize: SIZES.medium,
    marginBottom: 3,
    fontWeight: "bold",
    color: COLORS.lightWhite,
  },
  input: {
    height: 40,
    width: "100%",
    color: COLORS.lightWhite,
    backgroundColor: "#dc91d7",
    marginBottom: 15,
    borderRadius: 12,
    padding: 10,
  },
  image: {
    marginBottom: 15,
  },
  createText: {
    fontSize: SIZES.small,
    color: COLORS.lightWhite,
    fontWeight: "300",
    marginBottom: 20,
  },
  textLabel: {
    fontSize: SIZES.small,
    marginBottom: 5,
    fontWeight: "bold",
    color: COLORS.lightWhite,
  },
});

export default styles;
