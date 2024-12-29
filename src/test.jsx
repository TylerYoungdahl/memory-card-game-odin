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
    setData((prevData) =>
      prevData.map((card) =>
        card.name === name ? { ...card, isChecked: true } : card
      )
    );
  };

  return (
    <>
      <Header />
      <GameBoard
        data={data}
        checkCard={(name) => handleCheckCard(name)}
      />
      <img src="" alt="test" />
      <button onClick={() => console.log(data)}>test</button>
    </>
  );
}

export default App;


export default function Card({ name, src, checkCard }) {
    return (
      <div className="card" onClick={() => checkCard(name)}>
        <img src={src} className="card-image" />
        <div className="card-name">{name}</div>
      </div>
    );
  }
  