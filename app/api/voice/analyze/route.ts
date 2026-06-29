import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const FORWARD_TO = "+4915167157367";

  const formData = await req.formData();
  const speechResult = (formData.get("SpeechResult") as string) || "";
  const confidence = parseFloat((formData.get("Confidence") as string) || "0");

  console.log("Spracheingabe:", speechResult, "Konfidenz:", confidence);

  const spamKeywords = [
    "versicherung", "kredit", "gewonnen", "angebot", "kostenlos",
    "solar", "strom", "energie", "investition", "rendite",
    "immobilien", "umfrage", "studie", "preis", "rabatt",
    "sparkasse", "bank", "darlehen", "finanzierung",
  ];

  const lowerSpeech = speechResult.toLowerCase();
  const isSpam =
    spamKeywords.some((kw) => lowerSpeech.includes(kw)) ||
    speechResult === "" ||
    confidence < 0.3;

  if (isSpam) {
    console.log("SPAM erkannt:", speechResult);
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say language="de-DE" voice="Polly.Marlene">
    Vielen Dank. Auf Wiederhören.
  </Say>
  <Hangup/>
</Response>`;
    return new NextResponse(twiml, {
      headers: { "Content-Type": "text/xml" },
    });
  }

  console.log("Echter Anrufer, leite weiter:", speechResult);
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say language="de-DE" voice="Polly.Marlene">
    Einen Moment bitte, ich verbinde Sie.
  </Say>
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER}">
    <Number>${FORWARD_TO}</Number>
  </Dial>
</Response>`;

  return new NextResponse(twiml, {
    headers: { "Content-Type": "text/xml" },
  });
}
