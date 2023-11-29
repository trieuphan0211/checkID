import { AppBar, Slide, useScrollTrigger } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import PropTypes from "prop-types";
import { Header, SubHeader } from "../components/headers";
import Footer from "../components/Footer";
import "../assets/scss/NotFound.scss";
import { Link } from "react-router-dom";
import { use } from "i18next";
import { useTranslation } from "react-i18next";

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

const NotFound = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            boxShadow: "none",
            backgroundColor: "white",
          }}
        >
          <SubHeader />
          <Header />
        </AppBar>
      </HideOnScroll>
      <Box className="notfound">
        <Box>
          <h4>404</h4>
          <h1>{t("notfound.header")}</h1>
          <p> {t("notfound.title")}</p>
          <Button
            sx={{
              backgroundColor: "var(--primary-1)",
              borderRadius: "50px",
              textTransform: "none",
              padding: "20px 40px",
              fontSize: "16px",
              fontWeight: "bold",
              "& a": {
                color: "white",
                textDecoration: "none",
              },
              "&:hover": {
                backgroundColor: "var(--primary-2)",
              },
            }}
          >
            <Link to="/"> {t("notfound.button")}</Link>
          </Button>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
};
export default NotFound;
