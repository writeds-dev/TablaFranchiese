"use client";

import { useEffect } from "react";

export default function PixelScripts() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("init", "1381085842889541");
      window.fbq("track", "PageView");
    }
  }, []);

  return null;
}
