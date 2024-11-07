// ProfileCard.js
export default function ProfileCard() {
  return (
    <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">The Best Marketplace</h2>
      <p className="text-gray-600 my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut.
      </p>
      <div className="flex items-center mt-4">
        <img
          className="h-12 w-12 rounded-full mr-4"
          src="https://via.placeholder.com/100" // Replace with Tina's image URL
          alt="Tina Mcdonnell"
        />
        <div>
          <h3 className="font-medium text-gray-800">Emmrexcoder</h3>
          <p className="text-gray-500 text-sm">Sales Manager</p>
        </div>
      </div>
    </div>
  );
}
