// components/AccessibilityScript.tsx
"use client";
import { useEffect } from "react";

export default function AccessibilityScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://acsbapp.com/apps/app/dist/js/app.js";
    script.async = true;
    script.onload = () => {
      if (window?.['acsbJS']) {
        window?.['acsbJS'].init();
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
