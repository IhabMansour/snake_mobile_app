import { StyleSheet, Text } from "react-native";
import { Coordinate } from "../types/types";
import Emoji from "react-native-emoji";

export default function Food({ x, y }: Coordinate): JSX.Element {
  return (
    <Text style={[{ top: y * 10, left: x * 10 }, styles.food]}>
      <Emoji name="apple" style={{ fontSize: 15 }} />
    </Text>
  );
}

const styles = StyleSheet.create({
  food: {
    width: 20,
    height: 20,
    borderRadius: 7,
    position: "absolute",
  },
});
