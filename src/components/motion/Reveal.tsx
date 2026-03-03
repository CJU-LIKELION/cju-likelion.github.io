import { useRef } from "react";
import type { ReactNode } from "react";

import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  once?: boolean;
};

export function Reveal({ children, className, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once });

  return (
    <div
      ref={ref}
      className={className}
      data-reveal
      data-inview={inView ? "true" : "false"}
    >
      {children}
    </div>
  );
}
