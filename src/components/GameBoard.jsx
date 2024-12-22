import Card from "./Card";

export default function GameBoard({ data }) {
  return (
    <div className="board">
      {data.map((item) => {
        return (
          <Card
            key={item.name}
            className="card"
            name={item.name}
            src={item.src}
          />
        );
      })}
    </div>
  );
}
