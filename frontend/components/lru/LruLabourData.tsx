"use client"
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Adjust the import path as necessary


import { labourData as initialLabourData } from "@/lib/labour";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const LruLabourData = () => {

  const [labourData, setLabourData] = useState(initialLabourData);
  const [date, setDate] = useState("");
  const [bushesCleared, setBushesCleared] = useState("");

  const handleAddEntry = () => {
    if (date.trim() && parseInt(bushesCleared.trim())>0) {
      const newEntry = {
        Laborer: "Neel",
        Date: date,
        "Bushes Cleared": parseInt(bushesCleared, 10),
      };
      const updatedLabourData = [...labourData, newEntry];
      setLabourData(updatedLabourData);
      localStorage.setItem("labourData", JSON.stringify(updatedLabourData)); // Simulate data persistence
      setDate("");
      setBushesCleared("");
    }
  };

  const filteredData = labourData.filter(
    (entry) => entry.Laborer === "Neel"
  );
  return (
    <div className="w-full">
      <div className="mt-6">
        <h4 className="font-semibold mb-2">Add New Entry</h4>
        <div className="flex flex-col gap-2">
          <Input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Bushes Cleared"
            value={bushesCleared}
            onChange={(e) => setBushesCleared(e.target.value)}
          />
          <Button onClick={handleAddEntry} className="mt-2 mb-4">
            Add Entry
          </Button>
        </div>
      </div>
      <h3 className="font-bold text-lg flex justify-center">
        The List of Bushes Cleared by Neel
      </h3>

      <Table className="w-full">
        <TableCaption className="w-100">Bushes cleared by Neel</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Bushes Cleared</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.Date}</TableCell>
              <TableCell>{entry["Bushes Cleared"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LruLabourData;



