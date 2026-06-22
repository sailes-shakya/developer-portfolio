"use client";

import { createContext, useContext } from "react";

export const ScrollContext = createContext({ lenis: null, ready: false });

export function useScroll() {
  return useContext(ScrollContext);
}
