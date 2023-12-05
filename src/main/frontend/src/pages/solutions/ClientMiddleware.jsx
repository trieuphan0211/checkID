import React from "react";

import scanning from "../../assets/img/scanning.png";
import challenge from "../../assets/img/solution/remote-identity-verificationkopie.png";

import { useTranslation } from "react-i18next";
import { AutoGraph, ChartPerson, Like, ModulePuzzle, Phone } from "../../icons";
import { mailContact } from "../../services/RemoteIdentityService";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import Link from "@mui/material/Link";
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

export const ClientMiddleware = () => {
  // set Title
  document.title = "CheckID Client Middleware | CheckID";
  const { t, i18n } = useTranslation();
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
    <Box className="client">
      <Box className="client_header">
        <Box>
          <h5 className="client_header-subheader">ICAO READER SOLUTION</h5>
          <h1 className="client_header-header">
            The independent middleware for biometrics and eIDs
          </h1>
          <BlueButton
            sx={{
              margin: "30px 0",
            }}
          >
            Try our CheckID Me app
          </BlueButton>
        </Box>
        <img className="client_header-img" src={scanning} alt="scanning" />
      </Box>
      <Box className="client_definition">
        <h5 className="client_definition-header">CheckID Client Middleware</h5>
        <p className="client_definition-body">
          CheckID is the standard-oriented solution for all conceivable
          biometrics and eID applications and our approach to using biometric
          system components and document readers in a modular way and allow
          their easy replacement at any time. With CheckID, we make the
          processes involved in eID enrolment, in police work and at border
          controls smooth, sustainable and clear.
        </p>
      </Box>
      <div className="client_help d-flex flex-column align-items-center justify-content-center">
        <div className="client_help-layout d-flex flex-column align-items-center justify-content-center">
          <h1 className="client_help-header">
            The benefits of biomiddle at a glance
          </h1>
          <Grid
            className="client_help-grid"
            container
            spacing={{ xs: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid xs={4} className="client_help-grid-item">
              <Box>
                <ModulePuzzle />
              </Box>
              <h5>Modular</h5>
              <p>
                Thanks to its modular and scalable architecture, CheckID meets a
                wide range of requirements - from local pilots to national
                solutions.
              </p>
            </Grid>
            <Grid xs={4} className="client_help-grid-item">
              <Box>
                <ChartPerson />
              </Box>
              <h5>Independent</h5>
              <p>
                CheckID communicates with client applications via a
                service-oriented interface. Therefore, the software is
                independent of system platforms and programming languages.
              </p>
            </Grid>
            <Grid xs={4} className="client_help-grid-item">
              <Box>
                <AutoGraph />
              </Box>
              <h5>Quickly implemented</h5>
              <p>
                Thanks to its consistent standard orientation, CheckID is easily
                and quickly integrated into existing infrastructures. In many
                public enrolment and border control projects, CheckID is already
                the hub and heart of large IT infrastructures.
              </p>
            </Grid>
            <Grid xs={4} className="client_help-grid-item">
              <Box>
                <Like />
              </Box>
              <h5>Investment-proof</h5>
              <p>
                By using internationally standardized interfaces, CheckID
                ensures the easy exchange of individual components in the highly
                dynamic market of biometric technologies.
              </p>
            </Grid>
            <Grid xs={4} className="client_help-grid-item">
              <Box>
                <Phone />
              </Box>
              <h5>Mobile</h5>
              <p>
                CheckID is also available for mobile biometrics and eID
                applications. We serve all common systems, including Android and
                iOS.
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
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
