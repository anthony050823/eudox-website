import { describe, expect, it, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import React from "react";

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("Theme System", () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  it("initializes with system mode by default", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.mode).toBe("system");
    expect(["light", "dark"]).toContain(result.current.resolvedTheme);
  });

  it("can switch to light mode", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.setThemeMode("light");
    });

    expect(result.current.mode).toBe("light");
    expect(result.current.resolvedTheme).toBe("light");
  });

  it("can switch to dark mode", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.setThemeMode("dark");
    });

    expect(result.current.mode).toBe("dark");
    expect(result.current.resolvedTheme).toBe("dark");
  });

  it("persists theme mode to localStorage", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.setThemeMode("dark");
    });

    expect(localStorageMock.getItem("theme-mode")).toBe("dark");
  });

  it("loads theme mode from localStorage", () => {
    localStorageMock.setItem("theme-mode", "dark");

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.mode).toBe("dark");
    expect(result.current.resolvedTheme).toBe("dark");
  });

  it("resolves system mode based on time", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.setThemeMode("system");
    });

    expect(result.current.mode).toBe("system");
    // Resolved theme should be either light or dark based on current time
    expect(["light", "dark"]).toContain(result.current.resolvedTheme);
  });

  it("can cycle through all three modes", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    // Start with system
    expect(result.current.mode).toBe("system");

    // Switch to light
    act(() => {
      result.current.setThemeMode("light");
    });
    expect(result.current.mode).toBe("light");
    expect(result.current.resolvedTheme).toBe("light");

    // Switch to dark
    act(() => {
      result.current.setThemeMode("dark");
    });
    expect(result.current.mode).toBe("dark");
    expect(result.current.resolvedTheme).toBe("dark");

    // Switch back to system
    act(() => {
      result.current.setThemeMode("system");
    });
    expect(result.current.mode).toBe("system");
  });
});
