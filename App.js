import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Board from "./components/board";
import { calculateWinner } from "./components/helper";

export default function App() {
  const [xIsNext, setxIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);

  const jumpTo = (step) => {
    setStepNumber(step);
    setxIsNext(step % 2 === 0);
  };

  const handlePress = (i) => {
    const newhistory = history.slice(0, stepNumber + 1);
    const current = newhistory[newhistory.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setxIsNext(!xIsNext);
    setStepNumber(history.length);
    setHistory(
      history.concat([
        {
          squares: squares,
        },
      ])
    );
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = history.map((step, move) => {
    const desc = move ? "Go to #" + move : "Start the Game";
    return (
      <View key={move}>
        <Text onClick={() => jumpTo(move)}>{desc}</Text>
      </View>
    );
  });
  let status;
  if (winner) {
    status = "Winner is " + winner;
  } else {
    status = "Next Player is " + (xIsNext ? "X" : "O");
  }
  return (
    <View style={styles.container}>
      <Text>Tic Tac Toe</Text>
      <View>
        <Board onClick={(i) => handlePress(i)} squares={current.squares} />
      </View>
      <Text>{status}</Text>
      <View>{moves}</View>
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
});
