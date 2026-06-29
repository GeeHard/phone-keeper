import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather input="speech" timeout="5" speechTimeout="2" action="/api/voice/analyze" method="POST" language="de-DE">
    <Say language="de-DE" voice="Polly.Marlene">
      Guten Tag. Bitte nennen Sie kurz Ihren Namen und Ihr Anliegen.
    </Say>
  </Gather>
  <Redirect method="POST">/api/voice/analyze</Redirect>
</Response>`;

  return new NextResponse(twiml, {
    headers: { "Content-Type": "text/xml" },
  });
}
