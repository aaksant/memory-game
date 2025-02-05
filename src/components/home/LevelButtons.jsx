import LevelButton from './LevelButton';

export default function LevelButtons({ levels, handleStartGame }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {levels.map((level, index) => (
        <LevelButton
          text={level.text}
          key={index}
          handleStartGame={() => handleStartGame(level)}
        />
      ))}
    </div>
  );
}
