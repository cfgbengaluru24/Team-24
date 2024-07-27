"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusSquare } from "lucide-react";

interface FormData {
  date: string;
  location: string;
  winchPulling: string;
  shredding: string;
  manualCutting: string;
  manualUprooting: string;
  hitachiTime: string;
  shredderTime: string;
  winchTime: string;
  volume: string;
  weight: string;
  moisture: string;
  areaHitachi: string;
  areaWinch: string;
  areaManual: string;
  tractorName: string;
  remarks: string;
}

const LogDialog: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    date: "",
    location: "",
    winchPulling: "",
    shredding: "",
    manualCutting: "",
    manualUprooting: "",
    hitachiTime: "",
    shredderTime: "",
    winchTime: "",
    volume: "",
    weight: "",
    moisture: "",
    areaHitachi: "",
    areaWinch: "",
    areaManual: "",
    tractorName: "",
    remarks: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="default" className="h-7 gap-1 text-sm">
          <PlusSquare className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Add</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-md">
        <DialogHeader>
          <DialogTitle>Add Log</DialogTitle>
          <DialogDescription>
            Fill in the details for the new log entry. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {currentStep === 1 && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Date
                  </Label>
                  <Input
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="winchPulling" className="text-right">
                    Winch Pulling
                  </Label>
                  <Input
                    id="winchPulling"
                    value={formData.winchPulling}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="shredding" className="text-right">
                    Shredding
                  </Label>
                  <Input
                    id="shredding"
                    value={formData.shredding}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="manualCutting" className="text-right">
                    Manual Cutting
                  </Label>
                  <Input
                    id="manualCutting"
                    value={formData.manualCutting}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="manualUprooting" className="text-right">
                    Manual Uprooting
                  </Label>
                  <Input
                    id="manualUprooting"
                    value={formData.manualUprooting}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="hitachiTime" className="text-right">
                    Hitachi Time
                  </Label>
                  <Input
                    id="hitachiTime"
                    value={formData.hitachiTime}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="shredderTime" className="text-right">
                    Shredder Time
                  </Label>
                  <Input
                    id="shredderTime"
                    value={formData.shredderTime}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="winchTime" className="text-right">
                    Winch Time
                  </Label>
                  <Input
                    id="winchTime"
                    value={formData.winchTime}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="volume" className="text-right">
                    Volume
                  </Label>
                  <Input
                    id="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="weight" className="text-right">
                    Weight
                  </Label>
                  <Input
                    id="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="moisture" className="text-right">
                    Moisture
                  </Label>
                  <Input
                    id="moisture"
                    value={formData.moisture}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
              </>
            )}
            {currentStep === 3 && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="areaHitachi" className="text-right">
                    Area Hitachi
                  </Label>
                  <Input
                    id="areaHitachi"
                    value={formData.areaHitachi}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="areaWinch" className="text-right">
                    Area Winch
                  </Label>
                  <Input
                    id="areaWinch"
                    value={formData.areaWinch}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="areaManual" className="text-right">
                    Area Manual
                  </Label>
                  <Input
                    id="areaManual"
                    value={formData.areaManual}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="tractorName" className="text-right">
                    Tractor Name
                  </Label>
                  <Input
                    id="tractorName"
                    value={formData.tractorName}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="remarks" className="text-right">
                    Remarks
                  </Label>
                  <Input
                    id="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
              </>
            )}
          </div>
          <DialogFooter>
            {currentStep > 1 && (
              <Button type="button" onClick={handleBack}>
                Back
              </Button>
            )}
            {currentStep < 3 ? ( // Change the number to the total number of steps
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button type="submit">Save changes</Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LogDialog;
