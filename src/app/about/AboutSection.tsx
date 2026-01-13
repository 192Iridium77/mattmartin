import React from "react";

export const AboutSection = () => {
  return (
    <div id="about" className="py-8">
      <h2 className="text-xl flex justify-center">About</h2>
      <div className="max-w-3xl mx-auto mt-8 px-4 md:px-8">
        <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          Matt Martin is an independent developer and technologist exploring the intersection of software, design, and creative tools.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          He has worked as a professional software engineer on production systems in both startup and large-scale environments, including teams whose products were later acquired by Honeywell and Canva.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          His work spans hands-on development, experimentation, and product thinking, with a focus on building tools that are clear, useful, and grounded in real-world constraints.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Through personal projects and ongoing experiments, Matt documents what he learns while turning ideas into working software.
        </p>
      </div>
    </div>
  );
};
