"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import MachineTable from "./MachineTable";

import GoalCard from "./GoalCard";
const Lantana = () => {
  return (
    <div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <GoalCard></GoalCard>
        <Card x-chunk="dashboard-01-chunk-5">
          <CardHeader>
            <CardTitle>Machines</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            <Card x-chunk="dashboard-01-chunk-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">20</div>
                <p className="text-xs text-muted-foreground mt-2 flex flex-col">
                  <p>
                    <strong>Active: </strong>90%
                  </p>
                  <p>
                    <strong>Need: </strong>90%
                  </p>
                </p>
              </CardContent>
            </Card>
            <Card>
              <MachineTable></MachineTable>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Lantana;
