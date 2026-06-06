"use client";

import { useEffect, useRef } from "react";

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
    <main
      className="fixed inset-0 flex flex-col"
      style={{ background: "#050508" }}
    >
      <div ref={containerRef} className="flex-1 min-h-0 w-full" />
    </main>
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
