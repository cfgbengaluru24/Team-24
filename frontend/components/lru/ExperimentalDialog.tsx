"use client";
import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
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
import { MicIcon, PlusSquare, SendIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";

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

const ExperimentalDialog = () => {
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
  const [listening, setListening] = useState(false);
  const [capturedText, setCapturedText] = useState("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

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

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setCapturedText(transcript);
      setListening(false);

      // Send the captured text to the LLM API
      fetch("/api/analyze-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: transcript }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Analyzed data:", data);
          // Display the result in the dialog or update the state
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="secondary" className="h-7 gap-1 text-sm">
          <PlusSquare className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Experimental</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-md">
        <DialogHeader>
          <DialogTitle>Experimental</DialogTitle>
          <DialogDescription>
            Fill in the details for the new log entry. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2 p-4 bg-background">
          <Textarea
            placeholder="Type your message..."
            className="flex-1"
            value={capturedText}
            onChange={(e) => setCapturedText(e.target.value)}
            disabled={listening}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={startListening}
            disabled={listening}>
            <MicIcon className="w-5 h-5" />
            <span className="sr-only">Voice input</span>
          </Button>
          <Button type="submit">
            <SendIcon className="w-5 h-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExperimentalDialog;
