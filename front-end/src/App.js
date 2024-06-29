import React, { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <h2
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Our App is only available in widescreen... So sorry for this!˙◠˙
        </h2>
      ) : (
        <Form />
      )}
    </div>
  );
}

export default App;
