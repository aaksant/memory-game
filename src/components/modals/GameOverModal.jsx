export default function GameoverModal({ handleRestart }) {
  return (
    <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center">
      <div className="rounded-lg bg-white p-6 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Game Over</h2>
        <p className="mb-4">Thank you for playing!</p>
        <button
          className="mt-4 cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={handleRestart}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}
