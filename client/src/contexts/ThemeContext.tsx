import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeMode = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
}

/**
 * Determines if current time is in dark mode range (6 PM - 6 AM)
 */
function isDarkTimeRange(): boolean {
  const now = new Date();
  const hour = now.getHours();
  // Dark mode: 18:00 (6 PM) to 05:59 (before 6 AM)
  return hour >= 18 || hour < 6;
}

/**
 * Resolves the actual theme based on mode
 */
function resolveTheme(mode: ThemeMode): ResolvedTheme {
  if (mode === "system") {
    return isDarkTimeRange() ? "dark" : "light";
  }
  return mode;
}

export function ThemeProvider({
  children,
  defaultMode = "system",
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem("theme-mode");
    return (stored as ThemeMode) || defaultMode;
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(mode)
  );

  // Update resolved theme when mode changes or time passes
  useEffect(() => {
    const updateTheme = () => {
      const newResolvedTheme = resolveTheme(mode);
      setResolvedTheme(newResolvedTheme);
    };

    updateTheme();

    // If in system mode, check every minute for time-based changes
    if (mode === "system") {
      const interval = setInterval(updateTheme, 60000); // Check every minute
      return () => clearInterval(interval);
    }
  }, [mode]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (resolvedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [resolvedTheme]);

  // Persist mode to localStorage
  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  const setThemeMode = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode, resolvedTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
