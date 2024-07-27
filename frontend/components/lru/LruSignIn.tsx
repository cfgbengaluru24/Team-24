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
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";

export function LruSignIn() {
  const id = React.useId();
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // console.log("Submitted");
    router.push("/signup");
  };

  return (
    <Card>
        <CardHeader>
          <CardTitle>Enter the following Details</CardTitle>
          <CardDescription>
            Think you are a good Manager? Apply for our trust.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor={`subject-${id}`}>Username:</Label>
            <Input id={`subject-${id}`} placeholder="Username..." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`subject-${id}`}>Password:</Label>
            <Input
              id={`subject-${id}`}
              type="password"
              placeholder="Password..."
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`subject-${id}`}>
              Number of Labourers Offered:
            </Label>
            <Input id={`subject-${id}`} placeholder="e.g. 25" />
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
                  <SelectItem value="Reserves">
                    Tiger Reserves Kerala
                  </SelectItem>
                  <SelectItem value="Madumalai">Madumalai</SelectItem>
                  <SelectItem value="TamilNadu">TamilNadu</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-100">
          <Button type="submit"><Link href="/home">Submit</Link></Button>
        </CardFooter>
    </Card>
  );
}
export default LruSignIn;
