"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      // Initialize Clarity with your project id
      Clarity.init("sx8f83qxvx");
    } catch (err) {
      // swallow init errors to avoid breaking the app
      // eslint-disable-next-line no-console
      console.warn("Clarity init failed:", err);
    }
  }, []);

  return null;
}
