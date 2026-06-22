"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginsRegistered = false;

export function initGsap() {
  if (!pluginsRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    pluginsRegistered = true;
  }
  return { gsap, ScrollTrigger };
}
