import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Loader2, LogOut, User, Mail, Calendar, Shield } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function Dashboard() {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const [, setLocation] = useLocation();
  const { resolvedTheme } = useTheme();
  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      setLocation("/");
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
    logout();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-[#4ee8dc]" />
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md w-full mx-4">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>Please sign in to access your dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff] hover:opacity-90"
              onClick={() => (window.location.href = getLoginUrl())}
            >
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ImageWithFallback 
              src={resolvedTheme === 'dark' ? "/logo-dark.svg" : "/logo-light.svg"}
              alt="Eudox" 
              className="w-8 h-8"
              fallbackClassName="w-8 h-8"
            />
            <h1 className="text-xl font-bold text-foreground">Eudox Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="outline"
              onClick={handleLogout}
              disabled={logoutMutation.isPending}
              className="border-border hover:bg-accent"
            >
              <LogOut className="w-4 h-4 mr-2" />
              {logoutMutation.isPending ? "Signing out..." : "Sign Out"}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Welcome Section */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, {user.name || "User"}!
            </h2>
            <p className="text-muted-foreground">
              Manage your account and explore Eudox's autonomous deal sourcing platform.
            </p>
          </div>

          {/* Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-[#4ee8dc]" />
                Profile Information
              </CardTitle>
              <CardDescription>Your account details and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted border border-border">
                  <User className="w-5 h-5 text-[#4ee8dc]" />
                  <div>
                    <p className="text-xs text-muted-foreground">Name</p>
                    <p className="text-foreground font-medium">{user.name || "Not provided"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted border border-border">
                  <Mail className="w-5 h-5 text-[#4ee8dc]" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">{user.email || "Not provided"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted border border-border">
                  <Shield className="w-5 h-5 text-[#4ee8dc]" />
                  <div>
                    <p className="text-xs text-muted-foreground">Role</p>
                    <p className="text-foreground font-medium capitalize">{user.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted border border-border">
                  <Calendar className="w-5 h-5 text-[#4ee8dc]" />
                  <div>
                    <p className="text-xs text-muted-foreground">Member Since</p>
                    <p className="text-foreground font-medium">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Get started with Eudox</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-auto py-6 flex-col gap-2 border-border hover:bg-accent hover:border-[#4ee8dc]/50"
                onClick={() => setLocation("/")}
              >
                <div className="w-10 h-10 rounded-full bg-[#4ee8dc]/10 flex items-center justify-center mb-2">
                  <span className="text-2xl">🏠</span>
                </div>
                <span className="font-semibold text-foreground">Home</span>
                <span className="text-xs text-muted-foreground text-center">
                  Return to main website
                </span>
              </Button>

              <Button
                variant="outline"
                className="h-auto py-6 flex-col gap-2 border-border hover:bg-accent hover:border-[#4ee8dc]/50"
                onClick={() => setLocation("/#product")}
              >
                <div className="w-10 h-10 rounded-full bg-[#4ee8dc]/10 flex items-center justify-center mb-2">
                  <span className="text-2xl">🤖</span>
                </div>
                <span className="font-semibold text-foreground">Explore Product</span>
                <span className="text-xs text-muted-foreground text-center">
                  Learn about our AI agent
                </span>
              </Button>

              <Button
                variant="outline"
                className="h-auto py-6 flex-col gap-2 border-border hover:bg-accent hover:border-[#4ee8dc]/50"
                onClick={() => setLocation("/#contact")}
              >
                <div className="w-10 h-10 rounded-full bg-[#4ee8dc]/10 flex items-center justify-center mb-2">
                  <span className="text-2xl">📧</span>
                </div>
                <span className="font-semibold text-foreground">Contact Us</span>
                <span className="text-xs text-muted-foreground text-center">
                  Get in touch with our team
                </span>
              </Button>
            </CardContent>
          </Card>

          {/* Status Banner */}
          <Card className="bg-gradient-to-r from-[#4ee8dc]/10 to-[#3dc4ff]/10 border-[#4ee8dc]/30">
            <CardContent className="py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4ee8dc]/20 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold mb-1">
                    You're in Early Access!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Thank you for being an early adopter. We'll notify you when new features are available.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
