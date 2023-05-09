import express from "express";
import { config } from "dotenv";
config();
import { Configuration, OpenAIApi } from "openai";
import cors from "cors";
import classifier from "./Classifier.js";

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

  if (!isProgrammingQuestionNlp(message)) {
    return res.json({
      message: "Sorry! I only answer programming questions.",
    });
  }

  const result = await openaiClient.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  });
  res.json({
    message: result.data.choices[0].message.content,
  });
});

// checking the prompt if programming question or not using NLP
function isProgrammingQuestionNlp(message) {
  const result = classifier.classify(message);
  return result === "programming";
}

// checking the prompt if programming question or not using regex
function isProgrammingQuestion(message) {
  const programmingRegex =
    /(\bprogramming\b|\bcode\b|\balgorithm\b|\bdata structure\b|\bsyntax\b|\bcompiler\b|\bdebugging\b|\bsoftware\b|\bprogrammer\b|\bdeveloper\b|\bweb development\b|\bapp development\b|\bsoftware engineering\b|\bcomputer science\b|\bfrontend\b|\bbackend\b|\bdatabase\b|\bfull stack\b|\bAPI\b|\bSDK\b|\bIDE\b|\bOOP\b|\bREST\b|\bJSON\b|\bXML\b|\bHTML\b|\bCSS\b|\bJavaScript\b|\bTypeScript\b|\bJava\b|\bPython\b|\bC\b|\bC\+\+\b|\bC#\b|\bRuby\b|\bPHP\b|\bSQL\b)/gi;

  return programmingRegex.test(message);
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
