import React from "react";
import Link from "next/link";

interface BlogPreviewProps {
  title: string;
  description: string;
  slug: string;
  date?: string;
}

export default function BlogPreview({
  title,
  description,
  slug,
  date,
}: BlogPreviewProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block group hover:opacity-80 transition-opacity"
    >
      <article className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary-200 transition-colors">
          {title}
        </h2>
        {date && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {date}
          </p>
        )}
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </article>
    </Link>
  );
}
