import { useEffect } from "react";
import { useLocation } from "wouter";

export default function About() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to homepage
    setLocation("/");
    
    // Trigger About Us modal to open after a brief delay
    setTimeout(() => {
      const aboutButton = document.querySelector('[data-about-button]') as HTMLButtonElement;
      if (aboutButton) {
        aboutButton.click();
      }
    }, 100);
  }, [setLocation]);

  return null;
}
