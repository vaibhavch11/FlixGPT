import OpenAI from 'openai';
import { OPENAPI_KEY } from './constant';

const openai = new OpenAI({
  apiKey: OPENAPI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true  //Note
});

export default openai;