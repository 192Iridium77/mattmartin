import React from "react";

interface BlogSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function BlogSection({ title, children }: BlogSectionProps) {
  return (
    <section className="mb-10 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <div className="space-y-5 [&>p]:leading-relaxed">
        {children}
      </div>
    </section>
  );
}
