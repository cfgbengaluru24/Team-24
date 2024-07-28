"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const BACKEND_URL = "http://localhost:8000/predict";

export default function ImageUploadForm() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const id = toast.loading("Processing...");
    e.preventDefault();
    if (!files || files.length === 0) {
      setError("Please select at least one image file.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setPrediction(null);

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Prediction failed");
      }

      const result = await response.json();
      toast.success("Prediction successful", { id });
      setPrediction(result.percentage);
    } catch (err) {
      toast.error("An error occurred while processing your request.", { id });
      setError("An error occurred while processing your request.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full items-center justify-center">
      <CardHeader>
        <CardTitle>Image Upload</CardTitle>
        <CardDescription>
          Upload images for lantana species prediction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="images">Images</Label>
              <Input
                id="images"
                type="file"
                multiple
                onChange={(e) => setFiles(e.target.files)}
              />
            </div>
          </div>
          <Button className="mt-4" type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing
              </>
            ) : (
              "Upload and Predict"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        {prediction !== null && (
          <Alert className="mt-4">
            <AlertTitle>Prediction Result</AlertTitle>
            <AlertDescription>Density {prediction}%</AlertDescription>
          </Alert>
        )}
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
}
