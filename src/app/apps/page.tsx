import Apps from "../about/Apps";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps | Matt Martin",
  description: "Apps I've founded and worked with.",
};

export default function AppsPage() {
  return (
    <div className="container pt-14 md:pt-22">
      <Apps />
    </div>
  );
}

