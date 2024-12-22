export default function Card({ name, src }) {
  return (
    <div className="card">
      <img src={src} className="card-image" />
      <div className="card-name">{name}</div>
    </div>
  );
}
