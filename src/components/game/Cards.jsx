import Card from './Card';

export default function Cards({ characters }) {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {characters.map(character => (
        <Card {...character} key={crypto.randomUUID()} />
      ))}
    </div>
  );
}
