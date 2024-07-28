import React from "react";
import LabHistStats from "./charts/LabHistory";
import RevHistStats from "./charts/RevenueHistory";
import LruDashboard from "./LruDashboard";

export default function Home() {
  return (
    <div>
      <LruDashboard />
      <div className=" ">
        <LabHistStats />
      </div>
    </div>
  );
}
