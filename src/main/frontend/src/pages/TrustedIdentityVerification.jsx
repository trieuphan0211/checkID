import React from "react";
import { Link } from "react-router-dom";

import { Slide as SlideReact } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { Header, SubHeader } from "../components/headers";
import Footer from "../components/Footer";
import "../assets/scss/TrustedIdentityVerification.scss";
import readid from "../assets/img/trusted_identity_verification/readid-app-passport.png";
import create_conversion from "../assets/img/trusted_identity_verification/create_conversion.png";
import page1_avata from "../assets/img/trusted_identity_verification/avatar.png";
import page2_scalability from "../assets/img/trusted_identity_verification/scalability.png";
import page3_easyToUse from "../assets/img/trusted_identity_verification/easy-to-use.png";
import page4_security from "../assets/img/trusted_identity_verification/security-priority.png";
import page5_avata from "../assets/img/trusted_identity_verification/Rianne-rolsma.png";
import page5_implementation from "../assets/img/trusted_identity_verification/implementation.png";
import readid_guide from "../assets/video/readid-guide.mp4";
import remote from "../assets/img/home_page/remote-icon.png";
import facetoface from "../assets/img/home_page/face-to-face.png";
import feature from "../assets/img/home_page/Featured-image-website-blog.png";
import banner from "../assets/img/home_page/banner_readid_phone-app.png";
import talkChallenge from "../assets/img/trusted_identity_verification/talkChallenge.png";

import { AppBar, Box, Button, Slide, useScrollTrigger } from "@mui/material";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "usehooks-ts";

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

