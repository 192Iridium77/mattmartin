import React from "react";
import BlogPost from "../components/BlogPost";
import BlogSection from "../components/BlogSection";
import BlogList from "../components/BlogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build Apps with Parallel Agents | Matt Martin",
  description:
    "Building products alongside a full-time job is one of the most asymmetric bets you can make. Learn how to build in parallel, keep multiple streams moving, and create momentum that survives real life.",
  openGraph: {
    title: "How to Build Apps with Parallel Agents",
    description:
      "Building products alongside a full-time job is one of the most asymmetric bets you can make. Learn how to build in parallel, keep multiple streams moving, and create momentum that survives real life.",
  },
};

export default function HowToBuildAppsPage() {
  return (
    <BlogPost
      title="How to Build Apps with Parallel Agents"
      date="January 2025"
    >
      <BlogSection title="Why Build Apps Alongside Your Career">
        <p>
          Building products alongside a full-time job is one of the most
          asymmetric bets you can make.
        </p>
        <p>
          Employment gives you stability: predictable income, benefits, and a
          ceiling. Side projects give you optionality. They let you explore ideas
          that can grow beyond your salary, fail cheaply, or quietly compound
          while you sleep.
        </p>
        <p>
          There's also a structural advantage. Running even a small business
          unlocks flexibility around expenses, tooling, and tax planning that
          simply doesn't exist when all your income flows through payroll. This
          isn't about loopholes—it's about playing the game that already exists.
        </p>
        <p>
          More importantly, side projects give you leverage over time and
          location. You can build once and sell globally. You can work
          asynchronously. You can create assets instead of trading hours.
        </p>
        <p>
          The trick is not to "go all in." The trick is to build in parallel.
          Keep the job. Reduce the risk. Let momentum, not motivation, decide
          what grows.
        </p>
      </BlogSection>

      <BlogSection title="What 'Parallel Agents' Actually Means">
        <p>You are not one thing when you build a product.</p>
        <p>
          You are a designer, an engineer, a marketer, a support desk, a product
          manager, and occasionally a customer. Traditionally, startups solve
          this by hiring people. Solo builders solve it by context switching
          until burnout.
        </p>
        <p>Parallel agents are the third option.</p>
        <p>
          Some agents are you, deliberately time-boxed into roles. Others are AI
          tools acting as accelerators: generating drafts, validating
          assumptions, scaffolding code, or summarising feedback. The goal is
          not automation for its own sake—it's keeping multiple streams moving
          forward at once without waiting for "perfect focus."
        </p>
        <p>The rest of this post is about setting up those streams.</p>
      </BlogSection>

      <BlogSection title="Step 1: Identify Your Obsessions (Not Just Your Skills)">
        <p>Start with what you keep returning to when no one is paying you.</p>
        <p>
          Not what you're good at. Not what sounds impressive. What you've
          circled back to for years out of curiosity or joy.
        </p>
        <p>
          For me, that's psychometrics and video games—systems that measure
          humans, and systems that let humans play with rules. That intersection
          gives me energy even when progress is slow, which matters more than raw
          talent.
        </p>
        <p>
          This step filters ideas by stamina. If you're going to build at night,
          on weekends, or between life obligations, the idea has to survive
          boredom.
        </p>
      </BlogSection>

      <BlogSection title="Step 2: Find Markets That Already Spend Money">
        <p>Do not start by inventing demand.</p>
        <p>
          Look for products in your interest area that already make money.
          Subscriptions, SaaS tools, niche marketplaces—anything with customers
          who have pulled out their credit cards voluntarily.
        </p>
        <p>This isn't laziness. It's respect for reality.</p>
        <p>A proven market answers three questions for free:</p>
        <BlogList
          items={[
            "Someone wants this",
            "They want it badly enough to pay",
            "They can be reached somehow",
          ]}
        />
        <p>You're not copying success—you're borrowing signal.</p>
      </BlogSection>

      <BlogSection title="Step 3: Build Your Version (Taste Is the Differentiator)">
        <p>Now you copy—but carefully.</p>
        <p>
          You are copying structure, not assets. Features, flows, pricing logic,
          onboarding patterns. You are not copying branding, copy, or
          proprietary data.
        </p>
        <p>
          As you recreate the product piece by piece, you will naturally inject
          taste: different defaults, better explanations, sharper constraints, or
          a clearer audience. That's how differentiation actually happens in
          practice, not through brainstormed "unique value propositions."
        </p>
        <p>
          Build one feature at a time. Write the plan down. Reduce ambiguity
          until the next step is obvious.
        </p>
        <p className="font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">
          A practical baseline stack looks like this:
        </p>
        <BlogList
          items={[
            "Frontend: React with Next.js",
            "Database: Postgres (Neon is an easy free start)",
            "Auth: Next's built-in patterns or a lightweight provider",
            "Payments: Stripe",
          ]}
        />
        <p>
          Do not treat design as an afterthought. Users can tell immediately when
          design is careless or AI-generated without taste. AI is a tool, not a
          substitute for understanding hierarchy, spacing, and intent. Bad
          design kills trust faster than bugs.
        </p>
      </BlogSection>

      <BlogSection title="Step 4: Treat Distribution as a First-Class Problem">
        <p>
          Most side projects fail quietly because no one ever sees them.
        </p>
        <p>
          Your first users should not be strangers. They should be people who
          already trust you. Reach out warmly. No pitching. No "I built a
          thing" spam. Just conversations.
        </p>
        <p>
          Every person you know is a gateway to hundreds you don't. Networks
          compound in ways code does not.
        </p>
        <p>
          If this feels uncomfortable, that's a signal—not a stop sign.
        </p>
        <p>
          As a rule of thumb, at least half your time should be spent on
          outreach, feedback, and distribution. Building is only half the job.
          Visibility is the other half, and it's the one engineers love to
          ignore.
        </p>
      </BlogSection>

      <BlogSection title="Closing Thought">
        <p>
          Building apps with parallel agents is less about speed and more about
          flow. Keep multiple small bets alive. Let tools carry cognitive load.
          Let curiosity decide direction.
        </p>
        <p>
          You're not trying to build the next unicorn. You're trying to build
          momentum that survives real life.
        </p>
        <p className="font-semibold text-gray-900 dark:text-gray-100">
          Momentum, once established, is stubborn in the best possible way.
        </p>
      </BlogSection>
    </BlogPost>
  );
}
