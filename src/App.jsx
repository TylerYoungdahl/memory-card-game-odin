import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <>
      <Header />
      <GameBoard />
    </>
  );
}

export default App;
