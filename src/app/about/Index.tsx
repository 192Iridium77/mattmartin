import React from "react";
import Projects from "./Projects";
import { Hero } from "./Hero";
import Apps from "./Apps";
import Games from "./Games";
import { AboutSection } from "./AboutSection";

export default function About() {
  return (
    <>
      <Hero />
      <div className="container mt-12">
        <Apps />
        <Games />
        <Projects limit={3} />
        <AboutSection />
      </div>
    </>
  );
}
