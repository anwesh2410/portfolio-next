"use client";

import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

const SPLASH_DURATION_MS = 900;
const SPLASH_SESSION_KEY = "splash-shown";

const SplashScreenManager = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isHome = window.location.pathname === "/";
    if (!isHome) return;
    // Show splash only once per session — repeat visits skip it entirely.
    const alreadyShown = sessionStorage.getItem(SPLASH_SESSION_KEY);
    if (alreadyShown) return;
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem(SPLASH_SESSION_KEY, "1");
    }, SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <SplashScreen finishLoading={() => setIsLoading(false)} />
  ) : (
    <>{children}</>
  );
};

export default SplashScreenManager;
