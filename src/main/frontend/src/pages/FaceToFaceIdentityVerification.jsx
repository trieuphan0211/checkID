import React from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "usehooks-ts";

import { Slide as SlideReact } from "react-slideshow-image";

import { Header, SubHeader } from "../components/headers";
import { ChartPerson, Like, LockShield } from "../icons";
import { mailContact } from "../services/RemoteIdentityService";
import "../assets/scss/FaceToFaceIdentityVerification.scss";
import scanning from "../assets/img/face_to_face_identity_verification/scanning.png";
import simplify_identity from "../assets/img/face_to_face_identity_verification/simplify_identity.png";
import page1_background from "../assets/img/face_to_face_identity_verification/slider/slide1.png";
import page1_avata from "../assets/img/face_to_face_identity_verification/slider/page1_avata.png";
import page2 from "../assets/img/face_to_face_identity_verification/slider/page2.png";
import page3 from "../assets/img/face_to_face_identity_verification/slider/page3.png";
import readid from "../assets/img/trusted_identity_verification/readid-app-passport.png";
import challenge from "../assets/img/face_to_face_identity_verification/challenge.png";

import {
  Alert,
  AppBar,
  Backdrop,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  Slide,
  Snackbar,
  TextField,
  useScrollTrigger,
} from "@mui/material";
import PropTypes from "prop-types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import ReCAPTCHA from "react-google-recaptcha";

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
// Begin: custom MUI components
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
  width: "100%",
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
const TextFieldCustom = styled(TextField)({
  width: "100%",
  "& label": {
    color: "#fff",
  },
  "& label.Mui-focused": {
    fontWeight: "700",
  },
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "var(--primary-2)",
    },
  },
});
// End: custom MUI components

