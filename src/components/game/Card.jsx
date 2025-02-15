export default function Card({ image_url, name, handleCardClick }) {
  return (
    <article
      className="w-56 transform cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:shadow-xl md:w-48"
      onClick={handleCardClick}
    >
      <img
        src={image_url}
        alt={name}
        className="h-56 w-full rounded-t-lg border-none object-top"
      />
      <div className="p-4 text-center">
        <p className="text-md font-semibold text-gray-800">{name}</p>
      </div>
    </article>
  );
}
