import { AppBar, Slide, useScrollTrigger } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Header, SubHeader } from "../components/headers";
import Footer from "../components/Footer";
import "../assets/scss/UseCase.scss";
import { useLocation } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const UseCaseLayout = (props) => {
  const path = useLocation();
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        {path?.pathname === "/use-cases" ? (
          <AppBar
            sx={{
              boxShadow: "none",
              backgroundColor: "white",
            }}
          >
            <SubHeader />
            <Header />
          </AppBar>
        ) : (
          <AppBar
            sx={{
              boxShadow: "none",
              backgroundColor: "var(--primary-1)",
            }}
          >
            <SubHeader bg="blue" />
            <Header bg="white" />
          </AppBar>
        )}
      </HideOnScroll>
      <div className="usecase industries">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default UseCaseLayout;
