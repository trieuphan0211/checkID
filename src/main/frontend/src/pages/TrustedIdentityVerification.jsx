import React from "react";
import { Link } from "react-router-dom";

import { Slide as SlideReact } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { Header, SubHeader } from "../components/headers";
import Footer from "../components/Footer";
import "../assets/css/TrustedIdentityVerification.css";
import inverid from "../assets/img/trusted_identity_verification/inverid.png";
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
import talkChallenge from "../assets/img/home_page/talkChallenge.png";

import { AppBar, Box, Button, Slide, useScrollTrigger } from "@mui/material";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { FiArrowRight } from "react-icons/fi";
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
  const { t } = useTranslation();
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
          marginLeft: "145px",
        }}
      >
        <ArrowBackIosIcon
          sx={{
            fontSize: "40px",
            marginLeft: "18px",
            color: "var(--primary-1)",
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
          marginRight: "145px",
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            fontSize: "40px",
            color: "var(--primary-1)",
            // marginRight: "18px",
          }}
        />
      </Button>
    ),
    autoplay: false,
    canSwipe: false,
    // transitionDuration: 500,
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
            nfc-first Identity Verification
          </h4>
          <h1 className="trustedIdentity_intro-header">
            Secure, Flawless and Easy Mobile Identity Verification
          </h1>
          <p className="trustedIdentity_intro-context">
            Because the smartphone-minded generation expects nothing less. Why
            make identity document verification more complicated than needed? Or
            compromise on security? NFC combines a great user experience with
            maximum security.
          </p>
        </div>
        <div className="trustedIdentity_info d-flex justify-content-center">
          <div className="trustedIdentity_info-layout d-flex align-items-end">
            <div className="trustedIdentity_info-content">
              <h3 className="trustedIdentity_info-content-header">
                CheckID identity verification
              </h3>
              <p className="trustedIdentity_info-content-p">
                In two simple steps, you can verify any electronic identity
                document. Easy to use, with high conversion, scalable, simple to
                implement. And more secure than any other technology. 
              </p>
              <p className="trustedIdentity_info-content-p">
                Compliment NFC with biometrics for holder verification or
                optical technologies as a fallback. 
              </p>
              <Button
                sx={{
                  borderRadius: "29px",
                  border: "2px solid #fff",
                  padding: "20px 40px",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  lineHeight: "16px",
                }}
              >
                Contact a specialist
              </Button>
            </div>
            <div className="trustedIdentity_info-img">
              <img src={inverid} alt="" />
              <div></div>
            </div>
          </div>
        </div>
        <div className="trustedIdentity_smartphone d-flex justify-content-center">
          <div className="trustedIdentity_smartphone-layout d-flex">
            <div className="trustedIdentity_smartphone-header">
              <div className="trustedIdentity_smartphone-header-year d-flex align-items-center justify-content-center">
                2600
              </div>
              <div className="trustedIdentity_smartphone-header-context">
                CheckID has been proven to work with over 2600 models of
                smartphones
              </div>
            </div>
            <div className="trustedIdentity_smartphone-body">
              <p className="trustedIdentity_smartphone-body-context">
                Today, almost anyone knows how to operate a smartphone, and most
                smartphones have built-in NFC functionality. In-store payments
                with NFC have become a common sight. We use that same technology
                for reliable ID verification. It makes identity verification
                safe, secure, quick, easy, and saves staff and customers oceans
                of time spent per exchange, both online as well as in
                face-to-face situations. 
              </p>
              <h6 className="trustedIdentity_smartphone-body-h6">
                We were the first mobile NFC-based technology provider in 2014,
                and were the first on iPhone in 2019.
              </h6>
              <p className="trustedIdentity_smartphone-body-context">
                Using just a smartphone and an electronic identity document,
                CheckID technology can verify your customers' identity.
                Instantly. It is the most trustworthy identity verification
                solution on the market. CheckID can be combined with facial
                biometric technology for holder verification as an extra layer
                of assurance, and optical verification can be orchestrated
                through partners as a fallback- no need to miss any
                opportunity. 
              </p>
            </div>
          </div>
        </div>
        <div className="trustedIdentity_dowload d-flex justify-content-center">
          <div className="trustedIdentity_dowload-layout d-flex justify-content-center align-items-center">
            <img className="trustedIdentity_dowload-img" src={readid} alt="" />
            <div className="trustedIdentity_dowload-body">
              <h3>Simplify your identity verification process with NFC</h3>
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
                    backgroundColor: "var(--primary-2)",
                  },
                }}
              >
                Download report 'Why NFC First works'
              </Button>
            </div>
          </div>
        </div>
        <div className="trustedIdentity_slide">
          <SlideReact {...properties}>
            <div className="each-slide-effect">
              <div className="trustedIdentity_slide-page1 d-flex">
                <div className="trustedIdentity_slide-page1-body">
                  <h4>Create conversion</h4>
                  <p>
                    Ultimately, remote identity verification should bring
                    conversion, and not churn. KYC or reKYC should be easy for
                    your customers, increasing trust and strengthening the
                    brand. Many of our clients show that CheckID improves
                    conversion in their digital channels. No need to worry
                    about smartphone and eID coverage. Our dynamic user guidance
                    ensures a smooth customer experience. 
                  </p>
                  <Link>
                    More on conversion <FiArrowRight />
                  </Link>
                  <div className="page1_body">
                    <img
                      className="page1_body-avata"
                      src={page1_avata}
                      alt=""
                    />
                    <div className="page1_body-body">
                      <h6>Evelien Mooij</h6>
                      <p>Product Manager Customer Onboarding Rabobank</p>
                      <p>
                        “We have grown the online channel for onboarding new
                        customers from 35% to 60%”
                      </p>
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
                  <h4>Scalability on demand</h4>
                  <p>
                    The need for identification can vary over time. New use
                    cases or regulation can cause a steep growth in demand for
                    trusted identification. Contrary to the technologies we
                    replace, such as optical verification and video
                    identification, CheckID technology is fully automated and
                    has almost unlimited scalability. We run our service in
                    secure public cloud infrastructures, fitting to the region,
                    scaling with demand. No manual labour or employees needed.
                    Our solutions are continuously monitored to grow with the
                    demand. If demand goes down, we can scale down with it.
                  </p>
                  <Link>
                    More on scalability <FiArrowRight />
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
                  <h4>Easy to use</h4>
                  <p>
                    CheckID is built upon knowledge derived from millions of
                    transactions on over 2600 different models of smartphones.
                    From our extensive experience and millions of scans of
                    documents worldwide, we have learned how to deal with this
                    tremendous diversity. CheckID is fast and verifies in
                    real-time; the total customer journey, including the
                    verification, takes less than one minute. 
                  </p>
                  <p>
                    In face-to-face situations your staff will need very little
                    training with CheckID to become identity document experts. 
                  </p>
                  <Link>
                    More on our user experience <FiArrowRight />
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
                  <h4>Security as a top priority</h4>
                  <p>
                    Only the NFC chip in identity documents allows secure
                    verification. Electronic identity documents can be verified
                    in seconds. Manipulated and copied documents are always
                    detected, 100% of the time.  We collaborate with the best
                    face verification partners for holder verification.
                  </p>
                  <Link>
                    More on security <FiArrowRight />
                  </Link>{" "}
                  <Link>
                    Our certifications <FiArrowRight />
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
              <div className="trustedIdentity_slide-page5 d-flex align-items-center">
                <div className="trustedIdentity_slide-page5-body">
                  <h4>Simple implementation</h4>
                  <p>
                    CheckID is straightforward to evaluate and implement. Our
                    free personal app CheckID Me is readily available on the App
                    Store and the Google Play store. Our ready-to-use CheckID
                    Ready app can be tailored to your brand’s look and feel. It
                    can be up and running within days. Our SDK can be integrated
                    in any mobile application through well-documented APIs.
                  </p>
                  <Link>
                    How to implement CheckID <FiArrowRight />
                  </Link>
                  <div className="page5_body">
                    <img
                      className="page5_body-avata"
                      src={page5_avata}
                      alt=""
                    />
                    <div className="page5_body-body">
                      <h6>Rianne Rolsma</h6>
                      <p>Product owner at Aegon</p>
                      <p>
                        “It took us only 6 weeks to implement the
                        re-verification technology at Aegon from scratch”
                      </p>
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
              <h3>
                More than 737.000 verified identities in less than 2 weeks
              </h3>
              <p>
                Thanks to CheckID, it is now possible to leave the physical
                driving license at home in the drawer and use the Kørekort-appen
                instead. The app is a digital version of the driving license
                that works both as a valid driving license in Denmark and as a
                valid form of ID. “It clearly shows that there is a demand in
                the population for a digital alternative to the physical driving
                license,” says Minister of Transport Benny Engelbrecht in a
                comment.
              </p>
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
                    backgroundColor: "var(--primary-2)",
                  },
                }}
              >
                Use case Kørekort-appen
              </Button>
            </div>
            <div className="trustedIdentity_verified-video">
              <video controls>
                <source src={readid_guide} />
              </video>
              <div></div>
            </div>
          </div>
        </div>
        <div className="trustedIdentity_verify d-flex flex-column">
          <div className="trustedIdentity_verify-header d-flex flex-column align-items-center">
            <h2>MobileID identity verification solutions</h2>
            <h1>
              Accelerate towards a trusted and scalable way of NFC-first
              identity verification
            </h1>
            <p>
              Our CheckID technology can be used remotely as well as in
              face-to-face settings. What is your use case?
            </p>
          </div>
          <div className="trustedIdentity_verify-body d-flex justify-content-center">
            <div className="trustedIdentity_verify-body-item d-flex flex-column justify-content-between">
              <div className="d-flex">
                <p>
                  Instant and secure online self-service identity verification
                  from the comfort of people’s homes.
                </p>
                <img src={remote} alt="" />
              </div>
              <VerifyButton>
                Remote identity verification
                <FiArrowRight />
              </VerifyButton>
            </div>
            <div className="trustedIdentity_verify-body-item d-flex flex-column justify-content-between">
              <div className="d-flex ">
                <p>
                  Face-to-face, with trusted devices, you can verify identity
                  documents without any knowledge of security features.
                </p>
                <img src={facetoface} alt="" />
              </div>
              <VerifyButton>
                Face-to-face identity verification
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
          <div className="trustedIdentity_news-talk d-flex">
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
