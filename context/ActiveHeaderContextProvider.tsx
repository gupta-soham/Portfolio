// Context API 👇 for basic State Management
// Recoil could be used for more complex state management, but it's not necessary here.
"use client";
import { createContext, useContext, useState } from "react";
import type { SectionName } from "@/lib/types";


type ActiveHeaderContextType = {
  activeHeader: SectionName;
  setActiveHeader: React.Dispatch<React.SetStateAction<SectionName>>;
  lastClick: number;
  setLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveHeaderContext =
  createContext<ActiveHeaderContextType | null>(null);

export default function ActiveHeaderContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeHeader, setActiveHeader] = useState<SectionName>("Home");
  const [lastClick, setLastClick] = useState<number>(0); // disables observer temporarily 

  return (
    <ActiveHeaderContext.Provider
      value={{
        activeHeader,
        setActiveHeader,
        lastClick,
        setLastClick,
      }}
    >
      {children}
    </ActiveHeaderContext.Provider>
  );
}

export function useActiveHeaderContext() {
  const context = useContext(ActiveHeaderContext);

  if (context === null) {
    throw new Error(
      "useHeaderSection must be used within a ActiveHeaderContextProvider"
    );
  }

  return context;
}
