import React from "react";

const Card = ({ tool }) => {
  return (
    <div className="bg-base-300 shadow-xl rounded-md p-6">
      <img
        src={tool.image}
        alt={tool.name}
        className="h-20 w-20 mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
      <p className="text-gray-600">{tool.description}</p>
    </div>
  );
};

export default Card;