const FaceToFaceIdentityVerification = (props) => {
  // set Title
  document.title = "Face To Face Identity Verification | CheckID";
  //
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState("warning");
  const [stateOpen, setStateOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const { width } = useWindowSize();
  // Begin: Slider
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
  // End: Slider
  // Begin: capcha
  const [recaptcha, setRecaptcha] = React.useState(null);
  const onChange = (value) => {
    setRecaptcha(value);
  };
  // End: capcha
  //service
  const [checkNul, setCheckNul] = React.useState({
    decription: false,
    email: false,
    firstName: false,
    lastName: false,
    companyName: false,
  });
  const [decription, setDecription] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [check, setCheck] = React.useState(false);
  var regEx = /\S+@\S+\.\S+/;
  const sendMail = async () => {
    setOpen(true);
    if (
      decription === "" ||
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      companyName === "" ||
      !regEx.test(email)
    ) {
      const checkInfo = {};
      if (decription === "") {
        checkInfo.decription = true;
      }
      if (email === "") {
        checkInfo.email = true;
      }
      if (firstName === "") {
        checkInfo.firstName = true;
      }
      if (lastName === "") {
        checkInfo.lastName = true;
      }
      if (companyName === "") {
        checkInfo.companyName = true;
      }
      if (!regEx.test(email) || email === "") {
        checkInfo.email = true;
      }
      setCheckNul({ ...checkNul, ...checkInfo });
    } else {
      const mesage = await mailContact({
        name:
          i18n.language === 0
            ? firstName + " " + lastName
            : lastName + " " + firstName,
        email: email,
        company: companyName,
        description: decription,
        signup: check ? "Agree" : "Disagree",
      });
      console.log(mesage);
      setState(mesage);
      setStateOpen(true);
    }

    setOpen(false);
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
      <Box className="faceToFaceIdentity">
        <div className="faceToFaceIdentity_conversionRate d-flex">
          <div className="faceToFaceIdentity_conversionRate-layout">
            <h5 className="faceToFaceIdentity_conversionRate-title">
              {t("faceToFaceIdentity.conversionRate.title")}
            </h5>
            <h1 className="faceToFaceIdentity_conversionRate-header">
              {t("faceToFaceIdentity.conversionRate.header")}
            </h1>
            <p className="faceToFaceIdentity_conversionRate-body">
              {t("faceToFaceIdentity.conversionRate.body")}
            </p>
            <p className="faceToFaceIdentity_conversionRate-body">
              {t("faceToFaceIdentity.conversionRate.body2")}
            </p>
            <BlueButton
              sx={{
                marginTop: "36px",
              }}
            >
              {t("faceToFaceIdentity.conversionRate.button")}
            </BlueButton>
          </div>
          <img
            className="faceToFaceIdentity_conversionRate-img"
            src={scanning}
            alt=""
          />
        </div>
        <div className="faceToFaceIdentity_building d-flex flex-column align-items-center">
          <h5 className="faceToFaceIdentity_building-header">
            {t("faceToFaceIdentity.building.header")}
          </h5>
          <p className="faceToFaceIdentity_building-body ">
            {t("faceToFaceIdentity.building.body")}
          </p>
        </div>
        <div className="faceToFaceIdentity_matter">
          <div className="faceToFaceIdentity_matter-layout">
            <img
              className="faceToFaceIdentity_matter-img"
              src={simplify_identity}
              alt=""
            />
            <div className="faceToFaceIdentity_matter-content">
              <h6 className="faceToFaceIdentity_matter-content-title">
                {t("faceToFaceIdentity.matter.title")}
              </h6>
              <h3 className="faceToFaceIdentity_matter-content-header">
                {t("faceToFaceIdentity.matter.header")}
              </h3>
              <p className="faceToFaceIdentity_matter-content-body">
                {t("faceToFaceIdentity.matter.body")}
              </p>
              <TransparentButton sx={{ marginTop: "30px" }}>
                {t("faceToFaceIdentity.matter.button")}
              </TransparentButton>
            </div>
          </div>
        </div>
        <div className="faceToFaceIdentity_slide">
          <SlideReact {...properties}>
            <div className="each-slide-effect">
              <div className="faceToFaceIdentity_slide-page1 d-flex">
                <div className="faceToFaceIdentity_slide-page1-body">
                  <h4>{t("faceToFaceIdentity.slide.1.header")}</h4>
                  <p>{t("faceToFaceIdentity.slide.1.body")}</p>
                  <p>{t("faceToFaceIdentity.slide.1.body2")}</p>
                  <Link>
                    {t("faceToFaceIdentity.slide.1.link")}

                    <FiArrowRight />
                  </Link>
                  <div className="page1_body">
                    <img
                      className="page1_body-avata"
                      src={page1_avata}
                      alt=""
                    />
                    <div className="page1_body-body">
                      <h6> {t("faceToFaceIdentity.slide.1.feedback.name")}</h6>
                      <p>{t("faceToFaceIdentity.slide.1.feedback.title")}</p>
                      <p>{t("faceToFaceIdentity.slide.1.feedback.body")}</p>
                    </div>
                  </div>
                </div>
                <img
                  className="faceToFaceIdentity_slide-page1-img"
                  src={page1_background}
                  alt=""
                />
              </div>
            </div>
            <div className="each-slide-effect">
              <div className="faceToFaceIdentity_slide-page2 d-flex">
                <div className="faceToFaceIdentity_slide-page2-body d-flex flex-column justify-content-center">
                  <h4>{t("faceToFaceIdentity.slide.2.header")}</h4>
                  <p>{t("faceToFaceIdentity.slide.2.body")}</p>
                  <p>{t("faceToFaceIdentity.slide.2.body2")}</p>
                  <h6> {t("faceToFaceIdentity.slide.2.list.header")}</h6>
                  <ul className="page2_list">
                    <li>
                      <FiberManualRecordIcon
                        sx={{
                          fontSize: "12px",
                          marginRight: "12px",
                          color: "var(--primary-2)",
                        }}
                      />
                      {t("faceToFaceIdentity.slide.2.list.1")}
                    </li>
                    <li>
                      <FiberManualRecordIcon
                        sx={{
                          fontSize: "12px",
                          marginRight: "12px",
                          color: "var(--primary-2)",
                        }}
                      />
                      {t("faceToFaceIdentity.slide.2.list.2")}
                    </li>
                    <li>
                      <FiberManualRecordIcon
                        sx={{
                          fontSize: "12px",
                          marginRight: "12px",
                          color: "var(--primary-2)",
                        }}
                      />
                      {t("faceToFaceIdentity.slide.2.list.3")}
                    </li>
                  </ul>
                </div>
                <img
                  className="faceToFaceIdentity_slide-page2-img"
                  src={page2}
                  alt=""
                />
              </div>
            </div>
            <div className="each-slide-effect">
              <div className="faceToFaceIdentity_slide-page3 d-flex">
                <div className="faceToFaceIdentity_slide-page3-body d-flex flex-column justify-content-center">
                  <h4>{t("faceToFaceIdentity.slide.3.header")}</h4>
                  <p>{t("faceToFaceIdentity.slide.3.body")}</p>
                  <p>{t("faceToFaceIdentity.slide.3.body2")}</p>
                  <Link>
                    {t("faceToFaceIdentity.slide.3.link")}
                    <FiArrowRight />
                  </Link>
                </div>
                <img
                  className="faceToFaceIdentity_slide-page3-img"
                  src={page3}
                  alt=""
                />
              </div>
            </div>
          </SlideReact>
        </div>
        <div className="faceToFaceIdentity_dowload d-flex justify-content-center">
          <div className="faceToFaceIdentity_dowload-layout d-flex justify-content-center align-items-center">
            <img
              className="faceToFaceIdentity_dowload-img"
              src={readid}
              alt=""
            />
            <div className="faceToFaceIdentity_dowload-body">
              <h3> {t("faceToFaceIdentity.dowload.header")}</h3>
              <p>{t("faceToFaceIdentity.dowload.read")}</p>
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
                {t("faceToFaceIdentity.dowload.button")}
              </Button>
            </div>
          </div>
        </div>
        <div className="faceToFaceIdentity_help d-flex flex-column align-items-center justify-content-center">
          <div className="faceToFaceIdentity_help-layout d-flex flex-column align-items-center justify-content-center">
            <h1 className="faceToFaceIdentity_help-header">
              {t("faceToFaceIdentity.help.header")}
            </h1>
            <Grid
              className="faceToFaceIdentity_help-grid"
              container
              spacing={{ xs: 1 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid xs={4} className="faceToFaceIdentity_help-grid-item">
                <Box>
                  <Like />
                </Box>
                <h5>{t("faceToFaceIdentity.help.use.header")}</h5>
                <p>{t("faceToFaceIdentity.help.use.body")}</p>
              </Grid>
              <Grid xs={4} className="faceToFaceIdentity_help-grid-item">
                <Box>
                  <LockShield />
                </Box>
                <h5>{t("faceToFaceIdentity.help.secure.header")}</h5>
                <p>{t("faceToFaceIdentity.help.secure.body")}</p>
              </Grid>
              <Grid xs={4} className="faceToFaceIdentity_help-grid-item">
                <Box>
                  <ChartPerson />
                </Box>
                <h5>{t("faceToFaceIdentity.help.data.header")}</h5>
                <p>{t("faceToFaceIdentity.help.data.body")}</p>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="faceToFaceIdentity_client">
          <div className="faceToFaceIdentity_client-layout d-flex justify-content-center align-items-center">
            <div className="faceToFaceIdentity_client-header">
              <h5>{t("faceToFaceIdentity.client.header.header")}</h5>
              <p>{t("faceToFaceIdentity.client.header.body")}</p>
            </div>
            <div className="faceToFaceIdentity_client-body">
              <h5>{t("faceToFaceIdentity.client.body.header")}</h5>
              <p>{t("faceToFaceIdentity.client.body.body")}</p>
              <TransparentButton sx={{ marginTop: "30px" }}>
                {t("faceToFaceIdentity.client.body.button")}
                <FiArrowRight />
              </TransparentButton>
            </div>
          </div>
        </div>
        <div className="faceToFaceIdentity_challenge d-flex justify-content-center">
          <div className="faceToFaceIdentity_challenge-layout d-flex">
            <img
              className="faceToFaceIdentity_challenge-img"
              src={challenge}
              alt=""
            />
            <div className="faceToFaceIdentity_challenge-form">
              <h3 className="faceToFaceIdentity_challenge-form-header">
                {t("faceToFaceIdentity.challenge.header")}
              </h3>
              <p className="faceToFaceIdentity_challenge-form-context">
                {t("faceToFaceIdentity.challenge.context")}
              </p>
              {state !== "success" ? (
                <>
                  <TextFieldCustom
                    id="outlined-multiline-static"
                    label={t("remoteIdentity.challenge.what")}
                    multiline
                    required
                    error={checkNul.decription}
                    rows={2}
                    sx={{
                      width: "100%",
                      marginTop: "20px",
                    }}
                    onChange={(event) => setDecription(event.target.value)}
                    onClick={() =>
                      setCheckNul({ ...checkNul, decription: false })
                    }
                  />
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid
                      item
                      xs={6}
                      sx={{
                        marginTop: "10px",
                      }}
                    >
                      <TextFieldCustom
                        id="outlined-multiline-flexible"
                        label={t("remoteIdentity.challenge.firstName")}
                        multiline
                        required
                        error={checkNul.firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        onClick={() =>
                          setCheckNul({ ...checkNul, firstName: false })
                        }
                      />
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        marginTop: "10px",
                      }}
                    >
                      <TextFieldCustom
                        id="outlined-multiline-flexible"
                        label={t("remoteIdentity.challenge.lastName")}
                        multiline
                        required
                        error={checkNul.lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        onClick={() =>
                          setCheckNul({ ...checkNul, lastName: false })
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextFieldCustom
                        id="outlined-multiline-flexible"
                        label={t("remoteIdentity.challenge.companyName")}
                        multiline
                        required
                        error={checkNul.companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                        onClick={() =>
                          setCheckNul({ ...checkNul, companyName: false })
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextFieldCustom
                        id="outlined-multiline-flexible"
                        label={t("remoteIdentity.challenge.email")}
                        multiline
                        required
                        error={checkNul.email}
                        onChange={(event) => setEmail(event.target.value)}
                        onClick={() =>
                          setCheckNul({ ...checkNul, email: false })
                        }
                      />
                    </Grid>
                  </Grid>
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        sx={{
                          color: "#fff",
                        }}
                        icon={<SquareRoundedIcon />}
                        onChange={(event) => setCheck(event.target.checked)}
                      />
                    }
                    label={t("remoteIdentity.challenge.check")}
                    sx={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      "& span": {
                        fontSize: "13px",
                        fontWeight: "500",
                        lineHeight: "20px",
                        textWrap: width <= 800 ? "wrap" : "nowrap",
                      },
                    }}
                  />
                  <ReCAPTCHA
                    sitekey="6LcbJg0pAAAAAPxqdGBmN6e6E3UQ4hNDkVMUAxt7"
                    onChange={onChange}
                  />
                  <p className="remoteIdentity_challenge-form-context2">
                    {t("remoteIdentity.challenge.context2")}
                    <Link style={{ color: "#fff" }}>
                      {t("remoteIdentity.challenge.privacyPolicy")}
                    </Link>
                  </p>
                  <Button
                    onClick={() => sendMail()}
                    sx={{
                      padding: "21px 100px",
                      borderRadius: "29px",
                      backgroundColor: "#fff",
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "16px",
                      color: "var(--primary-1)",
                      textTransform: "none",
                      marginTop: "40px",
                      width: "100%",

                      "&:hover": {
                        backgroundColor: "var(--primary-2)",
                        color: "#fff",
                      },
                    }}
                    disabled={
                      recaptcha === null ||
                      decription === "" ||
                      email === "" ||
                      firstName === "" ||
                      lastName === "" ||
                      companyName === ""
                        ? true
                        : false
                    }
                  >
                    {t("remoteIdentity.challenge.contact")}
                  </Button>
                </>
              ) : (
                <p className="remoteIdentity_challenge-form-context">
                  Thanks for submitting the form.
                </p>
              )}
              <p className="faceToFaceIdentity_challenge-form-context3">
                {t("faceToFaceIdentity.challenge.context3")}
              </p>
            </div>
          </div>
        </div>
      </Box>
      <Footer />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={stateOpen} onClose={() => setStateOpen(false)}>
        <Alert severity={state}>
          {state === "error" && "ERROR NETWORK"}
          {state === "success" && "SENDING MAIL SUCCESSFULLY"}
          {state === "warning" && "SENDING MAIL FAILED"}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default FaceToFaceIdentityVerification;
