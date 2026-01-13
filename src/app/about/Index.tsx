import React from "react";
import Projects from "./Projects";
import { Hero } from "./Hero";
import Companies from "./Companies";
import BlogPreview from "../blog/BlogPreview";

export default function About() {
  return (
    <>
      <Hero />
      <div className="container mt-12">
        <Companies />
        <Projects limit={3} />
        <section className="mt-16 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
            Blog
          </h2>
          <BlogPreview
            title="How to Build Apps with Parallel Agents"
            description="Learn how to escape the employment trap by building your own apps. A practical guide to identifying opportunities, building products, and leveraging your network."
            slug="how-to-build-apps-with-parallel-agents"
            date="January 2025"
          />
        </section>
      </div>
    </>
  );
}
