const { Configuration, OpenAIApi } = require("openai");

async function getLatitudeLongitude(location) {
  const apiKey = "AIzaSyADgeMwsM57y1kC1_C4BY9K92j2RK9gyY8";
  const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    location
  )}&key=${apiKey}`;

  try {
    const response = await fetch(geocodingApiUrl);
    const data = await response.json();

    if (data.status === "OK" && data.results.length > 0) {
      const latitude = data.results[0].geometry.location.lat;
      const longitude = data.results[0].geometry.location.lng;

      return { latitude, longitude };
    } else {
      console.error("No results found for the provided location.");
      return null;
    }
  } catch (error) {
    console.error("An error occurred while fetching the data:", error);
    return null;
  }
}
async function runChatCompletion(location, dayNum) {
  const command = `
My answer is only about travel topics and travel plan. Do not give me any other topics. If you don't recognize the city, please let me know.
If the response includes any place, summarize them at the end of the answer in this format: [Day] + [Name] + [Google Address], like in this response below:

Day 1:
	Morning: Plan + place 
	Afternoon: Plan + place 
	Evening: Plan + place  

Day 2:
	Morning: Plan + place  
	Afternoon: Plan + place 
	Evening: Plan + place  

Day 3:
	Morning: Plan + place  
	Afternoon: Plan + place 
	Evening: Plan + place  

Day 4:
	Morning: Plan + place  
	Afternoon: Plan + place 
	Evening: Plan + place  

Day 5:
	Morning: Plan + place  
	Afternoon: Plan + place 
	Evening: Plan + place  

Summary of Places:
- Day 1 - Place 1 - Google Address 1 -
- Day 1 - Place 2 - Google Address 2 -
- Day 2 - Place 3 - Google Address 3 -
- Day 2 - Place 4 - Google Address 4 -
- Day 3 - Place 5 - Google Address 5 -
- Day 3 - Place 6 - Google Address 6 -
- Day 4 - Place 7 - Google Address 7 -
- Day 4 - Place 8 - Google Address 8 -

Here is my request:
`;
  try {
    const configuration = new Configuration({
      apiKey: "API KEY",
    });
    const openai = new OpenAIApi(configuration);
    const chat_completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            command + "plan a trip to " + location + " in " + dayNum + " days" + " for " + "family" ,
        },
      ],
    });

    // Process the response or perform further operations
    const response = chat_completion.data.choices[0].message.content;
    return response;
  } catch (error) {
    // Handle specific error cases
    if (error.code === "invalid_api_key") {
      console.error(
        "Incorrect API key provided. Please make sure to use a valid OpenAI API key."
      );
    } else {
      // Handle other errors
      console.error("An error occurred:", error);
    }

    // Rethrow the error or return an error object if necessary
    throw error;
  }
}

// Call the async function

async function getData(location, dayNum) {
  var time = Date.now();
  const res = await runChatCompletion(location, dayNum);
  var lines = res.split("\n"); // Split the string into lines
  var description = "";
  json = {};
  plan = [];
  for (let i = 0; i < lines.length; i++) {
    var line = lines[i];
    // Process each line here
    if (!line.startsWith("-") && !line.startsWith("Summary of Places:")) {
      description += line + "\n";
      continue;
    }
    if (line.startsWith("-")) {
      var jsonPlace = {};
      listData = line.split("-");
      for (let j = 0; j < listData.length; j++) {
        const str = listData[j].trim();
        if (str.length > 2) {
          if (j === 1) {
            jsonPlace["Day"] = str;
          } else if (j === 2) {
            jsonPlace["Place"] = str;
          } else {
            jsonPlace["Address"] = str;
            var locations = await getLatitudeLongitude(str);
            jsonPlace["Latitude"] = locations.latitude;
            jsonPlace["Longitude"] = locations.longitude;
          }
        }
      }
      plan.push(jsonPlace);
    }
  }

  json["Description"] = description;
  json["Plans"] = plan;
  console.log(json);
  console.log(Date.now() - time);
  return json;
}
getData("Sydney", "3");
