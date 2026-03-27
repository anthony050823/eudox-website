import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { blogPosts as staticPosts, getCategoryColor } from "@/lib/blog-data";
import { trpc } from "@/lib/trpc";

export default function BlogPreview() {
  const { data: dbPosts } = trpc.blog.list.useQuery();
  const previewPosts = (dbPosts && dbPosts.length > 0 ? dbPosts : staticPosts).slice(0, 3);

  return (
    <section id="blog-preview" className="py-24 bg-white dark:bg-[#0B102C]">
      <div className="container">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#4ee8dc] mb-4">
              Blog
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff]">
                Insights
              </span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#4ee8dc] hover:text-[#3dc4ff] transition-colors duration-200 shrink-0"
          >
            View all posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </AnimatedSection>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewPosts.map((post, i) => (
            <AnimatedSection key={post.slug} animation="fade-up" delay={i * 100}>
              <Link href={`/blog/${post.slug}`}>
                <div className="group h-full flex flex-col p-8 rounded-3xl bg-[#f5f6fb] dark:bg-[#1a1b1f] border border-border hover:border-[#4ee8dc]/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer">
                  {/* Category + read time */}
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

                  {/* Title */}
                  <h3 className="text-lg font-bold leading-snug mb-3 group-hover:text-[#4ee8dc] transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
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

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={300} className="text-center mt-12">
          <Link href="/blog">
            <button className="btn-primary inline-flex items-center gap-2 group">
              Explore all posts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
