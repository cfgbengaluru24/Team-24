"use client";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";
import { MicIcon, PlusSquare, SendIcon } from "lucide-react";

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

  const [listening, setListening] = useState(false);
  const [capturedText, setCapturedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const recognitionRef = useRef<SpeechRecognition | null>(null);

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
    const apiKey = process.env.GEMINI_API_KEY;
    try {
      recognition.onresult = async (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setCapturedText(transcript);
        setListening(false);
        setIsLoading(true);
        // Send the captured text to the LLM API
        const response = await fetch("/api/gemini", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ apiKey, text: transcript }),
        });
        if (!response.ok) {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
          console.log(response);
        }

        const data = await response.json();
        console.log(data);
        // Update the formData with the data received from LLM
        if (data && data.labels && data.labels[0]) {
          const parsedData = JSON.parse(data.labels[0]);
          setFormData(parsedData);
          saveLogToLocalStorage(parsedData);
        }
      };
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setIsLoading(false);
    }

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  const saveLogToLocalStorage = (logData: FormData) => {
    const existingLogs = JSON.parse(localStorage.getItem("logs") || "[]");
    existingLogs.push(logData);
    localStorage.setItem("logs", JSON.stringify(existingLogs));
    toast({
      title: "Log saved",
      description: "The log entry has been saved to local storage.",
    });
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
