import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Calendar, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { trpc } from "@/lib/trpc";
import { blogPosts as staticPosts, getCategoryColor } from "@/lib/blog-data";

function renderContent(content: string) {
  if (!content.trim()) return null;
  return content
    .split(/\n\n+/)
    .map((para, i) => (
      <p key={i} className="text-base md:text-lg text-foreground/80 leading-relaxed">
        {para.trim()}
      </p>
    ));
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const { data: post, isLoading } = trpc.blog.getBySlug.useQuery(slug ?? "", {
    enabled: !!slug,
  });

  // Fall back to static data while loading or if DB isn't set up
  const staticPost = staticPosts.find((p) => p.slug === slug);
  const displayPost = post ?? staticPost;

  if (isLoading && !staticPost) {
    return (
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-6 h-6 rounded-full border-2 border-[#4ee8dc] border-t-transparent animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!displayPost) {
    return (
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <p className="text-muted-foreground text-lg">Post not found.</p>
          <Link href="/blog" className="text-[#4ee8dc] text-sm font-medium hover:underline inline-flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const hasContent = post && "content" in post && post.content?.trim();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-cyan-500/30">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-[#f5f6fb] dark:bg-[#11142d]">
          <div className="container">
            <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to blog
              </Link>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryColor(displayPost.category)}`}>
                  {displayPost.category}
                </span>
                {displayPost.featured && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> Featured
                  </span>
                )}
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {displayPost.date}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  {displayPost.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {displayPost.title}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {displayPost.excerpt}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#4ee8dc]/30 to-transparent" />

        {/* Article body */}
        <section className="py-16 bg-white dark:bg-[#0B102C]">
          <div className="container">
            <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto">
              {hasContent ? (
                <div className="prose-custom space-y-6">
                  {renderContent(post.content)}
                </div>
              ) : (
                /* Placeholder when no content has been written yet */
                <div className="rounded-3xl border border-dashed border-border p-12 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#4ee8dc]/10 to-[#3dc4ff]/10 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#4ee8dc] to-[#3dc4ff]" />
                  </div>
                  <p className="text-muted-foreground text-sm">Full article coming soon.</p>
                  <p className="text-muted-foreground/60 text-xs mt-1">
                    Check back later or{" "}
                    <Link href="/blog" className="text-[#4ee8dc] hover:underline">browse other posts</Link>.
                  </p>
                </div>
              )}
            </AnimatedSection>
          </div>
        </section>

        {/* Bottom nav */}
        <section className="py-16 bg-[#f5f6fb] dark:bg-[#11142d] border-t border-border">
          <div className="container">
            <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto flex items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All posts
              </Link>
              <Link href="/#early-access">
                <button className="btn-primary text-sm">Get Early Access</button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
