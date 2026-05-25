"use client";

import React, { useEffect, useRef, useState } from "react";
import { Users, Calendar, Award, TrendingUp } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Workers Deployed",
    description: "Placed across Malaysia",
    href: undefined as string | undefined,
    color: "text-royal-400",
    bgColor: "bg-royal-500/10",
    noFormat: false,
  },
  {
    icon: Calendar,
    value: 2023,
    suffix: "",
    label: "Year Founded",
    description: "Government licensed & trusted",
    href: undefined as string | undefined,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    noFormat: true,
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Licensed & Compliant",
    description: "License No. RAS838225",
    href: "/mughal-house-license.pdf",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    noFormat: false,
  },
  {
    icon: TrendingUp,
    value: 15,
    suffix: "+",
    label: "Industry Sectors",
    description: "Manufacturing to construction",
    href: undefined as string | undefined,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    noFormat: false,
  },
];

function AnimatedCounter({
  target,
  suffix,
  duration = 2000,
  isVisible,
  noFormat = false,
}: {
  target: number;
  suffix: string;
  duration?: number;
  isVisible: boolean;
  noFormat?: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const startValue = 0;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (target - startValue) * eased);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <span>{noFormat ? count : count.toLocaleString()}{suffix}</span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { ref: revealRef, inView } = useReveal<HTMLDListElement>(0.1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-12 sm:py-14 lg:py-20 overflow-hidden"
      style={{ background: "linear-gradient(to bottom right, #f4f8ff, #eaeff8)" }}
      aria-label="Company statistics"
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-royal-500/30 to-transparent" aria-hidden="true" />
      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-royal-500/20 to-transparent" aria-hidden="true" />

      <div className="container-xl">
        <dl ref={revealRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-8">
          {stats.map(({ icon: Icon, value, suffix, label, description, href, color, bgColor, noFormat }, idx) => (
            <div
              key={label}
              className={`card-lift card-lift-light card-sheen reveal-scale ${inView ? "visible" : ""} flex flex-col items-center text-center p-4 sm:p-5 lg:p-6 rounded-2xl bg-white border border-dark-100 group`}
              style={{ "--d": `${idx * 90}ms` } as React.CSSProperties}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${bgColor} flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110`}
                aria-hidden="true"
              >
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />
              </div>
              <dt className="sr-only">{label}</dt>
              <dd
                className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl ${color} leading-none mb-1.5 sm:mb-2`}
                aria-live="polite"
              >
                <AnimatedCounter target={value} suffix={suffix} isVisible={isVisible} noFormat={noFormat} />
              </dd>
              <p className="text-dark-900 font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{label}</p>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-500 text-[10px] sm:text-xs leading-relaxed hover:text-emerald-600 transition-colors duration-200 underline underline-offset-2 decoration-dotted"
                >
                  {description}
                </a>
              ) : (
                <p className="text-dark-500 text-[10px] sm:text-xs leading-relaxed">{description}</p>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
