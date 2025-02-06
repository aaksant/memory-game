export default function LevelCompleteModal({ handleRestart }) {
  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2 className="mb-4 text-2xl font-bold">Level Complete!</h2>
        <p className="mb-4">Congratulations, you have completed the level!</p>
        <button className="modal-button" onClick={handleRestart}>
          Restart Game
        </button>
      </div>
    </div>
  );
}
