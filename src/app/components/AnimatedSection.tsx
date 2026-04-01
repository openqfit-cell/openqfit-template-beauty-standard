import { ReactNode } from "react";
import { motion } from "motion/react";

type AnimatedSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
};

export function AnimatedSection({
  children,
  id,
  className = "",
  delay = 0,
  y = 40,
  duration = 0.6,
  once = true,
  amount = 0.10,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}