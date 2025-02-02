import Card from './Card';

export default function Cards({ characters, handleCardClick }) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {characters.map(character => (
        <Card
          {...character}
          key={crypto.randomUUID()}
          handleCardClick={() => handleCardClick(character.mal_id)}
        />
      ))}
    </div>
  );
}
