import React, { useState } from "react";
import "../style/Form.css";
import {
  Autocomplete,
  TextField,
  Box,
  CircularProgress,
  Select,
  MenuItem,
} from "@mui/material";
import Map from "./Map";

const Form = () => {
  const dataCity = [
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

    const payload = {
      location: location,
      dayNum: date,
      type: people,
    };

    console.log("payload", payload);

    setLoading(true);
    fetch("insert-api-url-here", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMapData(data);
        setLoading(false);
      })
      .catch((error) => {
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
            <br />

            <form action="" onSubmit={handleSubmit} id="join-us">
              <Autocomplete
                freeSolo
                options={dataCity}
                getOptionLabel={(option) => option}
                value={location}
                onChange={handleAutoCompleteChange}
                renderInput={(params) => (
                  <>
                    <TextField
                      {...params}
                      placeholder="Select or type and 'enter' a destination"
                      InputProps={{
                        ...params.InputProps,
                        style: {
                          height: "40px",
                          textAlign: "center",
                        },
                      }}
                      inputProps={{
                        ...params.inputProps,
                        style: {
                          textAlign: "center",
                        },
                      }}
                    />
                  </>
                )}
              />
              <span>
                <Select
                  value={date}
                  onChange={handleDate}
                  displayEmpty
                  style={{
                    width: "100%",
                    height: "40px",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    textAlign: "center",
                  }}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" disabled>
                    Number of days
                  </MenuItem>
                  {[...Array(7).keys()].map((day) => (
                    <MenuItem key={day + 1} value={day + 1}>
                      {day + 1}
                    </MenuItem>
                  ))}
                </Select>
              </span>
              <br />
              <br />
              <span>
                <Select
                  value={people}
                  onChange={handlePeople}
                  displayEmpty
                  style={{
                    width: "100%",
                    height: "40px",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    textAlign: "center",
                  }}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" disabled>
                    Solo, Friends, Family
                  </MenuItem>
                  <MenuItem value="Solo">Solo</MenuItem>
                  <MenuItem value="Friends">Friends</MenuItem>
                  <MenuItem value="Family">Family</MenuItem>
                </Select>
              </span>
              <br />
              <br />
              <br />
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
                  Loading. Please wait ...
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
