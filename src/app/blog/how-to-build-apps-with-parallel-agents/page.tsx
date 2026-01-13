import React from "react";
import BlogPost from "../components/BlogPost";
import BlogSection from "../components/BlogSection";
import BlogList from "../components/BlogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build Apps with Parallel Agents | Matt Martin",
  description:
    "A practical guide to building your own apps alongside your career. Learn how to identify opportunities, build products, and leverage your network.",
  openGraph: {
    title: "How to Build Apps with Parallel Agents",
    description:
      "A practical guide to building your own apps alongside your career. Learn how to identify opportunities, build products, and leverage your network.",
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
          Building your own products alongside your career offers unique
          opportunities. While employment provides stability and security,
          building apps allows you to create additional income streams and
          potentially scale beyond a fixed salary.
        </p>
        <p>
          There are also financial benefits to running a business. Business
          structures offer more flexibility for tax planning and deductions
          compared to being solely an employee. This can help you keep more of
          what you earn.
        </p>
        <p>
          Side projects also offer flexibility in how and where you work. You
          can build products that serve global markets, work on your own
          schedule, and potentially create location independence.
        </p>
        <p>
          The key is to start small and build alongside your existing career.
          Don't quit your day job—instead, invest time outside of work building
          your passion projects.
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
