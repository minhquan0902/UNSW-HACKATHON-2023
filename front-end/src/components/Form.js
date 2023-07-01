import React, { useState } from "react";
const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create the payload for the POST request
    const payload = {
      message: inputValue
    };

    // Make the API POST request
    fetch("https://v5ke4o8bb8.execute-api.ap-southeast-2.amazonaws.com/dev/test", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"

      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2>It's now or never</h2>
      <h1>Come on, Join us!</h1>

      <form action="" onSubmit={handleSubmit} id="join-us">
        <div class="fields">
          <span>
            <input
              placeholder="Hi, Where u wanna go"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </span>
          <br />
          <span>
            <input placeholder="Password" type="password" />
          </span>
        </div>
        <div class="submit">
          <input class="submit" value="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
