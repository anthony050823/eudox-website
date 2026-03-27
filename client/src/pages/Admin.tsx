import { useState, useEffect, useCallback } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Search, Loader2, Lock, Plus, Pencil, Trash2, Star, Eye, EyeOff, LogOut, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { useTheme } from "@/contexts/ThemeContext";
import { toast } from "sonner";

const SESSION_KEY = "eudox_admin_pw";

const CATEGORIES = ["Insights", "Product", "Industry", "Company"] as const;
type Category = (typeof CATEGORIES)[number];

interface PostForm {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  date: string;
  readTime: string;
  featured: boolean;
  published: boolean;
}

const emptyForm: PostForm = {
  slug: "", title: "", excerpt: "", content: "",
  category: "Insights", date: "", readTime: "", featured: false, published: true,
};

function toSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

// ─── Login Screen ────────────────────────────────────────────────────────────

function LoginScreen({ onSuccess }: { onSuccess: (pw: string) => void }) {
  const { resolvedTheme } = useTheme();
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const verify = trpc.blog.verify.useMutation({
    onSuccess: () => {
      sessionStorage.setItem(SESSION_KEY, pw);
      onSuccess(pw);
    },
    onError: () => setError("Incorrect password."),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    verify.mutate({ password: pw });
  };

  return (
    <div className="min-h-screen bg-[#0B102C] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 mb-4">
            <ImageWithFallback
              src="/logo-dark.svg"
              alt="Eudox"
              className="w-full h-full object-contain"
              fallbackClassName="w-full h-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-white">Eudox Admin</h1>
          <p className="text-white/40 text-sm mt-1">Enter your password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="password"
              placeholder="Password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4ee8dc]/50 transition-colors text-sm"
              autoFocus
            />
          </div>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <button
            type="submit"
            disabled={!pw || verify.isPending}
            className="w-full bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff] text-white font-semibold rounded-xl py-3 text-sm disabled:opacity-50 flex items-center justify-center gap-2 transition-opacity"
          >
            {verify.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Blog Post Form Dialog ────────────────────────────────────────────────────

function PostDialog({
  open,
  onClose,
  initialData,
  adminPassword,
  onSaved,
  editId,
}: {
  open: boolean;
  onClose: () => void;
  initialData?: PostForm;
  adminPassword: string;
  onSaved: () => void;
  editId?: number;
}) {
  const [form, setForm] = useState<PostForm>(initialData || emptyForm);

  useEffect(() => {
    setForm(initialData || emptyForm);
  }, [initialData, open]);

  const set = (field: keyof PostForm, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const createMutation = trpc.blog.create.useMutation({
    onSuccess: () => { toast.success("Post created"); onSaved(); onClose(); },
    onError: (e) => toast.error(e.message),
  });

  const updateMutation = trpc.blog.update.useMutation({
    onSuccess: () => { toast.success("Post updated"); onSaved(); onClose(); },
    onError: (e) => toast.error(e.message),
  });

  const isPending = createMutation.isPending || updateMutation.isPending;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { password: adminPassword, ...form };
    if (editId !== undefined) {
      updateMutation.mutate({ ...payload, id: editId });
    } else {
      createMutation.mutate(payload);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{editId !== undefined ? "Edit Post" : "New Post"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 space-y-1.5">
              <Label>Title</Label>
              <Input
                value={form.title}
                onChange={(e) => {
                  set("title", e.target.value);
                  if (!editId) set("slug", toSlug(e.target.value));
                }}
                placeholder="Post title"
                required
              />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label>Slug</Label>
              <Input
                value={form.slug}
                onChange={(e) => set("slug", e.target.value)}
                placeholder="url-slug"
                required
              />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label>Excerpt</Label>
              <Textarea
                value={form.excerpt}
                onChange={(e) => set("excerpt", e.target.value)}
                placeholder="Short description shown in previews"
                rows={3}
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label>Category</Label>
              <Select value={form.category} onValueChange={(v) => set("category", v as Category)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Read Time</Label>
              <Input value={form.readTime} onChange={(e) => set("readTime", e.target.value)} placeholder="7 min read" required />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label>Date</Label>
              <Input value={form.date} onChange={(e) => set("date", e.target.value)} placeholder="March 18, 2026" required />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label>Content (optional)</Label>
              <Textarea
                value={form.content}
                onChange={(e) => set("content", e.target.value)}
                placeholder="Full article content..."
                rows={6}
              />
            </div>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.featured} onChange={(e) => set("featured", e.target.checked)} className="w-4 h-4 accent-[#4ee8dc]" />
                <span className="text-sm">Featured</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.published} onChange={(e) => set("published", e.target.checked)} className="w-4 h-4 accent-[#4ee8dc]" />
                <span className="text-sm">Published</span>
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={isPending} className="bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff] text-white border-0">
              {isPending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              {editId !== undefined ? "Save Changes" : "Create Post"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── Admin Dashboard ──────────────────────────────────────────────────────────

function AdminDashboard({ adminPassword, onSignOut }: { adminPassword: string; onSignOut: () => void }) {
  const [blogSearch, setBlogSearch] = useState("");
  const [earlyAccessSearch, setEarlyAccessSearch] = useState("");
  const [feedbackSearch, setFeedbackSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editPost, setEditPost] = useState<{ id: number; form: PostForm } | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("blog");

  // Blog posts (public list — includes all for admin via adminList mutation)
  const blogAdminList = trpc.blog.adminList.useMutation();
  const earlyAccessList = trpc.secureAdmin.earlyAccessList.useMutation();
  const feedbackList = trpc.secureAdmin.feedbackList.useMutation();

  const fetchBlogPosts = useCallback(() => {
    blogAdminList.mutate({ password: adminPassword });
  }, [adminPassword]);

  useEffect(() => { fetchBlogPosts(); }, []);

  useEffect(() => {
    if (activeTab === "early-access" && !earlyAccessList.data) {
      earlyAccessList.mutate({ password: adminPassword });
    }
    if (activeTab === "feedback" && !feedbackList.data) {
      feedbackList.mutate({ password: adminPassword });
    }
  }, [activeTab]);

  const deleteMutation = trpc.blog.delete.useMutation({
    onSuccess: () => { toast.success("Post deleted"); setDeleteId(null); fetchBlogPosts(); },
    onError: (e) => toast.error(e.message),
  });

  const posts = blogAdminList.data || [];
  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(blogSearch.toLowerCase()) ||
      p.slug.toLowerCase().includes(blogSearch.toLowerCase())
  );

  const earlyAccess = earlyAccessList.data || [];
  const filteredEarlyAccess = earlyAccess.filter(
    (r) =>
      r.firstName.toLowerCase().includes(earlyAccessSearch.toLowerCase()) ||
      r.lastName.toLowerCase().includes(earlyAccessSearch.toLowerCase()) ||
      r.email.toLowerCase().includes(earlyAccessSearch.toLowerCase()) ||
      r.company.toLowerCase().includes(earlyAccessSearch.toLowerCase())
  );

  const feedback = feedbackList.data || [];
  const filteredFeedback = feedback.filter(
    (f) =>
      f.name.toLowerCase().includes(feedbackSearch.toLowerCase()) ||
      f.email.toLowerCase().includes(feedbackSearch.toLowerCase()) ||
      f.message.toLowerCase().includes(feedbackSearch.toLowerCase())
  );

  const exportToCSV = (data: Record<string, unknown>[], filename: string) => {
    if (!data.length) return;
    const headers = Object.keys(data[0]);
    const rows = data.map((row) =>
      headers.map((h) => {
        const val = row[h];
        const str = val instanceof Date ? format(val, "yyyy-MM-dd HH:mm:ss") : String(val ?? "");
        return str.includes(",") || str.includes('"') ? `"${str.replace(/"/g, '""')}"` : str;
      }).join(",")
    );
    const blob = new Blob([[headers.join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${filename}_${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-white dark:bg-[#0B102C]/80 sticky top-0 z-10">
        <div className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7">
              <ImageWithFallback src="/logo-light.svg" alt="Eudox" className="dark:hidden w-full h-full object-contain" fallbackClassName="w-full h-full" />
              <ImageWithFallback src="/logo-dark.svg" alt="Eudox" className="hidden dark:block w-full h-full object-contain" fallbackClassName="w-full h-full" />
            </div>
            <span className="font-bold text-lg">Admin Dashboard</span>
          </div>
          <Button variant="outline" size="sm" onClick={onSignOut} className="gap-2">
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </Button>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="blog">Blog Posts {posts.length > 0 && `(${posts.length})`}</TabsTrigger>
            <TabsTrigger value="early-access">Early Access {earlyAccess.length > 0 && `(${earlyAccess.length})`}</TabsTrigger>
            <TabsTrigger value="feedback">Feedback {feedback.length > 0 && `(${feedback.length})`}</TabsTrigger>
          </TabsList>

          {/* ── Blog Posts Tab ── */}
          <TabsContent value="blog">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle>Blog Posts</CardTitle>
                    <CardDescription>Create, edit, and manage blog posts</CardDescription>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-56">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search posts..." value={blogSearch} onChange={(e) => setBlogSearch(e.target.value)} className="pl-9" />
                    </div>
                    <Button className="bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff] text-white border-0 gap-2 shrink-0" onClick={() => { setEditPost(null); setDialogOpen(true); }}>
                      <Plus className="w-4 h-4" />
                      New Post
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {blogAdminList.isPending ? (
                  <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>
                ) : filteredPosts.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead className="text-center">Featured</TableHead>
                          <TableHead className="text-center">Published</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredPosts.map((post) => (
                          <TableRow key={post.id}>
                            <TableCell className="font-medium max-w-xs">
                              <div className="truncate">{post.title}</div>
                              <div className="text-xs text-muted-foreground truncate">/blog/{post.slug}</div>
                            </TableCell>
                            <TableCell>
                              <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted">{post.category}</span>
                            </TableCell>
                            <TableCell className="whitespace-nowrap text-sm text-muted-foreground">{post.date}</TableCell>
                            <TableCell className="text-center">
                              {post.featured ? <Star className="w-4 h-4 text-amber-400 mx-auto" /> : <span className="text-muted-foreground/30">—</span>}
                            </TableCell>
                            <TableCell className="text-center">
                              {post.published
                                ? <CheckCircle className="w-4 h-4 text-emerald-500 mx-auto" />
                                : <EyeOff className="w-4 h-4 text-muted-foreground mx-auto" />}
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => {
                                    setEditPost({
                                      id: post.id,
                                      form: {
                                        slug: post.slug,
                                        title: post.title,
                                        excerpt: post.excerpt,
                                        content: post.content,
                                        category: post.category as Category,
                                        date: post.date,
                                        readTime: post.readTime,
                                        featured: post.featured,
                                        published: post.published,
                                      },
                                    });
                                    setDialogOpen(true);
                                  }}
                                >
                                  <Pencil className="w-3.5 h-3.5" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-destructive hover:text-destructive"
                                  onClick={() => setDeleteId(post.id)}
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    {blogSearch ? "No posts match your search" : "No blog posts yet — create your first one"}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Early Access Tab ── */}
          <TabsContent value="early-access">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle>Early Access Requests</CardTitle>
                    <CardDescription>View and export signups</CardDescription>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search..." value={earlyAccessSearch} onChange={(e) => setEarlyAccessSearch(e.target.value)} className="pl-9" />
                    </div>
                    <Button variant="outline" size="icon" onClick={() => exportToCSV(earlyAccess as Record<string, unknown>[], "early_access")} disabled={!earlyAccess.length}>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {earlyAccessList.isPending ? (
                  <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>
                ) : filteredEarlyAccess.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Company</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredEarlyAccess.map((req) => (
                          <TableRow key={req.id}>
                            <TableCell className="font-medium">{req.firstName} {req.lastName}</TableCell>
                            <TableCell>{req.email}</TableCell>
                            <TableCell>{req.company}</TableCell>
                            <TableCell>{req.role}</TableCell>
                            <TableCell className="max-w-xs truncate">{req.message || "—"}</TableCell>
                            <TableCell className="whitespace-nowrap">{format(new Date(req.createdAt), "MMM d, yyyy")}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    {earlyAccessSearch ? "No results found" : "No early access requests yet"}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Feedback Tab ── */}
          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle>Feedback Submissions</CardTitle>
                    <CardDescription>View and export feedback</CardDescription>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search..." value={feedbackSearch} onChange={(e) => setFeedbackSearch(e.target.value)} className="pl-9" />
                    </div>
                    <Button variant="outline" size="icon" onClick={() => exportToCSV(feedback as Record<string, unknown>[], "feedback")} disabled={!feedback.length}>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {feedbackList.isPending ? (
                  <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>
                ) : filteredFeedback.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredFeedback.map((fb) => (
                          <TableRow key={fb.id}>
                            <TableCell className="font-medium">{fb.name}</TableCell>
                            <TableCell>{fb.email}</TableCell>
                            <TableCell className="max-w-md">{fb.message}</TableCell>
                            <TableCell className="whitespace-nowrap">{format(new Date(fb.createdAt), "MMM d, yyyy")}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    {feedbackSearch ? "No results found" : "No feedback yet"}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Create/Edit Dialog */}
      <PostDialog
        open={dialogOpen}
        onClose={() => { setDialogOpen(false); setEditPost(null); }}
        initialData={editPost?.form}
        editId={editPost?.id}
        adminPassword={adminPassword}
        onSaved={fetchBlogPosts}
      />

      {/* Delete Confirmation */}
      <Dialog open={deleteId !== null} onOpenChange={(o) => !o && setDeleteId(null)}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete Post</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">This action cannot be undone. The post will be permanently removed.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button
              variant="destructive"
              disabled={deleteMutation.isPending}
              onClick={() => deleteId !== null && deleteMutation.mutate({ password: adminPassword, id: deleteId })}
            >
              {deleteMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Root Component ───────────────────────────────────────────────────────────

export default function Admin() {
  const stored = sessionStorage.getItem(SESSION_KEY) || "";
  const [adminPassword, setAdminPassword] = useState(stored);
  const [isAuthed, setIsAuthed] = useState(!!stored);

  const handleSuccess = (pw: string) => {
    setAdminPassword(pw);
    setIsAuthed(true);
  };

  const handleSignOut = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAdminPassword("");
    setIsAuthed(false);
  };

  if (!isAuthed) return <LoginScreen onSuccess={handleSuccess} />;
  return <AdminDashboard adminPassword={adminPassword} onSignOut={handleSignOut} />;
}
