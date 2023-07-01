const { Configuration, OpenAIApi } = require("openai");

const location = "Barcelona";
const dayNum = "2";

const command = `
My answer is only about travel topics and travel plan. Do not give me any other topics. If you don't recognize the city, please let me know.
If the response includes any place, summarize them at the end of the answer in this format: [Day] + [Name] + [Google Address], like in this response below:

Day 1:
	Morning: Plan + place + budget
	Afternoon: Plan + place + budget
	Evening: Plan + place + budget

Day 2:
	Morning: Plan + place + budget
	Afternoon: Plan + place + budget
	Evening: Plan + place + budget

Summary of Places:
[Day 1] Place 1 – Google Address 1
[Day 1] Place 2 – Google Address 2
[Day 2] Place 3 – Google Address 3
[Day 2] Place 4 – Google Address 4

Here is my request:
`;

function extractPlaces(input) {
  const lines = input.trim().split('\n');
  const places = [];
  let description ='';

  for (const line of lines) {
    // if (line.startsWith('Summary of Places:')) {
    //   break;
    // }

    if (!line.startsWith('[Day') && !line.startsWith('Summary of Places:')) {
      description += line + '\n';
      continue;
    }
    const matches = /\[Day (\d+)\] (.+) - (.+)/.exec(line);
    if (matches) {
      const dayNo = parseInt(matches[1]);
      const place = matches[2].trim();
      const address = matches[3].trim();

      places.push({
        Place: place,
        "Address of Places": address,
        dayNo
      });
    }
  }
  return {
    id: "ID",
    description: description.trim(),
    plans: places
  };

}

async function runChatCompletion() {
  try {
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const chat_completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: command + "plan a trip to " + location + " for " + dayNum + " days" }],
    });

    // Process the response or perform further operations
    const response = chat_completion.data.choices[0].message.content;
    const places = extractPlaces(response);
    //console.log(chat_completion.data.choices[0].message.content);
    // Return the result if needed
    return places;
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
runChatCompletion()
  .then(places => {
    const jsonData = JSON.stringify({ jsondata: places }, null, 1);
    console.log(jsonData);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
