// import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { messages, model } = req.body;
    console.log(model);
    
    const lastMessage = messages[messages.length - 1]?.content || "";

    const response = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: model, 
        prompt: lastMessage
      }),
    });

    if (!response.body) {
      throw new Error("No response body from Ollama");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });

      chunk.split("\n").forEach((line) => {
        if (line.trim()) {
          try {
            const json = JSON.parse(line); // Parse each JSON chunk
            if (json.response) fullText += json.response; // Append response text
          } catch (e) {
            console.error("JSON parsing error:", e, "Data received:", line);
          }
        }
      });
    }

    console.log("Full text:", fullText);

    return res.status(200).json({ response: fullText.trim() });
  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
