import React from "react";

import identityCard from "../../assets/img/solution/identityCard.png";
import forWhom from "../../assets/img/solution/for_whom.png";
import avatar from "../../assets/img/solution/for_whom_avatar.png";
import readid from "../../assets/img/readid-app-passport.png";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import {
  AutoGraph,
  GraphBar,
  Like,
  PersonCheck,
  SecurePayment,
  Time,
} from "../../icons";

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
  return (
    <Box className="mobilesdk">
      <Box className="mobilesdk_header">
        <Box>
          <h5 className="mobilesdk_header-subheader">ICAO READER SOLUTION</h5>
          <h1 className="mobilesdk_header-header">Trust and Scalability</h1>
          <p className="mobilesdk_header-body">
            CheckID SaaS is a scalable and secure solution for larger volumes,
            suitable for online use cases. Can be combined with face matching,
            leveraging the high-resolution face image from the chip for an extra
            layer of assurance and security.
          </p>
          <Box>
            <BlueButton sx={{ marginBottom: "10px" }}>
              Contact a specialist
            </BlueButton>
            <br />
            <OutLineButton>Try our CheckID Me app</OutLineButton>
          </Box>
        </Box>
        <img
          className="mobilesdk_header-img"
          src={identityCard}
          alt="Identity Card"
        />
      </Box>
      <Box className="mobilesdk_definition">
        <h5 className="mobilesdk_definition-header">CheckID Mobile SDK</h5>
        <p className="mobilesdk_definition-body">
          CheckID SaaS allows the verification of identity documents in a secure
          and user-friendly manner using a smartphone with NFC. CheckID is
          provided as configurable software that you can integrate into your own
          apps and backend systems. We provide an SDK (Software Development Kit)
          and APIs (Application Programming Interfaces) to make this possible.
          CheckID® thus becomes part of the software that you provide to your
          users, who won’t even be aware that the mobile verification technology
          is provided by us. CheckID SaaS allows you to fully customize what
          personal information you want to read and which verifications you want
          to carry out, giving you complete control over your customer journey.
        </p>
        <p className="mobilesdk_definition-body">
          The verification runs on our secure server, hosted by Mobile-ID in a
          public cloud. You do not have to worry about updates and security.
          Doing the verification in our server makes CheckID SaaS suitable for
          online use cases in which you cannot trust the smartphone, for example
          for onboarding for banks.
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
              <h5>Your app, CheckID inside</h5>
              <p>
                CheckID SaaS is integrated into your app using our CheckID SDK,
                enabling you to use your own look and feel with CheckID inside.
              </p>
            </Grid>
            <Grid xs={4} className="mobilesdk_help-grid-item">
              <Box>
                <Like />
              </Box>
              <h5>User friendly</h5>
              <p>
                CheckID is reliable and user-friendly, much more than optical
                scanning of identity documents or online video identification.
              </p>
            </Grid>
            <Grid xs={4} className="mobilesdk_help-grid-item">
              <Box>
                <AutoGraph />
              </Box>
              <h5>Scalable and secure</h5>
              <p>
                We host CheckID SaaS in a highly secure public cloud that can
                easily scale up or down with demand.
              </p>
            </Grid>
            <Grid xs={4} className="mobilesdk_help-grid-item">
              <Box>
                <SecurePayment />
              </Box>
              <h5>Privacy committed</h5>
              <p>
                We have a world-unique certification package. We are committed
                to your security and your customers' privacy.
              </p>
            </Grid>
            <Grid xs={4} className="mobilesdk_help-grid-item">
              <Box>
                <Time />
              </Box>
              <h5>Instant results</h5>
              <p>
                You get personal information and verification results instantly,
                via a REST interface (JSON, XML, or PDF).
              </p>
            </Grid>
            <Grid xs={4} className="mobilesdk_help-grid-item">
              <Box>
                <PersonCheck />
              </Box>
              <h5>Face verification</h5>
              <p>
                Orchestration with facial biometrics for holder verification is
                possible, creating the best and most secure identity
                verification solution available.
              </p>
            </Grid>
          </Grid>
          <Box className="mobilesdk_help-saas d-flex">
            <img className="mobilesdk_help-saas-img" src={forWhom} alt="" />
            <div className="mobilesdk_help-saas-body">
              <h4>For whom?</h4>
              <p>
                CheckID SaaS is mostly used for online use cases, in which a
                user has to verify their own identity via an instant and online
                process. Opening bank accounts, VISA applications, and re-
                verifications are typical use cases.
              </p>
              <p>
                CheckID SaaS requires some implementation effort and is
                therefore best suited for medium-sized and larger organizations,
                that already have a mobile app and have substantial volumes of
                verifications. Typical customers are banks, governmental
                organizations, and Trust Service Providers.
              </p>
              <p>
                For smaller organizations or organizations without an
                app, CheckID Ready may be better suited.
              </p>
              <div className="saas_body">
                <img className="saas_body-avata" src={avatar} alt="" />
                <div className="saas_body-body">
                  <h6>Kalev Pihl</h6>
                  <p>CEO SK ID Solutions</p>
                  <p>
                    “NFC reading is worth the effort; there is no real
                    alternative. Even trained persons or good AI algorithms are
                    not able to check identity document security features based
                    on video. If the stakes are high, this is the way to do it"
                  </p>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <Box className="mobilesdk_nfc d-flex justify-content-center align-items-center">
        <img className="mobilesdk_nfc-img" src={readid} alt="" />
        <div className="mobilesdk_nfc-body">
          <h3>Simplify your identity verification process with NFC</h3>
          <p>Read about all there is to know</p>
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
            Go to research paper
          </Button>
        </div>
      </Box>
    </Box>
  );
};
