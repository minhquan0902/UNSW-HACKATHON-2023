import React, { useState } from "react";
import "../style/Form.css";
import dataCity from "./cities.json";
import { Autocomplete, TextField, Box, CircularProgress } from "@mui/material";
import Map from "./Map";
const Form = () => {
  dataCity = [
    "New York City, USA",
    "HCM City, Vietnam",
    "Hanoi, Vietnam",
    "London, UK",
    "Paris, France",
    "Los Angeles, USA",
    "Rome, Italy",
    "Beijing, China",
    "Mumbai, India",
    "Sydney",
    "Cairo, Egypt",
    "Dubai, UAE",
    "Shanghai, China",
    "Istanbul, Turkey",
    "Rio de Janeiro, Brazil",
    "Singapore",
    "Moscow, Russia",
    "Hong Kong, China",
    "Barcelona, Spain",
    "Toronto, Canada",
    "Mexico City, Mexico",
    "Buenos Aires, Argentina",
    "San Francisco, USA",
    "Berlin, Germany",
    "Madrid, Spain",
    "Bangkok, Thailand",
    "Chicago, USA",
    "Vienna, Austria",
    "Melbourne, Australia",
    "Cape Town, South Africa",
    "Seoul, South Korea",
    "Athens, Greece",
    "Lisbon, Portugal",
    "Amsterdam, Netherlands",
    "Jerusalem, Israel",
    "Vancouver, Canada",
    "Jakarta, Indonesia",
    "Kuala Lumpur, Malaysia",

    "São Paulo, Brazil",
    "Miami, USA",
    "Las Vegas, USA",
    "Milan, Italy",
    "Delhi, India",
    "Montreal",
    "Edinburgh",
    "Dublin",
    "Honolulu",
    "Marrakech",
    "Florence",
    "Prague",
  ];
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");

  const [loading, setLoading] = useState(false);
  const [mapData, setMapData] = useState(null);

  const handleAutoCompleteChange = (event, value) => {
    setLocation(value);
    console.log(value);
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
      dayNum: date,
      type: people,
    };

    console.log("payload", payload);

    setLoading(true);
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
        setMapData(data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      {!mapData ? (
        <>
          <div className="container">
            <h2>AnhEmTravelling</h2>
            <h1>Where d'you wanna go?</h1>

            <form action="" onSubmit={handleSubmit} id="join-us">
              <Autocomplete
                freeSolo
                options={dataCity}
                getOptionLabel={(option) => option}
                value={location}
                style={{
                  color: "black",

                  borderRadius: 2,
                }}
                sx={{ width: "220px", marginRight: 3 }}
                onChange={handleAutoCompleteChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "50px",

                        legend: {
                          marginLeft: "30px",
                        },
                      },
                      "& .MuiAutocomplete-inputRoot": {
                        paddingLeft: "20px !important",
                        borderRadius: "50px",
                      },
                      "& .MuiInputLabel-outlined": {
                        paddingLeft: "20px",
                      },
                      "& .MuiInputLabel-shrink": {
                        marginLeft: "20px",
                        paddingLeft: "10px",
                        paddingRight: 0,
                        background: "white",
                      },
                    }}
                    placeholder="Select a destination"
                    InputProps={{
                      ...params.InputProps,
                      style: {
                        borderRadius: "1.6rem",
                        backgroundColor: "white",
                        height: "34px",
                      },
                    }}
                  />
                )}
              />

              <br />
              <br />
              <span>
                <input
                  style={{ color: "black" }}
                  placeholder="Number of days"
                  type="text"
                  value={date}
                  onChange={handleDate}
                />
              </span>
              <br />
              <span>
                <input
                  placeholder="Solo, Friends, Family"
                  type="text"
                  value={people}
                  onChange={handlePeople}
                />
              </span>

              <div className="submit">
                <input
                  disabled={loading || !location || !date || !people}
                  className="submit"
                  value="Submit"
                  type="submit"
                />
              </div>
            </form>

            {loading && (
              <Box sx={{ marginTop: 15 }}>
                <CircularProgress />
                <br />
                <p style={{ color: "white", fontSize: "24px" }}>
                  Loading. Please wait ...{" "}
                </p>
              </Box>
            )}
          </div>
        </>
      ) : (
        <>
          <Map data={mapData} />
        </>
      )}
    </>
  );
};

export default Form;
