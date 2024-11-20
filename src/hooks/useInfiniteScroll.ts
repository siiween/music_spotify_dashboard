import { useEffect, useState, useRef } from "react";

interface UseInfiniteScrollProps {
  fetchMore: () => Promise<void>;
  hasMore: boolean; 
  threshold?: number;
}

export default function useInfiniteScroll({ fetchMore, hasMore, threshold = 300 }: UseInfiniteScrollProps) {
  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isFetching || !hasMore) return;

    const callback: IntersectionObserverCallback = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setIsFetching(true);
        fetchMore().finally(() => setIsFetching(false));
      }
    };

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(callback, {
      root: null,
      rootMargin: `${threshold}px`,
      threshold: 1.0,
    });

    if (lastElementRef.current) observer.current.observe(lastElementRef.current);

    return () => observer.current?.disconnect();
  }, [fetchMore, hasMore, isFetching, threshold]);

  return {
    lastElementRef,
    isFetching,
  };
}
