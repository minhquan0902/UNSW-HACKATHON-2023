import { authSelector } from "./store/selectors/useSelector";
import PropTypes from "prop-types";
import type { FC, ReactNode } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "./store/store";

interface GuestGuardProps {
  children: ReactNode;
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const { isAuthenticated } = useSelector(authSelector);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
};

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default GuestGuard;