const VerifyButton = styled(Button)({
  backgroundColor: "transparent",
  color: "#fff",
  border: "2px solid #fff",
  textTransform: "none",
  padding: "20px 70px",
  fontSize: "1.6em",
  fontWeight: "700",
  borderRadius: "30px",
  height: "58px",
  "&:hover": {
    backgroundColor: "#0074ff",
    border: "2px solid #0074ff",
  },
});
const LearnButton = styled(Button)({
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

const TrustedIdentityVerification = (props) => {
  // set Title
  document.title = "CheckID | Trusted Identity Verification";
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
            slideIndex === 4 ? "transparent" : "var(--primary-1)",
          "&:hover": {
            backgroundColor:
              slideIndex === 4 ? "transparent" : "var(--primary-1)",
          },
        }}
        disabled={slideIndex === 4 ? true : false}
      >
        <ArrowForwardIosIcon
          sx={{
            fontSize: "40px",
            color: slideIndex === 4 ? "var(--primary-1)" : "#fff",
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
            backgroundColor: "white",
          }}
        >
          <SubHeader />
          <Header />
        </AppBar>
      </HideOnScroll>
      <Box className="trustedIdentity">
        <div className="trustedIdentity_intro d-flex flex-column align-items-center">
          <h4 className="trustedIdentity_intro-title">
            {t("trustedIdentity.intro.identityVerification")}
          </h4>
          <h1 className="trustedIdentity_intro-header">
            {t("trustedIdentity.intro.secureFlawless")}
          </h1>
          <p className="trustedIdentity_intro-context">
            {t("trustedIdentity.intro.context")}
          </p>
        </div>
        <div className="trustedIdentity_info d-flex justify-content-center">
          <div className="trustedIdentity_info-layout d-flex align-items-end">
            <div className="trustedIdentity_info-content">
              <h3 className="trustedIdentity_info-content-header">
                {t("trustedIdentity.info.header")}
              </h3>
              <p className="trustedIdentity_info-content-p">
                {t("trustedIdentity.info.body1")}
              </p>
              <p className="trustedIdentity_info-content-p">
                {t("trustedIdentity.info.body2")}
              </p>
              <Button
                sx={{
                  borderRadius: "29px",
                  border: "2px solid #fff",
                  padding: "20px 40px",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "700",
                  textTransform: "none",
                  lineHeight: "16px",
                  "&:hover": {
                    backgroundColor: "#0074ff",
                    border: "2px solid #0074ff",
                  },
                }}
              >
                {t("trustedIdentity.info.contact")}
              </Button>
            </div>
            {/* <div className="trustedIdentity_info-img">
              <img src={inverid} alt="" />
              <div></div>
            </div> */}
            <div className="trustedIdentity_info-video">
              <video controls>
                <source src={readid_guide} />
              </video>
              <div></div>
            </div>
          </div>
        </div>
        <div className="trustedIdentity_smartphone d-flex justify-content-center">
          <div className="trustedIdentity_smartphone-layout d-flex">
            <div className="trustedIdentity_smartphone-header">
              <div className="trustedIdentity_smartphone-header-year d-flex align-items-center justify-content-center">
                {t("trustedIdentity.smartphone.year")}
              </div>
              <div className="trustedIdentity_smartphone-header-context">
                {t("trustedIdentity.smartphone.header")}
              </div>
            </div>
            <div className="trustedIdentity_smartphone-body">
              <p className="trustedIdentity_smartphone-body-context">
                {t("trustedIdentity.smartphone.body1")}
              </p>
              <h6 className="trustedIdentity_smartphone-body-h6">
                {t("trustedIdentity.smartphone.subHeader")}
              </h6>
              <p className="trustedIdentity_smartphone-body-context">
                {t("trustedIdentity.smartphone.body2")}
              </p>
            </div>
          </div>
        </div>
        <div className="trustedIdentity_dowload d-flex justify-content-center">
          <div className="trustedIdentity_dowload-layout d-flex justify-content-center align-items-center">
            <img className="trustedIdentity_dowload-img" src={readid} alt="" />
            <div className="trustedIdentity_dowload-body">
              <h3> {t("trustedIdentity.dowload.header")}</h3>
              <Button
                sx={{
                  padding: "21px 37.425px 21px 37.625px",
                  borderRadius: "29px",
                  backgroundColor: "var(--primary-2)",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "16px",
                  color: "#fff",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#0074ff",
                  },
                }}
              >
                {t("trustedIdentity.dowload.dowload")}
              </Button>
            </div>
          </div>
        </div>
        <div className="trustedIdentity_slide">
          <SlideReact {...properties}>
            <div className="each-slide-effect">
              <div className="trustedIdentity_slide-page1 d-flex">
                <div className="trustedIdentity_slide-page1-body">
                  <h4> {t("trustedIdentity.slide.1.header")}</h4>
                  <p>{t("trustedIdentity.slide.1.body")}</p>
                  <Link>
                    {t("trustedIdentity.slide.1.link")}
                    <FiArrowRight />
                  </Link>
                  <div className="page1_body">
                    <img
                      className="page1_body-avata"
                      src={page1_avata}
                      alt=""
                    />
                    <div className="page1_body-body">
                      <h6>{t("trustedIdentity.slide.1.feedback.name")}</h6>
                      <p>{t("trustedIdentity.slide.1.feedback.title")}</p>
                      <p>{t("trustedIdentity.slide.1.feedback.body")}</p>
                    </div>
                  </div>
                </div>
                <img
                  className="trustedIdentity_slide-page1-img"
                  src={create_conversion}
                  alt=""
                />
              </div>
            </div>
            <div className="each-slide-effect">
              <div className="trustedIdentity_slide-page2 d-flex justify-content-end">
                <div className="trustedIdentity_slide-page2-body d-flex flex-column justify-content-center">
                  <h4> {t("trustedIdentity.slide.2.header")}</h4>
                  <p>{t("trustedIdentity.slide.2.body")}</p>
                  <Link>
                    {t("trustedIdentity.slide.2.link")}
                    <FiArrowRight />
                  </Link>
                </div>
                <img
                  className="trustedIdentity_slide-page2-img"
                  src={page2_scalability}
                  alt=""
                />
              </div>
            </div>
            <div className="each-slide-effect">
              <div className="trustedIdentity_slide-page3 d-flex">
                <div className="trustedIdentity_slide-page3-body d-flex flex-column justify-content-center">
                  <h4> {t("trustedIdentity.slide.3.header")}</h4>
                  <p>{t("trustedIdentity.slide.3.body")}</p>
                  <Link>
                    {t("trustedIdentity.slide.3.link")}
                    <FiArrowRight />
                  </Link>
                </div>
                <img
                  className="trustedIdentity_slide-page3-img"
                  src={page3_easyToUse}
                  alt=""
                />
              </div>
            </div>
            <div className="each-slide-effect">
              <div className="trustedIdentity_slide-page4 d-flex justify-content-end">
                <div className="trustedIdentity_slide-page4-body d-flex flex-column justify-content-center">
                  <h4> {t("trustedIdentity.slide.4.header")}</h4>
                  <p>{t("trustedIdentity.slide.4.body")}</p>
                  <Link>
                    {t("trustedIdentity.slide.4.link1")}
                    <FiArrowRight />
                  </Link>
                  <Link>
                    {t("trustedIdentity.slide.4.link2")}
                    <FiArrowRight />
                  </Link>
                </div>
                <img
                  className="trustedIdentity_slide-page4-img"
                  src={page4_security}
                  alt=""
                />
              </div>
            </div>
            <div className="each-slide-effect">
              <div className="trustedIdentity_slide-page5 d-flex">
                <div className="trustedIdentity_slide-page5-body">
                  <h4> {t("trustedIdentity.slide.5.header")}</h4>
                  <p>{t("trustedIdentity.slide.5.body")}</p>
                  <Link>
                    {t("trustedIdentity.slide.5.link")}
                    <FiArrowRight />
                  </Link>
                  <div className="page5_body">
                    <img
                      className="page5_body-avata"
                      src={page5_avata}
                      alt=""
                    />
                    <div className="page5_body-body">
                      <h6> {t("trustedIdentity.slide.5.feedback.name")}</h6>
                      <p>{t("trustedIdentity.slide.5.feedback.title")}</p>
                      <p>{t("trustedIdentity.slide.5.feedback.body")}</p>
                    </div>
                  </div>
                </div>
                <img
                  className="trustedIdentity_slide-page5-img"
                  src={page5_implementation}
                  alt=""
                />
              </div>
            </div>
          </SlideReact>
        </div>
        <div className="trustedIdentity_verified d-flex justify-content-center">
          <div className="trustedIdentity_verified-layout">
            <div className="trustedIdentity_verified-body">
              <h3>{t("trustedIdentity.verified.header")}</h3>
              <p>{t("trustedIdentity.verified.body")}</p>
              <Button
                sx={{
                  padding: "21px 37.425px 21px 37.625px",
                  borderRadius: "29px",
                  backgroundColor: "var(--primary-2)",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "16px",
                  color: "#fff",
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "#2b8bff",
                  },
                }}
              >
                {t("trustedIdentity.verified.button")}
              </Button>
            </div>
            <div className="trustedIdentity_verified-video">
              <video controls>
                <source src={readid_guide} />
              </video>
              <div></div>
              <p className="trustedIdentity_verified-video-title">
                {t("trustedIdentity.verified.subVideo")}
              </p>
            </div>
          </div>
        </div>
        <div className="trustedIdentity_verify d-flex flex-column">
          <div className="trustedIdentity_verify-header d-flex flex-column align-items-center">
            <h2>{t("trustedIdentity.verify.header.title")}</h2>
            <h1>{t("trustedIdentity.verify.header.body")}</h1>
            <p>{t("trustedIdentity.verify.header.question")}</p>
          </div>
          <div className="trustedIdentity_verify-body d-flex justify-content-center">
            <div className="trustedIdentity_verify-body-item d-flex flex-column justify-content-between">
              <div className="d-flex">
                <p>{t("trustedIdentity.verify.body.remote.title")}</p>
                <img src={remote} alt="" />
              </div>
              <VerifyButton>
                {t("trustedIdentity.verify.body.remote.button")}
                <FiArrowRight />
              </VerifyButton>
            </div>
            <div className="trustedIdentity_verify-body-item d-flex flex-column justify-content-between">
              <div className="d-flex ">
                <p>{t("trustedIdentity.verify.body.facetoface.title")}</p>
                <img src={facetoface} alt="" />
              </div>
              <VerifyButton>
                {t("trustedIdentity.verify.body.facetoface.button")}
                <FiArrowRight />
              </VerifyButton>
            </div>
          </div>
        </div>
        <div className="trustedIdentity_news d-flex flex-column align-items-center">
          <div className="trustedIdentity_news-info d-flex ">
            <div className="trustedIdentity_news-info-title">
              <h3> {t("trustedIdentity.news.info.title.header")}</h3>
              <p>{t("trustedIdentity.news.info.title.body")}</p>
              <p>
                {t("trustedIdentity.news.info.title.goto")}
                <FiArrowRight />
              </p>
            </div>
            <div className="trustedIdentity_news-info-body d-flex">
              <div className="trustedIdentity_news-info-body-item">
                <img src={feature} alt="" />
                <h4>{t("trustedIdentity.news.info.body.austrian.header")}</h4>
                <p>{t("trustedIdentity.news.info.body.austrian.body")}</p>
              </div>
              <div className="trustedIdentity_news-info-body-item">
                <img src={banner} alt="" />
                <h4>{t("trustedIdentity.news.info.body.gartner.header")}</h4>
                <p>{t("trustedIdentity.news.info.body.gartner.body")}</p>
              </div>
            </div>
          </div>
          <div className="trustedIdentity_news-talk d-flex justify-content-center">
            <img src={talkChallenge} alt="" />
            <div>
              <h3>{t("trustedIdentity.news.talk.header")}</h3>
              <h5>{t("trustedIdentity.news.talk.body")}</h5>
              <LearnButton>{t("trustedIdentity.news.talk.button")}</LearnButton>
              <p>
                {t("trustedIdentity.news.talk.downloads")}
                <FiArrowRight />
              </p>
            </div>
          </div>
        </div>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default TrustedIdentityVerification;
