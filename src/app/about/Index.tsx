import React from "react";
import Projects from "./Projects";
import { Hero } from "./Hero";
import Apps from "./Apps";
import Games from "./Games";
import { AboutSection } from "./AboutSection";
import BlogPreview from "../blog/BlogPreview";

export default function About() {
  return (
    <>
      <Hero />
      <div className="container mt-12">
        <Apps />
        <section className="mt-16 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
            Blog
          </h2>
          <BlogPreview
            title="How to Build Apps with Parallel Agents"
            description="A practical guide to building your own apps alongside your career. Learn how to identify opportunities, build products, and leverage your network."
            slug="how-to-build-apps-with-parallel-agents"
            date="January 2025"
          />
        </section>
        <Projects limit={3} />
        <Games />
        <AboutSection />
      </div>
    </>
  );
}
