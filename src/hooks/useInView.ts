import { useEffect, useState } from "react";
import type { RefObject } from "react";

type UseInViewOptions = {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: UseInViewOptions = {},
) {
  const { rootMargin = "-10% 0px -20% 0px", threshold = 0.15, once = true } =
    options;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) {
            observer.unobserve(target);
          }
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [once, ref, rootMargin, threshold]);

  return inView;
}
