import React from "react";
import GoogleMapReact from "google-map-react";
import ResizePanel from "react-resize-panel";
import Marker from "./Marker";
import { Box, Typography, Card } from "@mui/material";

const Map = ({ data }) => {

  console.log("MapData received in Map", data)

  const center = {
    lat: data?.response?.Plans[0].Latitude,
    lng: data?.response?.Plans[0].Longitude,
  };
  const zoom = 13;



  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <ResizePanel
        direction="e"
        style={{ backgroundColor: "black", width: "55%" }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            overflow: "auto",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ marginTop: 10 }}>
              <Typography variant="h4" style={{ marginBottom: 20, fontWeight: "bold" }}>
                Details plans and budget for your trip
              </Typography>
              <br />
              <Card
                variant="outlined"
                style={{
                  width: "80%", height: "80%", margin: "0 auto", backgroundColor: "#F8F8F8", borderRadius: 15 // Adjust the value to change the roundness
                }}
              >
                <Typography variant="h5" style={{ marginTop: 30, color: "gray", fontWeight: "bold" }}>
                  {data?.location}
                </Typography>
                <br />
                <br />
                <Typography
                  variant="h6"
                  style={{
                    textAlign: "left",
                    marginLeft: 70,
                    marginRight: 10,
                    marginBottom: 35,
                  }}
                >
                  <div style={{ whiteSpace: "pre-line" }}>{data?.response?.Description}</div>
                </Typography>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}>
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    A product <span style={{ fontStyle: "italic" }}>by</span>&nbsp;
                  </Typography>
                  <Typography variant="body1" style={{ color: "#4285F4", fontWeight: "bold" }}>
                    A
                  </Typography>
                  <Typography variant="body1" style={{ color: "#DB4437", fontWeight: "bold" }}>
                    n
                  </Typography>
                  <Typography variant="body1" style={{ color: "#F4B400", fontWeight: "bold" }}>
                    h
                  </Typography>
                  <Typography variant="body1" style={{ color: "#4285F4", fontWeight: "bold" }}>
                    E
                  </Typography>
                  <Typography variant="body1" style={{ color: "#0F9D58", fontWeight: "bold" }}>
                    m
                  </Typography>
                  {/* <Typography variant="body1" style={{ color: "#DB4437", fontWeight: "bold" }}>
                    l
                  </Typography>
                  <Typography variant="body1" style={{ color: "#4285F4", fontWeight: "bold" }}>
                    l
                  </Typography>
                  <Typography variant="body1" style={{ color: "#DB4437", fontWeight: "bold" }}>
                    i
                  </Typography>
                  <Typography variant="body1" style={{ color: "#F4B400", fontWeight: "bold" }}>
                    n
                  </Typography>
                  <Typography variant="body1" style={{ color: "#DB4437", fontWeight: "bold" }}>
                    g
                  </Typography> */}
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    Travelling&nbsp;
                  </Typography>
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    2023
                  </Typography>
                </div>
              </Card>
            </Box>
          </Box>
        </div>
      </ResizePanel >
      <div style={{ flexGrow: "1" }}></div>

      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyADgeMwsM57y1kC1_C4BY9K92j2RK9gyY8"
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {data?.response?.Plans.map((plan, index) => {
          return (
            <Marker
              key={index}
              lat={plan.Latitude}
              lng={plan.Longitude}
              Day={plan.Day}
              Place={plan.Place}
              Address={plan.Address}
            />
          );
        })}
      </GoogleMapReact>
    </div >
  )
};

export default Map;
