export default function Header() {
  return (
    <nav className="header">
      <div>
        <h1 className="logo">Memory Cards</h1>
      </div>
      <div className="score-container">
        <p className="score">Score: 0</p>
        <p className="high-score">High Score: 0</p>
      </div>
    </nav>
  );
}
