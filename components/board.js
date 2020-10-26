import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Square from "./squre";

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => {
    return <Square key={i} value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>{renderSquare(0)}</View>
        <View>{renderSquare(1)}</View>
        <View>{renderSquare(2)}</View>
      </View>
      <View style={styles.row}>
        <View>{renderSquare(3)}</View>
        <View>{renderSquare(4)}</View>
        <View>{renderSquare(5)}</View>
      </View>
      <View style={styles.row}>
        <View>{renderSquare(6)}</View>
        <View>{renderSquare(7)}</View>
        <View>{renderSquare(8)}</View>
      </View>
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  row: { flexDirection: "row" },
});
