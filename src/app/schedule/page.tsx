"use client";

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

import { useEffect, useRef } from "react";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SchedulePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && window.Calendly && containerRef.current) {
      initialized.current = true;
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/info-tafora/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1",
        parentElement: containerRef.current,
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Schedule a Call</span>
          </h1>
          <p className="text-muted max-w-xl mx-auto">
            Pick a time that works for you. We&apos;ll discuss your project and
            how we can help bring your vision to life.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <div
            ref={containerRef}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (!initialized.current && window.Calendly && containerRef.current) {
              initialized.current = true;
              window.Calendly.initInlineWidget({
                url: "https://calendly.com/info-tafora/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1",
                parentElement: containerRef.current,
              });
            }
          }}
        />
      </main>
      <Footer />
    </>
  );
}
