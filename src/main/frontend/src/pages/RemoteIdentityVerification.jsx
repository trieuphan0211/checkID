import React from "react";
import { Link } from "react-router-dom";

import { Slide as SlideReact } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { Header, SubHeader } from "../components/headers";
import Footer from "../components/Footer";
import "../assets/css/RemoteIdentityVerification.css";
import noMatter from "../assets/img/remote_identity_verification/no_matter.png";
import page1_avata from "../assets/img/trusted_identity_verification/avatar.png";
import page1_provenSolution from "../assets/img/remote_identity_verification/Slider/proven_solution.png";
import page2_intergrate from "../assets/img/remote_identity_verification/Slider/intergrate.png";
import page3_certifield from "../assets/img/remote_identity_verification/Slider/certifield.png";
import readid from "../assets/img/trusted_identity_verification/readid-app-passport.png";
import challenge from "../assets/img/remote_identity_verification/challenge.png";

import {
  AppBar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Slide,
  TextField,
  useScrollTrigger,
} from "@mui/material";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "usehooks-ts";
import { FiArrowRight } from "react-icons/fi";
import {
  ChartPerson,
  DoubleTap,
  EarthNetwork,
  GraphBar,
  LockShield,
  Setting,
} from "../icons";

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

const BlueButton = styled(Button)({
  backgroundColor: "var(--primary-2)",
  color: "#fff",
  textTransform: "none",
  padding: "21px 38px",
  fontSize: "1.6em",
  fontWeight: "700",
  borderRadius: "30px",
  height: "58px",
  "&:hover": {
    backgroundColor: "#0074ff",
  },
});
const TransparentButton = styled(Button)({
  backgroundColor: "transparent",
  color: "#fff",
  border: "2px solid #fff",
  textTransform: "none",
  padding: "20px 40px",
  fontSize: "1.6em",
  fontWeight: "700",
  borderRadius: "30px",
  height: "58px",
  "&:hover": {
    backgroundColor: "#0074ff",
    border: "2px solid #0074ff",
  },
});

