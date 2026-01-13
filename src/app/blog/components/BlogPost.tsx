import React from "react";

interface BlogPostProps {
  title: string;
  date?: string;
  children: React.ReactNode;
}

export default function BlogPost({ title, date, children }: BlogPostProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
      {/* Header */}
      <header className="mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 leading-tight">
          {title}
        </h1>
        {date && (
          <p className="text-base text-gray-600 dark:text-gray-400">
            {date}
          </p>
        )}
      </header>

      {/* Content */}
      <div className="max-w-[65ch] text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </article>
  );
}
