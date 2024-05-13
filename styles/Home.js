import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constant/Theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    width: "100%",
    color: COLORS.dark,
    backgroundColor: COLORS.white,
    marginBottom: 10,
    borderRadius: 12,
    padding: 10,
  },
  textLabel: {
    fontSize: SIZES.large,
    fontWeight: "bold",
  },
  categoryText: {
    marginTop: 25,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  seAllText: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    alignSelf: "center",
  },
});

export default styles;
