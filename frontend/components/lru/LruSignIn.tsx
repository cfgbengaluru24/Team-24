"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import Link from "next/link";

export function LruSignIn() {
  const id = React.useId();

  return (
    <Card>
      <form action="">
      <CardHeader>
        <CardTitle>Enter the following Details</CardTitle>
        <CardDescription>
          Think you are a good Manager? Apply for our trust.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor={`subject-${id}`}>Username:</Label>
          <Input id={`subject-${id}`} placeholder="Username..." required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`subject-${id}`}>Password:</Label>
          <Input id={`subject-${id}`} placeholder="Password..." required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`subject-${id}`}>Number of Labourers Offered:</Label>
          <Input id={`subject-${id}`} placeholder="e.g. 25" required />
        </div>
        <div className="gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor={`area-${id}`}>Location</Label>
            <Select defaultValue="Reserves">
              <SelectTrigger id={`area-${id}`} aria-label="Area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SatyaMangalam">SatyaMangalam</SelectItem>
                <SelectItem value="Bandipur">Bandipur</SelectItem>
                <SelectItem value="Reserves">Tiger Reserves Kerala</SelectItem>
                <SelectItem value="Madumalai">Madumalai</SelectItem>
                <SelectItem value="TamilNadu">TamilNadu</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-100">
        <Button type="submit">Submit</Button>
      </CardFooter>
      </form>
    </Card>
  );
}
export default LruSignIn;
