const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board">
      <div className="title">React-Crush</div>
      <div className="score">{score}</div>
    </div>
  );
};

export default ScoreBoard;
