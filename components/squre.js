import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Square = ({ onClick, value }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View>{value}</View>
    </TouchableOpacity>
  );
};

export default Square;

const styles = StyleSheet.create({});
