import GoogleMapReact from "google-map-react";
import ResizePanel from "react-resize-panel";
import Marker from "./Marker";
import { Box, Typography, Card } from "@mui/material";
const Map = () => {
  const center = {
    lat: 60.192059,
    lng: 24.945831,
  };
  const zoom = 13;

  const paragraph = `Day 1:\nMorning: Explore Sydney Harbour Bridge and take in the stunning
      views. Budget: Free.\nAfternoon: Visit the iconic Sydney Opera House and
      take a guided tour. Budget: Tour prices vary; check the official website
      for details.\nEvening: Enjoy dinner at Darling Harbour, with its wide
      range of waterfront restaurants. Budget: Prices vary depending on the
      restaurant.\n\n Day 2:\nMorning: Explore the Royal Botanic Garden Sydney
      and enjoy a leisurely walk through the beautiful gardens. Budget:
      Free.\nAfternoon: Take a ferry to Manly Beach and spend the afternoon
      relaxing on the sandy shores. Budget: Ferry ticket prices vary; check the
      official website for details.\nEvening: Enjoy dinner and drinks at The
      Rocks, a historic area with charming pubs and restaurants. Budget: Prices
      vary depending on the establishment`;

  console.log(paragraph);
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
            <Box sx={{ marginTop: 20 }}>
              <Typography variant="h4">
                Details plans and budget for your trip
              </Typography>
              <br />
              <Card
                variant="outlined"
                style={{ width: "80%", height: "80%", margin: "0 auto" }}
              >
                <Typography variant="h5" style={{ marginTop: 30 }}>
                  Ha Noi, Vietnam
                </Typography>
                <br />
                <br />
                <br />
                <Typography
                  variant="h6"
                  style={{
                    textAlign: "left",
                    marginLeft: 100,
                    marginRight: 10,
                    marginBottom: 50,
                  }}
                >
                  <div style={{ whiteSpace: "pre-line" }}> {paragraph}</div>
                </Typography>
              </Card>
            </Box>
          </Box>
        </div>
      </ResizePanel>
      <div style={{ flexGrow: "1" }}></div>

      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyADgeMwsM57y1kC1_C4BY9K92j2RK9gyY8" }} // Replace with your actual Google Maps API Key
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={60.169787} lng={24.948776} />

        <Marker lat={60.169587} lng={24.948576} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
