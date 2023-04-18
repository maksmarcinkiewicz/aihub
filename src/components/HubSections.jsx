import React from "react";
import Card from "./Card";
import aiToolsData from "../data/aiToolsData";
import AnimatedTabs from "../components/AnimatedTabs";
const HubSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:items-center">
          <h2 className="text-3xl font-bold mb-8 lg:text-center">AI Tools</h2>
          <p className="text-lg text-justify md:text-center  max-w-6xl">
            Welcome to AI Hub, the go-to online hub for cutting-edge artificial
            intelligence (AI) tools. Our platform is designed to provide you
            with easy access to the best-in-class AI tools from across the
            industry. Whether you're a data scientist, developer, or AI
            enthusiast, you'll find a comprehensive collection of top-notch AI
            tools that can streamline your workflows, accelerate your projects,
            and help you unlock the full potential of AI.
          </p>
          <div className="px-2 py-6">
            <AnimatedTabs />
          </div>
        </div>
        <div className="carousel overflow-y-auto lg:grid lg:grid-cols-4 lg:gap-8 lg:mt-10">
          {aiToolsData.map((tool, index) => (
            <div
              className="bg-base-300 shadow-xl rounded-md p-6 carousel-item flex flex-col w-8/12 mr-6"
              key={index}
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="h-20 w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubSection;
