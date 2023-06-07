import express from "express";
import { config } from "dotenv";
config();
import { Configuration, OpenAIApi } from "openai";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 6010;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openaiClient = new OpenAIApi(configuration);

app.post("/form", (req, res) => {
  const formData = req.body;
  const botData = {
    title: formData.title,
    avatar: formData.avatar,
    colors: {
      primary: formData.field1,
      secondary: formData.field2,
      userTextBg: formData.field3,
      textColor: formData.field4,
    },
  };
  res.send(botData);
});

const conversationHistory = [];
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  const messages = [
    {
      role: "system",
      content:
        "You are a programmer that only replies to programming prompts, if asked non programming questions you say sorry I only answer programming questions",
    },
    ...conversationHistory,
    { role: "user", content: message },
  ];
  const result = await openaiClient.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
  });
  conversationHistory.push({
    role: "system",
    content: result.data.choices[0].message.content,
  });
  res.json({
    message: result.data.choices[0].message.content,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
