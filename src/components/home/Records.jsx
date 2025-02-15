export default function Records({ levels, bestScores }) {
  return (
    <div className="top-3 right-10 mb-4 w-full min-w-50 rounded-lg border-2 border-slate-200 px-4 py-2 sm:fixed sm:w-0">
      <h3 className="mb-4 text-xl font-bold">Best Scores</h3>
      {levels.map(({ name }, index) => (
        <div key={index} className="mb-2 flex items-center justify-between">
          <span>{name}</span>
          <span>{bestScores[name] || 0}</span>
        </div>
      ))}
    </div>
  );
}
