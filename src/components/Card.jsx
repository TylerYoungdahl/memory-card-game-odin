export default function Card({ name, src, checkCard }) {
  return (
    <div className="card" onClick={() => checkCard(name)}>
      <img src={src} className="card-image" />
      <div className="card-name">{name}</div>
    </div>
  );
}
