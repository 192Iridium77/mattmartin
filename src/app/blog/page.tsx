import React from "react";
import BlogPreview from "./BlogPreview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Matt Martin",
  description: "Articles and insights on building apps, entrepreneurship, and technology.",
};

export default function BlogPage() {
  return (
    <div className="container mt-24 md:mt-32 px-4 md:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-gray-100">
        Blog
      </h1>
      <div className="max-w-3xl">
        <BlogPreview
          title="How to Build Apps with Parallel Agents"
          description="Learn how to escape the employment trap by building your own apps. A practical guide to identifying opportunities, building products, and leveraging your network."
          slug="how-to-build-apps-with-parallel-agents"
          date="January 2025"
        />
      </div>
    </div>
  );
}
