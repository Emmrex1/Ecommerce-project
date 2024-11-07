import { FaBox, FaTruck, FaTags, FaDollarSign } from "react-icons/fa";

export function Features() {
  const features = [
    {
      icon: <FaBox className="text-xl text-gray-700" />,
      text: "Everyday fresh products",
    },
    {
      icon: <FaTruck className="text-xl text-gray-700" />,
      text: "Free delivery for orders over $70",
    },
    {
      icon: <FaTags className="text-xl text-gray-700" />,
      text: "Daily Mega Discounts",
    },
    {
      icon: <FaDollarSign className="text-xl text-gray-700" />,
      text: "Best price on the market",
    },
  ];

  return (
    <div className="hidden lg:flex md:flex bg-gray-100 py-6 px-8">
      <div className="flex flex-col md:flex-row items-center justify-around w-full space-y-4 md:space-y-0 md:space-x-8 text-center text-gray-800">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 border p-4 rounded-md bg-white shadow-sm w-full md:w-auto"
          >
            {feature.icon}
            <span className="font-medium">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
