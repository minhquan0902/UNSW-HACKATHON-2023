/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC } from "react";

import ToggleFullscreen from "../Common/ToggleFullscreen";
import { toggleSetting } from "../../store/actions/actions";
import { useDispatch } from "../../store/store";

const Header: FC = () => {
  const dispatch = useDispatch();

  const toggleIsCollapse = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleSetting("isCollapsed"));
  };

  const toggleAsideToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleSetting("asideToggled"));
  };

  const toggleoffsidebarOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleSetting("offsidebarOpen"));
  };

  return (
    <header className="topnavbar-wrapper">
      {/* START Top Navbar */}
      <nav className="navbar topnavbar">
        {/* START navbar header */}
        <div className="navbar-header">
          <a className="navbar-brand" href="#/">
            <div className="brand-logo">
              <img
                className="img-fluid"
                src="img/travelapp-logo_rescale.png"
                alt="App Logo"
              />
            </div>
            <div className="brand-logo-collapsed">
              <img
                className="img-fluid"
                src="img/travelapp-logo.png"
                alt="App Logo"
              />
            </div>
          </a>
        </div>
        {/* END navbar header */}

        {/* START Left navbar */}
        <ul className="navbar-nav mr-auto flex-row">
          <li className="nav-item">
            {/* Button used to collapse the left sidebar. Only visible on tablet and desktops */}
            <a
              href=""
              className="nav-link d-none d-md-block d-lg-block d-xl-block"
              onClick={toggleIsCollapse}
            >
              <em className="fas fa-bars"></em>
            </a>
            {/* Button to show/hide the sidebar on mobile. Visible on mobile only. */}
            <a
              href=""
              className="nav-link sidebar-toggle d-md-none"
              onClick={toggleAsideToggle}
            >
              <em className="fas fa-bars"></em>
            </a>
          </li>
        </ul>
        {/* END Left navbar */}
        {/* START Right Navbar */}
        <ul className="navbar-nav flex-row">
          {/* Search icon
          <li className="nav-item">
            <a className="nav-link">
              <em className="icon-magnifier"></em>
            </a>
          </li> */}
          {/* Fullscreen (only desktops) */}
          <li className="nav-item d-none d-md-block">
            <ToggleFullscreen className="nav-link" />
          </li>

          {/* START Offsidebar button */}
          <li className="nav-item">
            <a className="nav-link" href="" onClick={toggleoffsidebarOpen}>
              <em className="icon-notebook"></em>
            </a>
          </li>
          {/* END Offsidebar menu */}
        </ul>
        {/* END Right Navbar */}
      </nav>
      {/* END Top Navbar */}
    </header>
  );
};

export default Header;
