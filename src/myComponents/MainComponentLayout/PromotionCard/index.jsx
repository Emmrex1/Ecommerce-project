// PromotionCard.js
export default function PromotionCard({ title, subtitle, imageUrl }) {
  return (
    <div className="relative bg-gray-100 p-6 rounded-lg shadow-md flex items-center">
      <div>
        <h3 className="text-green-600 font-semibold mb-2">
          WEEKEND DISCOUNT 40%
        </h3>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
        <button className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
          Shop Now
        </button>
      </div>
      <img
        className="absolute right-4 top-0 h-32 w-auto object-cover rounded-lg"
        src={imageUrl}
        alt={title}
      />
    </div>
  );
}
