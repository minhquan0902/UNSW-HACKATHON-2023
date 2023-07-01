/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { FC, useEffect } from "react";

// Vendor dependencies
import "./Vendor";
// Application Styles
import "./styles/bootstrap.scss";
import "./styles/app.scss";

import api from "./Features/Login/api";
import { useDispatch } from "./store/store";
import {
  AuthInitFail,
  ListUser,
  UpdateUserMeta,
} from "./store/actions/actions";
import { Toaster } from "react-hot-toast";

declare var PUBLIC_URL: string;

const App: FC = () => {
  const dispatch = useDispatch();
  // specify base href from env variable 'PUBLIC_URL'
  // use only if application isn't served from the root
  // for development it is forced to root only
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const basename =
    process.env.NODE_ENV === "development" ? "/" : PUBLIC_URL || "/";

  // check AuthInit and also fetch list of User Data
  const checkAuthInit = async () => {
    try {
      const response: any = await api.checkLoginUser();

      // response exist, auth init success, dispatch list of user data
      if (response) {
        dispatch(ListUser(response.data.data));
        dispatch(UpdateUserMeta(response.data.meta));
      }
    } catch (error) {
      dispatch(AuthInitFail());
    }
  };

  useEffect(() => {
    checkAuthInit();
  }, []);

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
