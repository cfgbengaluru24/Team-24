import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { File, ListFilter, PlusSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LogDialog from "./LogDialog";
import ExperimentalDialog from "./ExperimentalDialog";

const logs = [
  {
    date: "8/5/2024",
    location: "Baravana Bavi: Bale Bare",
    winchPulling: 33,
    shredding: 0,
    manualCutting: 0,
    manualUprooting: 0,
    hitachiTime: "0",
    shredderTime: "0",
    winchTime: "06:05",
    volume: "3.46",
    weight: "0",
    moisture: "0",
    areaHitachi: "0",
    areaWinch: "0.37",
    areaManual: "0",
    tractorName: "Amandeep Shredder",
    remarks: "3 peoples worked in drying yard till noon",
  },
  {
    date: "8/5/2024",
    location: "Baravana Bavi: Bale Bare",
    winchPulling: 13,
    shredding: 20,
    manualCutting: 0,
    manualUprooting: 0,
    hitachiTime: "0",
    shredderTime: "06:05",
    winchTime: "05:55",
    volume: "25.7",
    weight: "0",
    moisture: "54.7",
    areaHitachi: "0",
    areaWinch: "0.24",
    areaManual: "0",
    tractorName: "Arjun Shredder",
    remarks: "",
  },
  // Add other rows here...
];
const LogTable = () => {
  return (
    <Tabs defaultValue="week">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <ExperimentalDialog></ExperimentalDialog>
          <LogDialog></LogDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Fulfilled
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Export</span>
          </Button>
        </div>
      </div>
      <TabsContent value="week" className="max-w-screen-xl">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Logs</CardTitle>
            <CardDescription>
              Recent logs from this Lantana removal unit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Winch Pulling</TableHead>
                  <TableHead>Shredding</TableHead>
                  <TableHead>Manual Cutting</TableHead>
                  <TableHead>Manual Uprooting</TableHead>
                  <TableHead>Machine Time (Hitachi)</TableHead>
                  <TableHead>Machine Time (Shredder)</TableHead>
                  <TableHead>Machine Time (Winch)</TableHead>
                  <TableHead>Biomass Volume (m³)</TableHead>
                  <TableHead>Weight (tons)</TableHead>
                  <TableHead>Moisture (%)</TableHead>
                  <TableHead>Area (Hitachi)</TableHead>
                  <TableHead>Area (Winch)</TableHead>
                  <TableHead>Area (Manual)</TableHead>
                  <TableHead>Tractor Name</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell>{log.date}</TableCell>
                    <TableCell>{log.location}</TableCell>
                    <TableCell>{log.winchPulling}</TableCell>
                    <TableCell>{log.shredding}</TableCell>
                    <TableCell>{log.manualCutting}</TableCell>
                    <TableCell>{log.manualUprooting}</TableCell>
                    <TableCell>{log.hitachiTime}</TableCell>
                    <TableCell>{log.shredderTime}</TableCell>
                    <TableCell>{log.winchTime}</TableCell>
                    <TableCell>{log.volume}</TableCell>
                    <TableCell>{log.weight}</TableCell>
                    <TableCell>{log.moisture}</TableCell>
                    <TableCell>{log.areaHitachi}</TableCell>
                    <TableCell>{log.areaWinch}</TableCell>
                    <TableCell>{log.areaManual}</TableCell>
                    <TableCell>{log.tractorName}</TableCell>
                    <TableCell>{log.remarks}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LogTable;
