"use client";
// LandCard.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MapPinIcon } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";

interface LandData {
  Lands: string;
  Location: string;
  Density: number;
  Area: number;
  State: string;
  City: string;
  LRURepresentative: number;
  StartDate: string;
  EndDate: string;
  Distribution: number[];
}

interface LandCardProps {
  landData: LandData;
}

const LandCard: React.FC<LandCardProps> = ({ landData }) => {
  const [latitude, longitude] = landData.Location
    ? landData.Location.split(",").map((coord) => parseFloat(coord.trim()))
    : [0, 0];

  const position: LatLngTuple = [latitude, longitude];

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{landData.Lands}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5 text-muted-foreground" />
            <p>
              {landData.City}, {landData.State}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>Location: {landData.Location}</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Density: {landData.Density}%</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Area: {landData.Area}Ha</p>
          </div>
          <div className="flex items-center gap-2">
            <p>LRU Representative: {landData.LRURepresentative}</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <p>Start Date: {landData.StartDate}</p>
              <p>End Date: {landData.EndDate}</p>
            </div>
          </div>
          <div className="relative h-[200px] w-full">
            <MapContainer
              center={position}
              zoom={10}
              style={{ height: "100%", width: "100%" }}
              >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  {landData.City}, {landData.State}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandCard;
