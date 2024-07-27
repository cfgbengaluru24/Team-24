import React from "react";
import Marketplace from "./Marketplace";
import Lantana from "./Lantana";
import RevHistStats from "../lru/charts/RevenueHistory";

const Admin = () => {
  return (
    <div>
      <div>
        <Lantana></Lantana>
        <Marketplace></Marketplace>
        <RevHistStats />
      </div>
    </div>
  );
};

export default Admin;
