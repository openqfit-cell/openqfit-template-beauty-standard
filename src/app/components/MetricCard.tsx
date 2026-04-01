import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
}

export function MetricCard({ value, label, description }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract number from value string (e.g., "80%" -> 80, "3.5x" -> 3.5)
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const duration = 2500; // 2.5 seconds
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      current = Math.min(numericValue, increment * frame);
      
      // Format the number
      const formatted = numericValue % 1 !== 0 
        ? current.toFixed(1) 
        : Math.round(current).toString();
      
      setDisplayValue(formatted + suffix);

      if (frame >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
      <div className="relative z-10">
        <div className="text-4xl md:text-5xl bg-gradient-to-r from-[#5e5ce6] to-[#0071e3] bg-clip-text text-transparent mb-2">
          {displayValue}
        </div>
        <div className="text-lg mb-2">{label}</div>
        {description && (
          <p className="text-sm text-[#86868b]">{description}</p>
        )}
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#5e5ce6]/10 to-[#0071e3]/10 rounded-full blur-2xl" />
    </div>
  );
}