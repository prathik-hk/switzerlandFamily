"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedStatCardProps {
  endValue: number;
  suffix?: string;
  label: string;
  subLabel?: string;
  duration?: number;
  theme?: "light" | "dark";
  className?: string;
}

export function AnimatedStatCard({ 
  endValue, 
  suffix = "", 
  label, 
  subLabel,
  duration = 2000,
  theme = "dark",
  className = ""
}: AnimatedStatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, endValue, duration]);

  const isLight = theme === "light";
  
  return (
    <div 
      ref={ref}
      className={`relative p-8 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 ${
        isLight 
          ? "bg-[#0F172A] border border-transparent shadow-lg" 
          : "bg-white border border-slate-200 shadow-sm"
      } ${className}`}
    >
      <div className={`text-4xl md:text-5xl font-bold font-satoshi mb-2 mt-4 tracking-tight ${isLight ? "text-white" : "text-slate-900"}`}>
        {count}{suffix}
      </div>
      <div className={`text-sm uppercase tracking-widest font-bold mb-2 text-center ${isLight ? "text-primary" : "text-primary"}`}>
        {label}
      </div>
      {subLabel && (
        <div className={`text-sm text-center font-medium ${isLight ? "text-slate-400" : "text-slate-500"}`}>
          {subLabel}
        </div>
      )}
    </div>
  );
}
