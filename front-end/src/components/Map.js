import GoogleMapReact from "google-map-react";
import ResizePanel from "react-resize-panel";
import Marker from "./Marker";
const Map = () => {
  const center = {
    lat: 60.192059,
    lng: 24.945831,
  };
  const zoom = 11;
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
        style={{ backgroundColor: "black", width: "30%" }}
      >
        <div style={{ backgroundColor: "white", width: "100%" }}>
          Long text goes here
        </div>
      </ResizePanel>
      <div style={{ flexGrow: "1" }}></div>

      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyADgeMwsM57y1kC1_C4BY9K92j2RK9gyY8" }} // Replace with your actual Google Maps API Key
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={60.169787} lng={24.948776} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
