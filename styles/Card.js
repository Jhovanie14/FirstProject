import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constant/Theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    height: 200,
    borderRadius: 8,
    width: "95%",
    marginVertical: 10,

    backgroundColor: COLORS.lightGray,
  },
  title: {
    fontSize: SIZES.medium,
    color: COLORS.dark,
    fontWeight: "600",
  },
  price: {
    fontSize: SIZES.large,
    color: COLORS.gray,
  },
});

export default styles;
