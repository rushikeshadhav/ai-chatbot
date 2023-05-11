import express from "express";
import { config } from "dotenv";
config();
import { Configuration, OpenAIApi } from "openai";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openaiClient = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  const result = await openaiClient.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{"role": "system", "content": "You are a programmer that only replies to programming prompts, if asked non programming questions you say sorry I only answer programming questions"},{ role: "user", content: message }],
  });
  res.json({
    message: result.data.choices[0].message.content,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
