import Games from "../about/Games";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games | Matt Martin",
  description: "Games I've created and worked on.",
};

export default function GamesPage() {
  return (
    <div className="container pt-14 md:pt-22">
      <Games />
    </div>
  );
}

