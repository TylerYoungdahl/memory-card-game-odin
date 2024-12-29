export default function Header({ score, highScore }) {
  return (
    <nav className="header">
      <div>
        <h1 className="logo">Memory Cards</h1>
      </div>
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p className="high-score">High Score: {highScore}</p>
      </div>
    </nav>
  );
}
