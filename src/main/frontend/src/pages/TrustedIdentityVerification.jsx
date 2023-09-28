import { AppBar, Slide, useScrollTrigger } from "@mui/material";
import PropTypes from "prop-types";

import React from "react";
import { useTranslation } from "react-i18next";

import { Header, SubHeader } from "../components/headers";
import Footer from "../components/Footer";
import "../assets/css/TrustedIdentityVerification.css";

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

const TrustedIdentityVerification = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            boxShadow: "none",
          }}
        >
          <SubHeader />
          <Header />
        </AppBar>
      </HideOnScroll>
      <div id="nfcIdentity"></div>
      <Footer />
    </React.Fragment>
  );
};

export default TrustedIdentityVerification;
