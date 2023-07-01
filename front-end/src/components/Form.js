import React, { useState } from "react";
import "../style/Form.css";

const Form = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handlePeople = (event) => {
    setPeople(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create the payload for the POST request
    const payload = {
      location: location,
      day: date,
      people: people,
    };

    // Make the API POST request
    fetch(
      "https://v5ke4o8bb8.execute-api.ap-southeast-2.amazonaws.com/dev/travel",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2>It's now or never</h2>
      <h1>Come on, Join us!</h1>

      <form action="" onSubmit={handleSubmit} id="join-us">
        <div className="fields">
          <span>
            <input
              placeholder="Hi, where u wanna go"
              type="text"
              value={location}
              onChange={handleLocationChange}
            />
          </span>
          <br />
          <span>
            <input
              placeholder="Number of days"
              type="text"
              value={date}
              onChange={handleDate}
            />
          </span>
          <br />
          <span>
            <input
              placeholder="Number of people"
              type="text"
              value={people}
              onChange={handlePeople}
            />
          </span>
        </div>
        <div className="submit">
          <input className="submit" value="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
