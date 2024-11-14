import OpenAI from "openai";
import { OPENAI_GPT_KEY } from "./Constant";

const openai = new OpenAI({
  apiKey: OPENAI_GPT_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default openai;
