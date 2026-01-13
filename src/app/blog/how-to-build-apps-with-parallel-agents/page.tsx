import React from "react";
import BlogPost from "../components/BlogPost";
import BlogSection from "../components/BlogSection";
import BlogList from "../components/BlogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build Apps with Parallel Agents | Matt Martin",
  description:
    "Learn how to escape the employment trap by building your own apps. A practical guide to identifying opportunities, building products, and leveraging your network.",
  openGraph: {
    title: "How to Build Apps with Parallel Agents",
    description:
      "Learn how to escape the employment trap by building your own apps. A practical guide to identifying opportunities, building products, and leveraging your network.",
  },
};

export default function HowToBuildAppsPage() {
  return (
    <BlogPost
      title="How to Build Apps with Parallel Agents"
      date="January 2025"
    >
      <BlogSection title="Why">
        <p>
          When you are employed, your pay is capped at a stable rate. In
          exchange for protecting you from business shortfalls, you do not get
          any of the upside when an app starts to make $100k per month.
        </p>
        <p>
          Taxation rules do not favour employees. With a business there are many
          tricks you can use to legally minimise the tax that you pay. As an
          employee though, the most you can do is put more money into your Super
          (for use in 30 years time, even if it's worth more to you right now),
          or novated lease a car to reduce your taxable income.
        </p>
        <p>
          Employment contracts affect your freedom. As a business owner you
          could travel the world nomadically, earn globally, and live wherever
          you want. As an employee, you are lucky if you're allowed to work
          globally at all.
        </p>
        <p>
          To escape this trap, it takes a lot of time investment. Don't quit
          your day job, just start building your passion projects outside of it.
        </p>
      </BlogSection>

      <BlogSection title="Step 1: Identify Your Interests">
        <p>
          Identify what you are most interested in. What have you spent most of
          your time working on in your life—just for the fun of it. For me this
          has been psychometrics and video games.
        </p>
      </BlogSection>

      <BlogSection title="Step 2: Find Proven Markets">
        <p>
          Find existing products in these areas that are already making money.
          This means that they already have a proven market.
        </p>
      </BlogSection>

      <BlogSection title="Step 3: Build Your Version">
        <p>
          Copy them. Don't worry about copyright infringement—when you do this
          you will naturally make it your own unique product with its own quirks
          and taste. Start writing down a plan to build each feature one at a
          time.
        </p>
        <p className="font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">You will need:</p>
        <BlogList
          items={[
            "Designs",
            "Web UI. React with Next.js",
            "Database. Connect Next to Neon for a free Postgres database",
            "Authentication. Next gives you this for free",
            "Payments Gateway. Integrate with Stripe",
          ]}
        />
        <p className="mt-6">
          Don't underestimate design. People can immediately tell if you're
          using AI to do your design, and AI does not even follow basic design
          principles.
        </p>
      </BlogSection>

      <BlogSection title="Step 4: Leverage Your Network">
        <p>
          Start warm reachouts to people you know. Do not sell anyone, just
          reach out to them like a friend. You need to tap into your network
          because every person you know, knows hundreds of people. Your network
          extends much further than you'd realise.
        </p>
        <p className="font-semibold text-gray-900 dark:text-gray-100">
          50% of your time should be spent doing outreach.
        </p>
      </BlogSection>
    </BlogPost>
  );
}
