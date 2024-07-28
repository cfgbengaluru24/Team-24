import React from "react";
import LabHistStats from "./charts/LabHistory";
import RevHistStats from "./charts/RevenueHistory";
import LruDashboard from "./LruDashboard";

export default function Home() {
  return (
    <div>
      <LruDashboard/>
      <div className="grid grid-cols-2 gap-4 mb-5 justify-center items-center">
        <LabHistStats />
      </div>
    </div>
  );
}
