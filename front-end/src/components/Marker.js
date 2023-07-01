import { useState } from "react";

const Marker = ({ Day, Place, Address }) => {
  const [showCard, setShowCard] = useState(false);

  const markerStyle = {
    fontSize: "30px", // Increase the size of the emoji
    position: "absolute",
    transform: "translate(-50%, -100%)",
  };

  const infoWindowStyle = {
    position: "relative",
    bottom: 150,
    left: "-45px",
    width: 220,
    backgroundColor: "white",
    borderRadius: "5px",
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div onClick={() => setShowCard(!showCard)}>
      <div style={markerStyle} role="img" aria-label="marker">
        📌
      </div>
      {showCard && (
        <div style={infoWindowStyle}>
          <div>
            <h2>{`${Day} - ${Place}`}</h2>
            <p>{` ${Address}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marker;
