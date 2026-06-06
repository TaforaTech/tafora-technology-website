"use client";

import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

export default function SchedulePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function init() {
      if (window.Calendly && container) {
        container.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/tafora-technology/new-meeting",
          parentElement: container,
        });
      }
    }

    if (window.Calendly) {
      init();
    } else {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = init;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main
        className="fixed inset-0 pt-16"
        style={{ background: "#050508" }}
      >
        <div ref={containerRef} className="w-full h-full" />
      </main>
    </>
  );
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}
