/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { FC } from "react";

// Vendor dependencies
import "./Vendor";
// Application Styles
import "./styles/bootstrap.scss";
import "./styles/app.scss";

import { Toaster } from "react-hot-toast";

declare var PUBLIC_URL: string;

const App: FC = () => {
  // specify base href from env variable 'PUBLIC_URL'
  // use only if application isn't served from the root
  // for development it is forced to root only
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const basename =
    process.env.NODE_ENV === "development" ? "/" : PUBLIC_URL || "/";

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            maxWidth: "500px",
          },
        }}
      />
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
