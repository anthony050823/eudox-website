import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { blogPosts as staticPosts, getCategoryColor } from "@/lib/blog-data";
import { trpc } from "@/lib/trpc";

const CATEGORIES = ["All", "Insights", "Product", "Industry", "Company"] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { data: dbPosts } = trpc.blog.list.useQuery();
  const posts = dbPosts && dbPosts.length > 0 ? dbPosts : staticPosts;

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p: { category: string }) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-cyan-500/30">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-[#f5f6fb] dark:bg-[#11142d]">
          <div className="container">
            <AnimatedSection animation="fade-up" className="max-w-2xl">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Link>
              <div className="block">
                <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#4ee8dc] mb-4">
                  The Eudox Blog
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Perspectives on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff]">
                  private markets
                </span>{" "}
                &amp; AI
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Insights on deal sourcing, investment intelligence, and the future of private equity — from the team building the tools that power it.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="sticky top-16 z-10 bg-white/80 dark:bg-[#0B102C]/80 backdrop-blur-md border-b border-border">
          <div className="container">
            <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff] text-white shadow-lg shadow-cyan-500/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16 bg-white dark:bg-[#0B102C]">
          <div className="container">
            {filtered.length === 0 ? (
              <div className="text-center py-24 text-muted-foreground">
                No posts in this category yet. Check back soon.
              </div>
            ) : (
              <>
                {/* Featured post */}
                {featured && (
                  <AnimatedSection animation="fade-up" className="mb-10">
                    <Link href={`/blog/${featured.slug}`}>
                      <div className="group grid md:grid-cols-5 gap-8 p-8 md:p-10 rounded-3xl bg-[#f5f6fb] dark:bg-[#1a1b1f] border border-border hover:border-[#4ee8dc]/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer">
                        {/* Decorative visual */}
                        <div className="md:col-span-2 rounded-2xl bg-gradient-to-br from-[#4ee8dc]/10 via-[#3dc4ff]/5 to-transparent border border-[#4ee8dc]/20 flex items-center justify-center min-h-[160px] md:min-h-0">
                          <div className="text-center p-6">
                            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#4ee8dc]/20 to-[#3dc4ff]/20 flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4ee8dc] to-[#3dc4ff]" />
                            </div>
                            <span className="text-xs font-semibold text-[#4ee8dc] uppercase tracking-widest">
                              Featured
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-3 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryColor(featured.category)}`}
                            >
                              {featured.category}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Clock className="w-3.5 h-3.5" />
                              {featured.readTime}
                            </span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-[#4ee8dc] transition-colors duration-200">
                            {featured.title}
                          </h2>
                          <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                            {featured.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{featured.date}</span>
                            <span className="flex items-center gap-1.5 text-sm font-semibold text-[#4ee8dc]">
                              Read article
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                )}

                {/* Rest of posts grid */}
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.map((post, i) => (
                      <AnimatedSection key={post.slug} animation="fade-up" delay={i * 80}>
                        <Link href={`/blog/${post.slug}`}>
                          <div className="group h-full flex flex-col p-8 rounded-3xl bg-[#f5f6fb] dark:bg-[#1a1b1f] border border-border hover:border-[#4ee8dc]/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer">
                            <div className="flex items-center justify-between mb-5">
                              <span
                                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryColor(post.category)}`}
                              >
                                {post.category}
                              </span>
                              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Clock className="w-3.5 h-3.5" />
                                {post.readTime}
                              </span>
                            </div>

                            <h3 className="text-lg font-bold leading-snug mb-3 group-hover:text-[#4ee8dc] transition-colors duration-200">
                              {post.title}
                            </h3>

                            <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                              {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-6 pt-5 border-t border-border">
                              <span className="text-xs text-muted-foreground">{post.date}</span>
                              <span className="flex items-center gap-1 text-xs font-semibold text-[#4ee8dc] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                                Read more <ArrowRight className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </AnimatedSection>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#f5f6fb] dark:bg-[#11142d]">
          <div className="container">
            <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want the latest in your inbox?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join investors and operators who read Eudox Insights every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-[#1a1b1f] border border-border text-sm focus:outline-none focus:border-[#4ee8dc] transition-colors"
                />
                <button className="btn-primary shrink-0">Subscribe</button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">No spam. Unsubscribe anytime.</p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
