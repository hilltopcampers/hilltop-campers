"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * DelayedAnalytics - Loads Google Analytics only after user interaction
 * This improves Lighthouse scores by not loading the 168KB GA script on initial page load
 * GA will load after: scroll, click, touch, or keydown
 */
export default function DelayedAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Events that trigger GA loading
    const events = ["scroll", "click", "touchstart", "keydown"];

    const loadAnalytics = () => {
      setShouldLoad(true);
      // Remove all event listeners after first interaction
      for (const event of events) {
        window.removeEventListener(event, loadAnalytics);
      }
    };

    // Also load after 5 seconds if no interaction (for users who just read)
    const timeout = setTimeout(() => {
      loadAnalytics();
    }, 5000);

    // Add event listeners
    for (const event of events) {
      window.addEventListener(event, loadAnalytics, { passive: true });
    }

    return () => {
      clearTimeout(timeout);
      for (const event of events) {
        window.removeEventListener(event, loadAnalytics);
      }
    };
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-N81PCVZF0D"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N81PCVZF0D');
        `}
      </Script>
    </>
  );
}
