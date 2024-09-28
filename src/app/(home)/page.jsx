"use client";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Banner from "@/components/frontend/Banner";
import Features from "@/components/frontend/Features";
import FadeCaruosel from "@/components/frontend/FadeCaruosel";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <section className="landing pb-10">
        <Banner />
        <Features />
        <FadeCaruosel />
      </section>
    </>
  );
}
