import * as React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function WeeklySpecial() {
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); 

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-start">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVuo_sYN__UzUkBoVI4C_21Fy8IOqEcPldA&s"
          alt="Bakery Products"
          className="rounded-lg mb-4 w-full h-40 object-cover"
        />
        <h3 className="text-lg font-semibold mb-2">Best Bakery Products</h3>
        <p className="text-gray-700 text-sm">Freshest Products every hour.</p>
        <p className="text-red-500 font-bold text-lg mt-2">only-from $24.99</p>
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Shop Now
        </button>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg text-center flex items-center justify-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Always Taking Care</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rFuBAM7XADQahUDgDf1hwrq7EYLiJyg2Xg&s"
            alt="Health & Safety"
            className="rounded-lg mb-4 w-full h-40 object-cover"
          />
          <p className="text-gray-600 text-sm">
            In store or online, your health & safety is our top priority.
          </p>
        </div>
      </div>

      <div className="p-4 bg-white border border-red-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-red-600">
          HOT PRODUCT FOR THIS WEEK
        </h3>
        <p className="text-gray-500 text-sm mb-4">
          Do not miss this opportunity at a special discount just for this week.
        </p>
        <div className="relative border border-red-400 rounded-lg p-4">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            19%
          </span>
          <div className="flex items-center mb-2">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-9.jpg"
              alt="Chobani Complete Vanilla Greek Yogurt"
              className="w-16 h-16 object-cover rounded-lg mr-4"
            />
            <div>
              <h4 className="font-semibold">
                Utterly Yum pineapple & coconut juice
              </h4>
              <p className="text-sm">
                1 kg <span className="text-green-500">IN STOCK</span>
              </p>
              <div className="flex items-center space-x-2">
                <span className="line-through text-gray-400">$5.49</span>
                <span className="text-red-500 font-bold">$4.49</span>
              </div>
            </div>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-yellow-500"
              style={{ width: "60%" }}
            ></div>
          </div>

          <div className="flex justify-between items-center text-center">
            <div className="text-lg font-semibold">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <div className="text-lg font-semibold">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-lg font-semibold">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-lg font-semibold">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-2">
            Remains until the end of the offer
          </p>
        </div>
      </div>
    </div>
  );
}
