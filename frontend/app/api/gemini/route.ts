import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { NextRequest, NextResponse as NextResponseType } from "next/server";

interface RequestBody {
  apiKey: string;
  text: string;
}

export async function POST(req: NextRequest): Promise<NextResponseType> {
  const body: RequestBody = await req.json();
  const { apiKey, text } = body;
  console.log(body);

  if (!apiKey || !text) {
    return NextResponseType.json("Missing apiKey or text", { status: 400 });
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const run = async (input: string): Promise<string> => {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: `Given the following text, extract and map the relevant information to the corresponding fields. The fields are:
                - Date
                - Location
                - Winch Pulling
                - Shredding
                - Manual Cutting
                - Manual Uprooting
                - Hitachi Time
                - Shredder Time
                - Winch Time
                - Volume
                - Weight
                - Moisture
                - Area Hitachi
                - Area Winch
                - Area Manual
                - Tractor Name
                - Remarks
  
                Example input: "The operation took place on 2023-07-25 at Site A. The winch pulled 100kg of material, and shredding processed 150kg. Manual cutting and uprooting were minimal. The Hitachi worked for 2 hours, while the shredder and winch worked for 1 hour each. The total volume was 200 cubic meters, and the weight was 250kg with a moisture level of 20%. Hitachi covered 50 square meters, the winch covered 30 square meters, and manual operations covered 20 square meters. Tractor X was used. Overall, it was a successful operation."
  
                Mapped output:
                {
                  "date": "2023-07-25",
                  "location": "Site A",
                  "winchPulling": "100kg",
                  "shredding": "150kg",
                  "manualCutting": "minimal",
                  "manualUprooting": "minimal",
                  "hitachiTime": "2 hours",
                  "shredderTime": "1 hour",
                  "winchTime": "1 hour",
                  "volume": "200 cubic meters",
                  "weight": "250kg",
                  "moisture": "20%",
                  "areaHitachi": "50 square meters",
                  "areaWinch": "30 square meters",
                  "areaManual": "20 square meters",
                  "tractorName": "Tractor X",
                  "remarks": "Overall, it was a successful operation."
                }
  
                Process the following text similarly: and give only json`,
            },
          ],
        },
      ],
    });

    const result = await chatSession.sendMessage(input);
    console.log(result);
    return result.response.text();
  };

  try {
    const output = await run(text);
    const data = { text, output };
    return NextResponseType.json(data, { status: 200 });
  } catch (error) {
    console.error("Error classifying text:", error);
    return NextResponseType.json("Error classifying text", { status: 500 });
  }
}
