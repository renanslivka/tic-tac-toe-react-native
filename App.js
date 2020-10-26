import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Board from "./components/board";
import { calculateWinner } from "./components/helper";

export default function App() {
  const [squarsArray, setSquarsArray] = useState([Array(9).fill(null)]);
  const [stepNum, setStepNum] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  let winner = calculateWinner(squarsArray[stepNum]);

  const player = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const current = squarsArray[stepNum];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = player;
    setSquarsArray([...squarsArray, squares]);
    setStepNum(stepNum + 1);
    setXisNext(!xIsNext);
  };

  const restart = () => {
    setSquarsArray([Array(9).fill(null)]);
    setStepNum(0);
    setXisNext(true);
  };

  let status;
  if (!winner) {
    status = "Next Player: " + player;
  }

  if (!winner && stepNum === 9) {
    status = "ITS A TIE!!!";
  }
  if (winner) {
    status = "The Winner Is: " + winner[0];
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Board squares={squarsArray[stepNum]} onClick={handleClick} />
      {(winner || stepNum === 9) && (
        <View>
          {Alert.alert(
            "End Game",
            status,
            [{ text: "OK", onPress: restart() }],
            { cancelable: false }
          )}
        </View>
      )}
      <Text>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    paddingBottom: 20,
  },
  resetBtn: {
    paddingTop: 10,
    margin: 10,
  },
});
