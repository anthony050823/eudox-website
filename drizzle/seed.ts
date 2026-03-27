/**
 * Seed script for blog posts.
 * Run with: npm run db:seed
 */
import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { blogPosts } from "./schema";

const db = drizzle(process.env.DATABASE_URL!);

const posts = [
  {
    slug: "why-traditional-deal-sourcing-is-broken",
    title: "Why Traditional Deal Sourcing Is Broken — And How AI Fixes It",
    excerpt: "Proprietary deal flow is the holy grail of private equity. But relying on networks and cold outreach leaves most of the market invisible. Here's how AI-native sourcing changes the equation.",
    content: "",
    category: "Insights",
    date: "March 18, 2026",
    readTime: "7 min read",
    featured: true,
    published: true,
  },
  {
    slug: "building-ai-first-investment-pipeline",
    title: "Building an AI-First Investment Pipeline: A Practical Framework",
    excerpt: "Investment teams are drowning in data but starving for signal. We break down how to structure an AI-native deal pipeline that surfaces high-conviction opportunities — without the noise.",
    content: "",
    category: "Insights",
    date: "March 5, 2026",
    readTime: "9 min read",
    featured: false,
    published: true,
  },
  {
    slug: "understanding-growth-signals",
    title: "Understanding Growth Signals: What Eudox Monitors and Why",
    excerpt: "From hiring velocity to web traffic inflection points, Eudox tracks over 40 real-time data signals. We explain which ones matter most and how they predict company trajectory.",
    content: "",
    category: "Product",
    date: "February 20, 2026",
    readTime: "6 min read",
    featured: false,
    published: true,
  },
  {
    slug: "emerging-managers-compete-with-tech",
    title: "How Emerging Managers Can Compete with Established Funds Using Technology",
    excerpt: "Larger funds have armies of analysts. But technology is the great equalizer. Discover how smaller teams are using AI agents to punch above their weight in deal origination.",
    content: "",
    category: "Insights",
    date: "February 8, 2026",
    readTime: "8 min read",
    featured: false,
    published: true,
  },
  {
    slug: "q1-2026-private-markets-outlook",
    title: "Q1 2026 Private Markets Outlook: Signals We're Watching",
    excerpt: "Interest rate stabilization, secondaries market growth, and the rise of AI-native companies. Our team shares the macro signals shaping deal flow in the first quarter of 2026.",
    content: "",
    category: "Industry",
    date: "January 28, 2026",
    readTime: "5 min read",
    featured: false,
    published: true,
  },
  {
    slug: "future-of-pe-deal-sourcing-ai",
    title: "The Future of Private Equity Deal Sourcing in the Age of AI",
    excerpt: "AI isn't just automating research — it's redefining what it means to have edge. We explore how the next decade of private equity will be shaped by intelligent deal discovery.",
    content: "",
    category: "Industry",
    date: "January 10, 2026",
    readTime: "10 min read",
    featured: false,
    published: true,
  },
];

async function seed() {
  console.log("Seeding blog posts...");
  await db.insert(blogPosts).values(posts).onConflictDoNothing();
  console.log(`Inserted ${posts.length} blog posts.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
