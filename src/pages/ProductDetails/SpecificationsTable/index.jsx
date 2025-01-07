
import React from "react";

const SpecificationsTable = () => {
  const specs = [
    { name: "Stand Up", value: '35"L x 24"W x 37-45"H (front to back wheel)' },
    { name: "Folded (w/o wheels)", value: '32.5"L x 18.5"W x 16.5"H' },
    { name: "Folded (w/ wheels)", value: '32.5"L x 24"W x 18.5"H' },
    { name: "Door Pass Through", value: "24" },
    { name: "Frame", value: "Aluminum" },
    { name: "Weight (w/o wheels)", value: "20 LBS" },
    { name: "Weight Capacity", value: "60 LBS" },
    { name: "Width", value: '24"' },
    { name: "Handle height (ground to handle)", value: '37-45"' },
    { name: "Wheels", value: '12" air / wide track slick tread' },
    { name: "Seat back height", value: '21.5"' },
    { name: "Head room (inside canopy)", value: '25"' },
    { name: "Color", value: "Black, Blue, Red, White" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <table className="w-full text-left border border-gray-200">
        <tbody>
          {specs.map((spec, index) => (
            <tr key={index} className="border-b">
              <th className="p-4 font-semibold text-gray-600">{spec.name}</th>
              <td className="p-4 text-gray-800">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationsTable;