const RemoteIdentityVerification = (props) => {
  // set Title
  document.title = "CheckID | Remote Identity Verification";
  //
  const { t } = useTranslation();
  const { width, height } = useWindowSize();
  const [slideIndex, setSlideIndex] = React.useState(0);
  const properties = {
    prevArrow: (
      <Button
        sx={{
          width: "84px",
          height: "84px",
          borderRadius: "50%",
          border: "1px solid var(--primary-1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            slideIndex === 0 ? "transparent" : "var(--primary-1)",

          marginLeft: width < 1153 ? "40px" : "145px",
          "&:hover": {
            backgroundColor:
              slideIndex === 0 ? "transparent" : "var(--primary-1)",
          },
        }}
        disabled={slideIndex === 0 ? true : false}
      >
        <ArrowBackIosIcon
          sx={{
            fontSize: "40px",
            marginLeft: "18px",
            color: slideIndex === 0 ? "var(--primary-1)" : "#fff",
          }}
        />
      </Button>
    ),
    nextArrow: (
      <Button
        sx={{
          width: "84px",
          height: "84px",
          borderRadius: "50%",
          border: "1px solid var(--primary-1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: width < 1153 ? "40px" : "145px",
          backgroundColor:
            slideIndex === 2 ? "transparent" : "var(--primary-1)",
          "&:hover": {
            backgroundColor:
              slideIndex === 2 ? "transparent" : "var(--primary-1)",
          },
        }}
        disabled={slideIndex === 2 ? true : false}
      >
        <ArrowForwardIosIcon
          sx={{
            fontSize: "40px",
            color: slideIndex === 2 ? "var(--primary-1)" : "#fff",
            // marginRight: "18px",
          }}
        />
      </Button>
    ),
    autoplay: false,
    canSwipe: width > 768 ? false : true,
    arrows: width > 768 ? true : false,
    transitionDuration: 500,
    infinite: false,
    onChange: (oldIndex, newIndex) => setSlideIndex(newIndex),
  };
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            boxShadow: "none",
            backgroundColor: "var(--primary-1)",
          }}
        >
          <SubHeader bg="blue" />
          <Header bg="white" />
        </AppBar>
      </HideOnScroll>
      <Box className="remoteIdentity">
        <div className="remoteIdentity_conversionRate">
          <div className="remoteIdentity_conversionRate-layout">
            <h5 className="remoteIdentity_conversionRate-title">
              Remote identity verification
            </h5>
            <h1 className="remoteIdentity_conversionRate-header">
              Ramp Up Your Conversion Rates
            </h1>
            <p className="remoteIdentity_conversionRate-body">
              One of CheckID's distinguishing traits is its high conversion
              without compromising security. People can remotely open a new bank
              account, register for a paid service, or re-KYC themselves using
              just their smartphone and a chipped identity document.
            </p>
            <BlueButton
              sx={{
                marginTop: "36px",
              }}
            >
              Try our free CheckID Me app
            </BlueButton>
          </div>
        </div>
        <div className="remoteIdentity_matter">
          <div className="remoteIdentity_matter-layout">
            <img src={noMatter} alt="" />
            <div className="remoteIdentity_matter-content">
              <h6 className="remoteIdentity_matter-content-title">
                Remote identity verification
              </h6>
              <h3 className="remoteIdentity_matter-content-header">
                No matter when or where
              </h3>
              <p className="remoteIdentity_matter-content-body">
                Onboarding customers, creating AML compliance or issuing travel
                credentials, it can all be done securely over the internet using
                remote identity verification. From the safety of their home,
                using their smartphone and ID, your customers can share their
                identity. 
              </p>
              <TransparentButton sx={{ marginTop: "30px" }}>
                Explore 5 key arguments
              </TransparentButton>
            </div>
          </div>
        </div>
        <div className="remoteIdentity_building d-flex flex-column align-items-center">
          <h5 className="remoteIdentity_building-header">
            Building on Near Field Communication
          </h5>
          <p className="remoteIdentity_building-body ">
            Smartphone NFC payments have become a normal phenomenon. Have your
            customers use that same technology for identity verification using
            secure and fool- proof identity document chip reading. The result is
            unrivalled identity certainty, lower costs for you, high convenience
            for your customers with 24x7 availability, and a surge in onboarding
            success.
          </p>
        </div>
        <div className="remoteIdentity_slide">
          <SlideReact {...properties}>
            <div className="each-slide-effect">
              <div className="remoteIdentity_slide-page1 d-flex">
                <div className="remoteIdentity_slide-page1-body">
                  <h4>Proven solution</h4>
                  <p>
                    CheckID is used extensively in banking, government, digital
                    signing and many other industries. It has proven its value
                    in millions of verifications. In combination with facial
                    verification it creates the highest level of certainty
                    possible. Complement it with optical verification to leave
                    no customer behind. 
                  </p>
                  <p>
                    Join customers such as Rabobank, ASB Bank, UK Home Office
                    and SK ID solutions in their successful application of
                    CheckID.
                  </p>
                  <Link>
                    Customer stories
                    <FiArrowRight />
                  </Link>
                  <div className="page1_body">
                    <img
                      className="page1_body-avata"
                      src={page1_avata}
                      alt=""
                    />
                    <div className="page1_body-body">
                      <h6>Rianne Rolsma</h6>
                      <p>Product Owner</p>
                      <p>
                        “We needed reliable, proven technology. Using the NFC
                        solution is much more reliable than OCR.”
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="remoteIdentity_slide-page1-img"
                  src={page1_provenSolution}
                  alt=""
                />
              </div>
            </div>
            <div className="each-slide-effect">
              <div className="remoteIdentity_slide-page2 d-flex justify-content-end">
                <div className="remoteIdentity_slide-page2-body d-flex flex-column justify-content-center">
                  <h4>Integrate in your app or use ours</h4>
                  <p>
                    CheckID is straightforward to evaluate and implement. Our
                    ready-to-use app CheckID Ready can be tailored to your
                    brand's look and feel. It can be up and running within days.
                    Our CheckID SaaS SDK can be integrated in any mobile
                    application through well-documented APIs. You can have full
                    control of user interaction or leverage the knowledge in our
                    high-level API.
                  </p>
                  <p>
                    Capturing the visual inspection zone and reading the MRZ is
                    always included. Try it with our free personal application
                    CheckID Me, available in the App Store or Google Play Store.
                  </p>
                  <Link>
                    Download our free personal app
                    <FiArrowRight />
                  </Link>
                </div>
                <img
                  className="remoteIdentity_slide-page2-img"
                  src={page2_intergrate}
                  alt=""
                />
              </div>
            </div>
            <div className="each-slide-effect">
              <div className="remoteIdentity_slide-page3 d-flex">
                <div className="remoteIdentity_slide-page3-body d-flex flex-column justify-content-center">
                  <h4>Certified safety</h4>
                  <p>
                    The technology is secure, as is our company. We are the most
                    certified in the identity verification industry: ISO27001,
                    ISO27701 and eIDAS-compliant certified under ETSI EN 319 401
                    and ETSI EN 319 411-1/2 standards. We comply with SOC2 Type
                    2 as well as with EBA outsourcing guidelines. MobileID is
                    based in the EU and follows GDPR compliance. We are
                    regularly pen-tested by external expert.
                  </p>
                  <p>
                    We use a SaaS architecture, as client-based solutions are
                    not secure enough in general. We collaborate with the best
                    facial verification partners for holder verification.
                  </p>
                  <Link>
                    Learn more about our certifications
                    <FiArrowRight />
                  </Link>
                </div>
                <img
                  className="remoteIdentity_slide-page3-img"
                  src={page3_certifield}
                  alt=""
                />
              </div>
            </div>
          </SlideReact>
        </div>
        <div className="remoteIdentity_dowload d-flex justify-content-center">
          <div className="remoteIdentity_dowload-layout d-flex justify-content-center align-items-center">
            <img className="remoteIdentity_dowload-img" src={readid} alt="" />
            <div className="remoteIdentity_dowload-body">
              <h3>Simplify your identity verification process with NFC</h3>
              <p>Read all about it</p>
              <Button
                sx={{
                  padding: "21px 37.425px 21px 37.625px",
                  borderRadius: "29px",
                  backgroundColor: "#fff",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "16px",
                  color: "var(--primary-2)",
                  textTransform: "none",
                  marginTop: "30px",
                  "&:hover": {
                    backgroundColor: "var(--primary-1)",
                    color: "#fff",
                  },
                }}
              >
                Go to research paper
              </Button>
            </div>
          </div>
        </div>
        <div className="remoteIdentity_help d-flex flex-column align-items-center justify-content-center">
          <div className="remoteIdentity_help-layout d-flex flex-column align-items-center justify-content-center">
            <h1 className="remoteIdentity_help-header">How CheckID helps</h1>
            <Grid
              className="remoteIdentity_help-grid"
              container
              spacing={{ xs: 1 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid xs={4} className="remoteIdentity_help-grid-item">
                <Box>
                  <GraphBar />
                </Box>
                <h5>Maximal scalability</h5>
                <p>
                  CheckID can scale from a few to hundreds-of- thousands of
                  scans per day. No manual steps involved.
                </p>
              </Grid>
              <Grid xs={4} className="remoteIdentity_help-grid-item">
                <Box>
                  <DoubleTap />
                </Box>
                <h5>Easy to use</h5>
                <p>
                  A great user experience leads to satisfied customers. CheckID
                  is very easy to use, creating great conversion.
                </p>
              </Grid>
              <Grid xs={4} className="remoteIdentity_help-grid-item">
                <Box>
                  <LockShield />
                </Box>
                <h5>Extremely secure</h5>
                <p>
                  We read and verify the contents of chip in the identity
                  document. Tamper proof, guaranteed, including clone detection.
                </p>
              </Grid>
              <Grid xs={4} className="remoteIdentity_help-grid-item">
                <Box>
                  <EarthNetwork />
                </Box>
                <h5>Hosted in Europe</h5>
                <p>
                  We host our software in Europe and are GDPR compliant. If
                  needed we can run CheckID in the region of your preference.
                </p>
              </Grid>
              <Grid xs={4} className="remoteIdentity_help-grid-item">
                <Box>
                  <Setting />
                </Box>
                <h5>Simple to implement</h5>
                <p>
                  Integrate our SDK in your app or use our ready-to-use app
                  CheckID Ready. Get up and running within weeks.
                </p>
              </Grid>
              <Grid xs={4} className="remoteIdentity_help-grid-item">
                <Box>
                  <ChartPerson />
                </Box>
                <h5>Correct personal data</h5>
                <p>
                  All personal information obtained from the chip is correct. No
                  OCR mistakes, no characters missed, no fields overlooked.
                </p>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="remoteIdentity_verify d-flex flex-column">
          <div className="remoteIdentity_verify-header d-flex flex-column align-items-center">
            <h2>Start today</h2>
            <h1>Solutions to solve any identity verification challenge</h1>
            <p>
              CheckID is available for integration through our SDK but you can
              also use our ready-to-use app.
            </p>
          </div>
          <div className="remoteIdentity_verify-body d-flex justify-content-center">
            <div className="remoteIdentity_verify-body-item d-flex flex-column justify-content-between">
              <div>
                <h5>CheckID Ready</h5>
                <p>
                  CheckID Ready is our ready-to-use app that can be tailored to
                  the clients’ look and feel and can be up and running within
                  days.
                </p>
              </div>
              <BlueButton>
                CheckID Ready
                <FiArrowRight />
              </BlueButton>
            </div>
            <div className="remoteIdentity_verify-body-item d-flex flex-column justify-content-between">
              <div>
                <h5>CheckID SaaS</h5>
                <p>
                  Our SDK can be integrated in any mobile application through
                  well-documented APIs. You can have full control of user
                  interaction or leverage the knowledge in our high-level API.
                </p>
              </div>
              <BlueButton>
                CheckID SaaS
                <FiArrowRight />
              </BlueButton>
            </div>
          </div>
        </div>
        <div className="remoteIdentity_challenge">
          <div className="remoteIdentity_challenge-layout">
            <img src={challenge} alt="" />
            <div className="remoteIdentity_challenge-form">
              <h3>Let’s talk about your challenge.</h3>
              <p>
                In a digital world distance does not exist. But how do you
                realise enough trust to do business at a distance?
              </p>
              <TextField
                id="outlined-multiline-static"
                label="What can we help you with?*"
                multiline
                rows={4}
              />
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                  />
                </Grid>
              </Grid>
              <FormControlLabel
                control={<Checkbox />}
                label="Stay informed about identity verification, subscribe for our newsletter."
              />
              <p>
                We’re committed to protecting and respecting your privacy. For
                more information read our <Link>Privacy Policy.</Link>
              </p>
              <Button
                sx={{
                  padding: "21px 37.425px 21px 37.625px",
                  borderRadius: "29px",
                  backgroundColor: "#fff",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "16px",
                  color: "var(--primary-1)",
                  textTransform: "none",
                  marginTop: "30px",
                  "&:hover": {
                    backgroundColor: "var(--primary-2)",
                    color: "#fff",
                  },
                }}
              >
                Go to research paper
              </Button>
              <p>We’ll reply within 1 day.</p>
            </div>
          </div>
        </div>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default RemoteIdentityVerification;
