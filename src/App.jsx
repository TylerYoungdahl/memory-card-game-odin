import { useEffect, useState } from "react";
import "./App.css";
import { pokemon } from "./pokemonLinks";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

function App() {
  const [render, setRender] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!render) {
      setRender(true);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const cardData = await Promise.all(
        pokemon.map(async (name) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          const item = await response.json();
          return {
            name: item.name,
            src: item.sprites.front_default,
            isChecked: false,
          };
        })
      );

      setData(cardData);
    } catch {
      console.log(`ERROR`);
    }
  };

  const handleCheckCard = (name) => {
    setData((prevData) => {
      const updatedData = prevData.map((card) =>
        card.name === name ? { ...card, isChecked: true } : card
      );
      return shuffleCards(updatedData);
    });
  };

  const shuffleCards = (cards) => {
    const shuffled = cards.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }
    return shuffled;
  };

  const resetCards = (cards) => {};

  return (
    <>
      <Header />
      <GameBoard data={data} checkCard={handleCheckCard} />
      <img src="" alt="test" />
      <button onClick={() => console.log(data)}>test</button>
    </>
  );
}

export default App;
