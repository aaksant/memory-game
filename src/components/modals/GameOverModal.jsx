export default function GameoverModal({ score, handleRestart }) {
  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Game Over 🎮</h2>
        <p className="mb-6 text-lg text-gray-700">
          Your final score is {score}
        </p>
        <button className="modal-button" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}
