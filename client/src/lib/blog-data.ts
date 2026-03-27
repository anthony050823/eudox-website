export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Product" | "Insights" | "Industry" | "Company";
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-traditional-deal-sourcing-is-broken",
    title: "Why Traditional Deal Sourcing Is Broken — And How AI Fixes It",
    excerpt:
      "Proprietary deal flow is the holy grail of private equity. But relying on networks and cold outreach leaves most of the market invisible. Here's how AI-native sourcing changes the equation.",
    category: "Insights",
    date: "March 18, 2026",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "building-ai-first-investment-pipeline",
    title: "Building an AI-First Investment Pipeline: A Practical Framework",
    excerpt:
      "Investment teams are drowning in data but starving for signal. We break down how to structure an AI-native deal pipeline that surfaces high-conviction opportunities — without the noise.",
    category: "Insights",
    date: "March 5, 2026",
    readTime: "9 min read",
  },
  {
    slug: "understanding-growth-signals",
    title: "Understanding Growth Signals: What Eudox Monitors and Why",
    excerpt:
      "From hiring velocity to web traffic inflection points, Eudox tracks over 40 real-time data signals. We explain which ones matter most and how they predict company trajectory.",
    category: "Product",
    date: "February 20, 2026",
    readTime: "6 min read",
  },
  {
    slug: "emerging-managers-compete-with-tech",
    title: "How Emerging Managers Can Compete with Established Funds Using Technology",
    excerpt:
      "Larger funds have armies of analysts. But technology is the great equalizer. Discover how smaller teams are using AI agents to punch above their weight in deal origination.",
    category: "Insights",
    date: "February 8, 2026",
    readTime: "8 min read",
  },
  {
    slug: "q1-2026-private-markets-outlook",
    title: "Q1 2026 Private Markets Outlook: Signals We're Watching",
    excerpt:
      "Interest rate stabilization, secondaries market growth, and the rise of AI-native companies. Our team shares the macro signals shaping deal flow in the first quarter of 2026.",
    category: "Industry",
    date: "January 28, 2026",
    readTime: "5 min read",
  },
  {
    slug: "future-of-pe-deal-sourcing-ai",
    title: "The Future of Private Equity Deal Sourcing in the Age of AI",
    excerpt:
      "AI isn't just automating research — it's redefining what it means to have edge. We explore how the next decade of private equity will be shaped by intelligent deal discovery.",
    category: "Industry",
    date: "January 10, 2026",
    readTime: "10 min read",
  },
];

const _categoryColors: Record<BlogPost["category"], string> = {
  Product: "bg-[#4ee8dc]/10 text-[#4ee8dc] border-[#4ee8dc]/20",
  Insights: "bg-[#3dc4ff]/10 text-[#3dc4ff] border-[#3dc4ff]/20",
  Industry: "bg-purple-500/10 text-purple-400 border-purple-400/20",
  Company: "bg-amber-500/10 text-amber-400 border-amber-400/20",
};

export function getCategoryColor(category: string): string {
  return _categoryColors[category as BlogPost["category"]] ?? "bg-muted text-muted-foreground border-border";
}

export const categoryColors = _categoryColors;
