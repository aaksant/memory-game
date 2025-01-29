import Card from './Card';

export default function Cards({ characters }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {characters.map((character) => (
        <Card {...character} key={crypto.randomUUID()} />
      ))}
    </div>
  );
}
