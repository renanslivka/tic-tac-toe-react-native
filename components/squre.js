import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Square = ({ value, onClick }) => {
  const style = value ? `${value}` : ``;

  return (
    <TouchableOpacity
      style={styles.BtnContainer}
      className={style}
      onPress={onClick}
    >
      <Text style={styles.btn}>{style}</Text>
    </TouchableOpacity>
  );
};
export default Square;

const styles = StyleSheet.create({
  BtnContainer: {
    width: 100,
    height: 100,
    borderWidth: 1,
  },

  btn: {
    width: 100,
    height: 100,
    fontSize: 50,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
