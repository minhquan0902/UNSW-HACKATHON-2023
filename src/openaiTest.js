import { OpenAI } from "langchain/llms/openai";

const { Configuration, OpenAIApi } = require("openai");

async function runChatCompletion() {
  try {
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const chat_completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hi, what is my name?" }],
    });
    
    // Process the response or perform further operations
    console.log(chat_completion.data.choices[0].message.content);
    
    // Return the result if needed
    return chat_completion;
  } catch (error) {
    // Handle specific error cases
    if (error.code === 'invalid_api_key') {
      console.error('Incorrect API key provided. Please make sure to use a valid OpenAI API key.');
    } else {
      // Handle other errors
      console.error('An error occurred:', error);
    }

    // Rethrow the error or return an error object if necessary
    throw error;
  }
}

// Call the async function
runChatCompletion();

