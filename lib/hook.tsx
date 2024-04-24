"use client";
import { useActiveHeaderContext } from "@/context/ActiveHeaderContextProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { ref, inView } = useInView({ threshold, });
  const { setActiveHeader, lastClick } = useActiveHeaderContext();

  useEffect(() => {
    if (inView && Date.now() - lastClick > 1000) {
      setActiveHeader(sectionName)
    }
  }, [inView, setActiveHeader, lastClick, sectionName]);

  return {
    ref,
  }
}
