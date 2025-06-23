import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2, // Durasi animasi scroll (detik)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fungsi easing
      direction: "vertical", // Arah scroll (vertical atau horizontal)
      gestureDirection: "vertical", // Arah gesture (vertical atau horizontal)
      smooth: true, // Mengaktifkan/menonaktifkan smooth scroll
      mouseMultiplier: 1, // Pengali kecepatan scroll mouse
      smoothTouch: false, // Smooth scroll untuk sentuhan (biasanya nonaktifkan untuk performa di mobile)
      touchMultiplier: 2, // Pengali kecepatan scroll sentuhan
      infinite: false, // Infinite scroll (true/false)
      // other options
    });

    lenisRef.current = lenis;

    // Animation frame loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
