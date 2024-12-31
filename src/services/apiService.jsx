import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const aiModel = import.meta.env.VITE_GEMINI_MODEL;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: aiModel });

export default model;
