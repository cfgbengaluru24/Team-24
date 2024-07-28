"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MapPinIcon } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import { AreaChart, ResponsiveContainer } from "recharts";
import { data } from "@/components/lands/Land";
import { LandData } from "@/components/lands/Land";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "white",
  },
} satisfies ChartConfig;

const LruDashboard = () => {
  const idToFind = "1";
  const land: LandData | undefined = data.find((item) => item.id === idToFind);
  const [latitude, longitude] = land?.Location
    ? land.Location.split(",").map((coord) => parseFloat(coord.trim()))
    : [0, 0];

  const chartData = [
    { val: "No L", desktop: land?.Distribution[0] },
    { val: "Few", desktop: land?.Distribution[1] },
    { val: "Many", desktop: land?.Distribution[2] },
    { val: "Dom", desktop: land?.Distribution[3] },
    { val: "Im", desktop: land?.Distribution[4] },
  ];

  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setSeconds(5);
      toast(
        `Reminder: Time is up! Have a Check on Restoration Status in ${land?.City}`
      );
    }
  }, [seconds]);

  const position: LatLngTuple = [latitude, longitude];
  return (
    <div>
      <div className="flex flex-row-reverse ml-100">
        <h1 className="text-3xl font-bold mb-4">
          Next Checkup in: {seconds} s
        </h1>
        <ToastContainer />
      </div>
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <Card className="w-full md:w-1/3">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {land?.City}, {land?.State}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Avg Production Of Lantana:</strong>{" "}
                {land?.AvgProductionOfLantana} Bushes
              </p>
              <p>
                <strong>Lands:</strong> {land?.Lands}
              </p>
              <p>
                <strong>Density:</strong> {land?.Density}
              </p>
              <p>
                <strong>Area:</strong> {land?.Area}
              </p>
              <p>
                <strong>Start Date:</strong> {land?.StartDate}
              </p>
              <CardDescription className="mt-5">
                Lantana Distribution in Given Land
              </CardDescription>
              <CardDescription>January - June 2024</CardDescription>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="val"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 4)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={4}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
          <div className="relative h-[500px] w-full md:w-2/3">
            <MapContainer
              center={position}
              zoom={10}
              style={{ height: "100%", width: "100%" }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  {land?.City}, {land?.State}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LruDashboard;
