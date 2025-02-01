export default function LevelButton({ text, handleStartGame }) {
  return (
    <button
      className="block transform cursor-pointer rounded-lg border-2 border-slate-200 px-4 py-2 hover:bg-slate-50"
      onClick={handleStartGame}
    >
      {text}
    </button>
  );
}
