import { type NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = "AIzaSyD279IB6BCU_kLN26XEy-M6bfPq0BtLQkY"
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

const PROJECT_CONTEXT = `
You are an AI assistant for the "Industrial Transport System using Overhead Powerlink Technology" project, developed by students from JSPM's Imperial College of Engineering & Research.

PROJECT OVERVIEW:
This project introduces a sustainable and efficient transport solution designed for industrial environments. The system powers electric transport vehicles through overhead catenary lines using a pantograph mechanism, ensuring continuous energy delivery without the need for frequent battery charging.

1. OVERHEAD POWERLINK TECHNOLOGY:
- Utilizes overhead electric lines (like those in electric trains) to supply power to transport vehicles in real time.
- A roof-mounted pantograph mechanism maintains stable contact with the overhead line for uninterrupted energy flow.
- Enables 24/7 transport operations without charging downtime.
- Designed to withstand harsh industrial and outdoor conditions.

2. KEY COMPONENTS:
- Electric vehicle platform with motors, ESP8266 microcontrollers, servo-powered pantograph, and onboard sensors.
- Overhead line grid infrastructure for continuous power supply.
- Rechargeable battery pack for backup operation in non-grid zones.
- Software system using Blynk for real-time control, diagnostics, and fault detection.

3. BENEFITS:
- Eliminates dependency on fossil fuels in industrial logistics.
- Achieves over 95% power transfer efficiency, increasing productivity and reducing cost.
- Enables smooth, autonomous vehicle operation with real-time diagnostics.
- Supports sustainability goals by producing zero tailpipe emissions.
- Reduces maintenance and energy costs compared to traditional diesel-based systems.

4. TECHNOLOGY FEATURES:
- Automatic pantograph height adjustment for varied industrial terrains.
- Smart power switching between grid and battery using control logic.
- Regenerative braking system for energy recovery and storage.
- AI/ML-ready architecture for autonomous routing, energy optimization, and predictive maintenance.

5. APPLICATIONS:
- Industrial manufacturing plants for raw material or goods transport.
- Port and yard logistics with repetitive travel paths.
- Underground or enclosed environments like mines and power stations.
- Smart warehouses and IIoT-enabled factory setups.

6. FUTURE SCOPE:
- Full autonomous navigation with AI-based route optimization.
- Integration with solar panels or renewable-powered grids.
- Vehicle-to-vehicle (V2V) and cloud-based fleet coordination.
- Scalable deployment in green industrial zones for smart cities.

Please provide helpful, technically accurate, and easy-to-understand information about this project. Be enthusiastic, clear, and ready to explain concepts ranging from basic overviews to advanced features of the system. Always highlight how this project supports sustainability, innovation, and industrial automation.
`;


export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    if (!GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set")
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${PROJECT_CONTEXT}\n\nUser Question: ${message}\n\nPlease provide a helpful response about the Industrial Transport System project.`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Gemini API error details:', errorData)
      throw new Error(`Gemini API error: ${response.status} - ${errorData}`)
    }

    const data = await response.json()
    const botResponse =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I apologize, but I couldn't generate a response. Please try asking your question differently."

    return NextResponse.json({ response: botResponse })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process your message. Please try again." }, { status: 500 })
  }
}
