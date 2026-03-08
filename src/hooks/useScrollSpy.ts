import { useEffect, useMemo, useState } from "react";

type ScrollSpyOptions = {
  rootMargin?: string;
  threshold?: number[];
};

export function useScrollSpy(
  sectionIds: string[],
  options: ScrollSpyOptions = {},
) {
  const { rootMargin = "-64px 0px -70% 0px", threshold = [0, 0.1, 0.25, 0.5] } =
    options;
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  const orderMap = useMemo(() => {
    return new Map(sectionIds.map((id, index) => [id, index]));
  }, [sectionIds]);

  useEffect(() => {
    const ratios = new Map<string, number>();
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (targets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }

        const nextId = sectionIds.reduce<string>((best, id) => {
          const bestRatio = ratios.get(best) ?? 0;
          const currentRatio = ratios.get(id) ?? 0;

          if (currentRatio > bestRatio) {
            return id;
          }

          if (currentRatio === bestRatio) {
            const bestOrder = orderMap.get(best) ?? Number.MAX_SAFE_INTEGER;
            const currentOrder = orderMap.get(id) ?? Number.MAX_SAFE_INTEGER;
            if (currentOrder < bestOrder) {
              return id;
            }
          }

          return best;
        }, sectionIds[0] ?? "");

        if (nextId) {
          setActiveId(nextId);
        }
      },
      { rootMargin, threshold },
    );

    for (const target of targets) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, [orderMap, rootMargin, sectionIds, threshold]);

  return activeId;
}
