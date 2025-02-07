export default function GameoverModal({ handleRestart }) {
  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Game Over 🎮</h2>
        <p className="mb-6 text-lg text-gray-700">Thank you for playing!</p>
        <button className="modal-button" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}
