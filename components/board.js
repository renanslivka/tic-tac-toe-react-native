import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Square from "./squre";

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => {
    <Square value={squares[i]} onClick={onClick(i)} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.Btn}>{renderSquare(0)}</View>
        <View style={styles.Btn}>{renderSquare(1)}</View>
        <View style={styles.Btn}>{renderSquare(2)}</View>
      </View>
      <View style={styles.row}>
        <View style={styles.Btn}>{renderSquare(3)}</View>
        <View style={styles.Btn}>{renderSquare(4)}</View>
        <View style={styles.Btn}>{renderSquare(5)}</View>
      </View>
      <View style={styles.row}>
        <View style={styles.Btn}>{renderSquare(6)}</View>
        <View style={styles.Btn}>{renderSquare(7)}</View>
        <View style={styles.Btn}>{renderSquare(8)}</View>
      </View>
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  Btn: {
    width: 100,
    height: 100,
    borderWidth: 1,
  },
  row: { flexDirection: "row" },
});
