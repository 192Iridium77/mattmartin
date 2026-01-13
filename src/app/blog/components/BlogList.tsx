import React from "react";

interface BlogListProps {
  items: string[];
}

export default function BlogList({ items }: BlogListProps) {
  return (
    <ol className="list-decimal list-inside space-y-2 ml-4">
      {items.map((item, index) => (
        <li key={index} className="pl-2">
          {item}
        </li>
      ))}
    </ol>
  );
}
