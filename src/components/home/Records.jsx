export default function Records({ levels, bestScores }) {
  return (
    <div className="fixed top-3 right-10 min-w-50 rounded-lg border-2 border-slate-200 px-4 py-2">
      <h3 className="mb-4 text-xl font-bold">Best Scores</h3>
      {levels.map(({ text }, index) => (
        <div key={index} className="mb-2 flex items-center justify-between">
          <span>{text}</span>
          <span>{bestScores[text] || 0}</span>
        </div>
      ))}
    </div>
  );
}
