"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface SlideKeyboardNavProps {
  prevHref?: string;
  nextHref?: string;
}

export function SlideKeyboardNav({
  prevHref,
  nextHref
}: SlideKeyboardNavProps) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight" && nextHref) {
        router.push(nextHref);
      }
      if (event.key === "ArrowLeft" && prevHref) {
        router.push(prevHref);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, prevHref, nextHref]);

  return null;
}
