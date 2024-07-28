"use client";
import React from "react";
import LabHistStats from "./charts/LabHistory";
import RevHistStats from "./charts/RevenueHistory";
import MarketPlace from "./charts/MarketPlace";
import LruDashboard from "./LruDashboard";
import { useState, useEffect } from "react";

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
};

export default function Home() {
  return (
    <div>
      <div>
        <LruDashboard />
      </div>
      <div className="mb-5 justify-center items-center">
        <LabHistStats />
      </div>
    </div>
  );
}
