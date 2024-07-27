import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CreditCard, IndianRupee, Users } from "lucide-react";

const MarketPlace = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Marketplace</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Lantana Consumption: </strong>90%
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Biomass</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹250</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Lantana Consumption: </strong>90%
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Elephants</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Lantana Consumption: </strong>90%
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Artifacts</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹573</div>
            <p className="text-xs text-muted-foreground">
              +201% since last month
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Lantana Consumption: </strong>90%
            </p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default MarketPlace;
