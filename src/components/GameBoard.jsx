import Card from "./Card";

export default function GameBoard({ data, checkCard }) {
  return (
    <div className="board">
      {data.map((item) => {
        return (
          <Card
            key={item.name}
            name={item.name}
            src={item.src}
            checkCard={checkCard}
          />
        );
      })}
    </div>
  );
}
