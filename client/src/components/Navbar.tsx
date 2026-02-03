import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const { resolvedTheme, mode, setThemeMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "Features", href: "#features" },
    { name: "Why Eudox", href: "#comparison" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/80 dark:bg-[#0B102C]/80 backdrop-blur-md border-border/40 py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo with theme toggle on mobile */}
          <button
            onClick={(e) => {
              // Only toggle theme on mobile, navigate on desktop
              if (window.innerWidth < 768) {
                e.preventDefault();
                // Cycle through themes: light -> dark -> system -> light
                if (mode === 'light') setThemeMode('dark');
                else if (mode === 'dark') setThemeMode('system');
                else setThemeMode('light');
              } else {
                setLocation('/');
              }
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl overflow-hidden transition-transform group-hover:scale-105">
              <ImageWithFallback 
                src={resolvedTheme === 'dark' ? "/logo-dark.svg" : "/logo-light.svg"}
                alt="Eudox Logo" 
                className="w-full h-full object-contain"
                fallbackClassName="w-full h-full"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#11142d] dark:text-white">
              Eudox AI
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button 
            className="bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff] hover:opacity-90 text-white border-0 rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
            onClick={() => {
              const element = document.querySelector("#early-access");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Early Access
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-base font-medium py-2 border-b border-border/50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <Button 
              className="w-full justify-center bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff] text-white border-0 rounded-xl"
              onClick={() => {
                const element = document.querySelector("#early-access");
                element?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
            >
              Get Early Access
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
