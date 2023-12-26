import React from "react";
import { Link } from "react-router-dom";

import { Slide as SlideReact } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import identityCard from "../../assets/img/solution/identityCard.png";
import forWhom from "../../assets/img/solution/for_whom.png";
import avatar from "../../assets/img/solution/for_whom_avatar.png";
import readid from "../../assets/img/readid-app-passport.png";
import page1_avata from "../../assets/img/solution/slide/emy_leemans.png";
import page1_rabobank from "../../assets/img/solution/slide/rabobank.png";
import page2 from "../../assets/img/solution/slide/slide2.png";
import page2_avata from "../../assets/img/solution/slide/kalev_pihl.png";
import page3 from "../../assets/img/solution/slide/slide3.png";
import page3_avatar from "../../assets/img/solution/slide/milion.png";
import challenge from "../../assets/img/solution/challenge.png";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  AutoGraph,
  GraphBar,
  Like,
  PersonCheck,
  SecurePayment,
  Time,
} from "../../icons";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "usehooks-ts";
import { FiArrowRight } from "react-icons/fi";
import { mailContact } from "../../services/RemoteIdentityService";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import ReCAPTCHA from "react-google-recaptcha";

const BlueButton = styled(Button)({
  backgroundColor: "var(--primary-2)",
  color: "#fff",
  textTransform: "none",
  padding: "21px 38px",
  fontSize: "1.6em",
  fontWeight: "700",
  borderRadius: "30px",
  height: "58px",
  width: "max-content",
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
  width: "100%",
  textWrap: "nowrap",
  height: "58px",
  "&:hover": {
    backgroundColor: "#0074ff",
    border: "2px solid #0074ff",
  },
});
const OutLineButton = styled(Button)({
  borderRadius: "29px",
  border: "2px solid var(--primary-2)",
  padding: "20px 40px",
  color: "var(--primary-2)",
  fontSize: "16px",
  fontWeight: "700",
  textTransform: "none",
  width: "max-content",
  lineHeight: "16px",
  "&:hover": {
    backgroundColor: "#0074ff",
    color: "#fff",
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

export const MobileSDK = () => {
  // set Title
  document.title = "CheckID MobileID SDK | CheckID";
  const { t, i18n } = useTranslation();
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
  //
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState("warning");
  const [stateOpen, setStateOpen] = React.useState(false);
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
    <Box className="mobilesdk">
      <Box className="mobilesdk_header">
        <Box>
          <h5 className="mobilesdk_header-subheader">
            {t("mobilesdk.header.subheader")}
          </h5>
          <h1 className="mobilesdk_header-header">
            {t("mobilesdk.header.header")
              .split("/n")
              .map((item, index) => (
                <>
                  {item}
                  <br />
                </>
              ))}
          </h1>
          <p className="mobilesdk_header-body">{t("mobilesdk.header.body")}</p>
          <Box>
            <BlueButton sx={{ marginBottom: "10px" }}>
              {t("mobilesdk.header.contact")}
            </BlueButton>
            <br />
            <OutLineButton>{t("mobilesdk.header.try")}</OutLineButton>
          </Box>
        </Box>
        <img
          className="mobilesdk_header-img"
          src={identityCard}
          alt="Identity Card"
        />
      </Box>
      <Box className="mobilesdk_definition">
        <h5 className="mobilesdk_definition-header">
          {t("mobilesdk.definition.header")}
        </h5>
        <p className="mobilesdk_definition-body">
          {t("mobilesdk.definition.body")}
        </p>
        <p className="mobilesdk_definition-body">
          {t("mobilesdk.definition.body1")}
        </p>
      </Box>
      <div className="mobilesdk_help d-flex flex-column align-items-center justify-content-center">
        <div className="mobilesdk_help-layout d-flex flex-column align-items-center justify-content-center">
          <Grid
            className="mobilesdk_help-grid"
            container
            spacing={{ xs: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid xs={4} className="mobilesdk_help-grid-item">
              <Box>
                <GraphBar />
              </Box>
              <h5>{t("mobilesdk.help.item.1.header")}</h5>
              <p>{t("mobilesdk.help.item.1.body")}</p>
            </Grid>
            <Grid xs={4} className="mobilesdk_help-grid-item">
              <Box>
                <Like />
              </Box>
              <h5>{t("mobilesdk.help.item.2.header")}</h5>
              <p>{t("mobilesdk.help.item.2.body")}</p>
            </Grid>
            <Grid xs={4} className="mobilesdk_help-grid-item">
              <Box>
                <AutoGraph />
              </Box>
              <h5>{t("mobilesdk.help.item.3.header")}</h5>
              <p>{t("mobilesdk.help.item.3.body")}</p>
            </Grid>
            <Grid xs={4} className="mobilesdk_help-grid-item">
              <Box>
                <SecurePayment />
              </Box>
              <h5>{t("mobilesdk.help.item.4.header")}</h5>
              <p>{t("mobilesdk.help.item.4.body")}</p>
            </Grid>
            <Grid xs={4} className="mobilesdk_help-grid-item">
              <Box>
                <Time />
              </Box>
              <h5>{t("mobilesdk.help.item.5.header")}</h5>
              <p>{t("mobilesdk.help.item.5.body")}</p>
            </Grid>
            <Grid xs={4} className="mobilesdk_help-grid-item">
              <Box>
                <PersonCheck />
              </Box>
              <h5>{t("mobilesdk.help.item.6.header")}</h5>
              <p>{t("mobilesdk.help.item.6.body")}</p>
            </Grid>
          </Grid>
          <Box className="mobilesdk_help-saas d-flex">
            <img className="mobilesdk_help-saas-img" src={forWhom} alt="" />
            <div className="mobilesdk_help-saas-body">
              <h4>{t("mobilesdk.help.saas.header")}</h4>
              <p>{t("mobilesdk.help.saas.body")}</p>
              <p>{t("mobilesdk.help.saas.body1")}</p>
              <p>{t("mobilesdk.help.saas.body2")}</p>
              <div className="saas_body">
                <img className="saas_body-avata" src={avatar} alt="" />
                <div className="saas_body-body">
                  <h6>{t("mobilesdk.help.saas.mess.name")}</h6>
                  <p>{t("mobilesdk.help.saas.mess.title")}</p>
                  <p>{t("mobilesdk.help.saas.mess.body")}</p>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <Box className="mobilesdk_nfc d-flex justify-content-center align-items-center">
        <img className="mobilesdk_nfc-img" src={readid} alt="" />
        <div className="mobilesdk_nfc-body">
          <h3>{t("mobilesdk.nfc.header")}</h3>
          <p>{t("mobilesdk.nfc.body")}</p>
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
            {t("mobilesdk.nfc.button")}
          </Button>
        </div>
      </Box>
      <div className="mobilesdk_slide">
        <SlideReact {...properties}>
          <div className="each-slide-effect">
            <div className="mobilesdk_slide-page1 d-flex">
              <div className="mobilesdk_slide-page1-body">
                <h4>{t("mobilesdk.slide.1.header")}</h4>
                <p>{t("mobilesdk.slide.1.body")}</p>

                <Link>
                  {t("mobilesdk.slide.1.link")}
                  <FiArrowRight />
                </Link>
                <div className="page1_body">
                  <img className="page1_body-avata" src={page1_avata} alt="" />
                  <div className="page1_body-body">
                    <h6>{t("mobilesdk.slide.1.feedback.name")}</h6>
                    <p>{t("mobilesdk.slide.1.feedback.title")}</p>
                    <p>{t("mobilesdk.slide.1.feedback.body")}</p>
                  </div>
                </div>
              </div>
              <img
                className="mobilesdk_slide-page1-img"
                src={page1_rabobank}
                alt=""
              />
            </div>
          </div>

          <div className="each-slide-effect">
            <div className="mobilesdk_slide-page2 d-flex">
              <img className="mobilesdk_slide-page2-img" src={page2} alt="" />
              <div className="mobilesdk_slide-page2-body">
                <h4>{t("mobilesdk.slide.2.header")}</h4>
                <p>{t("mobilesdk.slide.2.body")}</p>
                <p>{t("mobilesdk.slide.2.body1")}</p>

                <Link>
                  {t("mobilesdk.slide.2.link")}
                  <FiArrowRight />
                </Link>
                <div className="page2_body">
                  <img className="page2_body-avata" src={page2_avata} alt="" />
                  <div className="page2_body-body">
                    <h6>{t("mobilesdk.slide.2.feedback.name")}</h6>
                    <p>{t("mobilesdk.slide.2.feedback.title")}</p>
                    <p>{t("mobilesdk.slide.2.feedback.body")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="each-slide-effect">
            <div className="mobilesdk_slide-page3 d-flex">
              <div className="mobilesdk_slide-page3-body">
                <h4>{t("mobilesdk.slide.3.header")}</h4>
                <p>{t("mobilesdk.slide.3.body")}</p>
                <p>{t("mobilesdk.slide.3.body1")}</p>

                <Link>
                  {t("mobilesdk.slide.3.link")}
                  <FiArrowRight />
                </Link>
                <div className="page3_body">
                  <img className="page3_body-avata" src={page3_avatar} alt="" />
                  <div className="page3_body-body">
                    <h6>{t("mobilesdk.slide.3.feedback.name")}</h6>
                    <p>{t("mobilesdk.slide.3.feedback.title")}</p>
                    <p>{t("mobilesdk.slide.3.feedback.body")}</p>
                  </div>
                </div>
              </div>
              <img className="mobilesdk_slide-page3-img" src={page3} alt="" />
            </div>
          </div>
        </SlideReact>
      </div>
      <Box className="mobilesdk_solution">
        <h5 className="mobilesdk_solution-subheader">
          {t("mobilesdk.solution.subheader")}
        </h5>
        <h1 className="mobilesdk_solution-header">
          {t("mobilesdk.solution.header")}
        </h1>
        <p className="mobilesdk_solution-p">{t("mobilesdk.solution.body")}</p>
        <Box className="mobilesdk_solution-body">
          <Box className="mobilesdk_solution-body-item">
            <h4>{t("mobilesdk.solution.item.1.header")}</h4>
            <p>{t("mobilesdk.solution.item.1.body")}</p>
            <TransparentButton>
              {t("mobilesdk.solution.item.1.button")}
              <FiArrowRight />
            </TransparentButton>
          </Box>
          <Box className="mobilesdk_solution-body-item">
            <h4>{t("mobilesdk.solution.item.2.header")}</h4>
            <p>{t("mobilesdk.solution.item.2.body")}</p>
            <TransparentButton>
              {t("mobilesdk.solution.item.2.button")}
              <FiArrowRight />
            </TransparentButton>
          </Box>
        </Box>
      </Box>
      <div className="client_challenge d-flex justify-content-center">
        <div className="client_challenge-layout">
          <img className="client_challenge-img" src={challenge} alt="" />
          <div className="client_challenge-form">
            <h3 className="client_challenge-form-header">
              {t("client.challenge.header")}
            </h3>
            <p className="client_challenge-form-context">
              {t("client.challenge.context")}
            </p>
            {state !== "success" ? (
              <>
                <TextFieldCustom
                  id="outlined-multiline-static"
                  label={t("client.challenge.what")}
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
                      label={t("client.challenge.firstName")}
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
                      label={t("client.challenge.lastName")}
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
                      label={t("client.challenge.companyName")}
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
                      label={t("client.challenge.email")}
                      multiline
                      required
                      error={checkNul.email}
                      onChange={(event) => setEmail(event.target.value)}
                      onClick={() => setCheckNul({ ...checkNul, email: false })}
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
                  label={t("client.challenge.check")}
                  sx={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    "& span": {
                      fontSize: "13px",
                      fontWeight: "500",
                      lineHeight: "20px",
                    },
                  }}
                />
                <ReCAPTCHA
                  sitekey="6LcbJg0pAAAAAPxqdGBmN6e6E3UQ4hNDkVMUAxt7"
                  onChange={onChange}
                />
                <p className="client_challenge-form-context2">
                  {t("client.challenge.context2")}
                  <Link style={{ color: "#fff" }}>
                    {t("client.challenge.privacyPolicy")}
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
                  {t("client.challenge.contact")}
                </Button>
              </>
            ) : (
              <p className="client_challenge-form-context">
                Thanks for submitting the form.
              </p>
            )}
            <p className="client_challenge-form-context3">
              {t("client.challenge.context3")}
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};
