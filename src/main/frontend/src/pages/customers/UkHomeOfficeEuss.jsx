import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import background from "../../assets/img/background.png";
import entrust from "../../assets/img/customer/Entrust.png";
import gov from "../../assets/img/customer/govUkInfo.png";
import pritiPatel from "../../assets/img/customer/pritiPatel.png";

export const UkHomeOfficeEuss = () => {
  const { t } = useTranslation();
  const tablet = useMediaQuery("(max-width:1230px)");
  return (
    <Box>
      <Box
        sx={{
          padding: "50px 70px 30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#4F9CF9",
          gap: "30px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "15px",
            textTransform: "uppercase",
            fontWeight: "600",
            textAlign: "center",
            color: "#FFE492",
          }}
        >
          {/* Uk home office */}
          {t("ukHomeOfficeEuss.subHeader")}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            maxWidth: "1100px",
            fontSize: "64px",
            fontWeight: "700",
            lineHeight: "70px",
            color: "#ffffff",
          }}
        >
          {/* World’s Most Successful Remote Identity Verification Programme for
          Immigration */}
          {t("ukHomeOfficeEuss.header")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            fontSize: "16px",
            fontWeight: "500",
            maxWidth: "815px",
            textAlign: "center",
          }}
        >
          {/* To support the United Kingdom’s exit from the European Union, the EU
          Settlement Scheme was established by the Home Office to allow EEA
          nationals living in the UK to apply for a UK immigration status. */}
          {t("ukHomeOfficeEuss.description")}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "20px",
        }}
      >
        <Box sx={{ maxWidth: "918px", margin: "auto" }}>
          <Box
            className="ratio ratio-16x9"
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              marginBottom: "20px",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/D0iGaUG7qf8?rel=0"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </Box>
          <Box
            sx={{
              borderRight: "2px solid #4F9CF9",
              padding: "0 15px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ textAlign: "right", fontSize: "16px", fontWeight: "500" }}
            >
              {/* How to reach a high onboarding conversion with NFC technology */}
              {t("ukHomeOfficeEuss.videoTitle")}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "1320px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          padding: " 75px 10px",
          gap: "35px",
          "& img": {
            display: "block",
            margin: "auto",
            "&.gov": {
              width: tablet ? "100%" : "auto",
            },
          },
          "& h1": {
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "50px" /* 125% */,
          },
          "&>p": {
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "26px",
          },
        }}
      >
        <Typography variant="h1">
          {/* Digital verification in 3 steps */}
          {t("ukHomeOfficeEuss.digitalVerification")}
        </Typography>
        <Typography variant="body1">
          {/* Applicants need only to complete three steps: */}
          {t("ukHomeOfficeEuss.applicantsNeed")}
        </Typography>
        <Grid
          container
          spacing={6}
          sx={{
            "& .MuiGrid-item": {
              display: "flex",
              alignItems: "center",
              gap: "10px",
              "& .MuiBox-root": {
                width: "45px",
                height: "45px",
                fontSize: "24px",
                fontWeight: "600",
                color: "#008AFF",
                backgroundColor: "#EBF6FF",
                textAlign: "center",
                lineHeight: "45px",
              },
              "& .MuiTypography-root": {
                fontSize: "16px",
                fontWeight: "500",
              },
            },
          }}
        >
          <Grid item xs={tablet ? 12 : 4}>
            <Box>1</Box>
            <Typography variant="body1">
              {/* Prove their identity  */}
              {t("ukHomeOfficeEuss.proveIdentity")}
            </Typography>
          </Grid>
          <Grid item xs={tablet ? 12 : 4}>
            <Box>2</Box>
            <Typography variant="body1">
              {/* Show that they live in the UK */}
              {t("ukHomeOfficeEuss.showLive")}
            </Typography>
          </Grid>
          <Grid item xs={tablet ? 12 : 4}>
            <Box>3</Box>
            <Typography variant="body1">
              {/* Declare any criminal convictions */}
              {t("ukHomeOfficeEuss.declareCriminal")}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body1">
          {/* As the Home Office wanted to make the application process as easy as
          possible for the estimated four million EEA nationals who would need
          to apply, they sought out new innovative and effective capabilities to
          include in an optional end-to-end digital application channel.
          Together with our partner WorldReach Software (acquired by Entrust in
          2021), we were selected to allow for a smooth application process. */}
          {t("ukHomeOfficeEuss.homeOfficeWanted")}
        </Typography>
        <img src={entrust} />
        <Typography variant="body1">
          {/* WorldReach Software (now Entrust) is an organization focused on highly
          trusted digital public services for immigration, passport, border
          management, consular and citizen service organizations. */}
          {t("ukHomeOfficeEuss.worldReachSoftware")}
        </Typography>
        <Typography variant="body1">
          {/* WorldReach Software was selected by Home Office for the operation and
          management of the digital verification capability supporting EU
          Settlement Scheme (EUSS). Together with WorldReach and iProov, we
          managed to create the world’s largest, most successful digital
          on-boarding immigration programme using remote identity verification. */}
          {t("ukHomeOfficeEuss.worldReachSelected")}
        </Typography>
        <img src={gov} className="gov" />
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            maxWidth: "1000px",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="57"
            viewBox="0 0 56 57"
            fill="none"
          >
            <g clip-path="url(#clip0_61_3979)">
              <path
                d="M0 14.72C0 6.98797 6.268 0.719971 14 0.719971H42C49.732 0.719971 56 6.98797 56 14.72V42.72C56 50.452 49.732 56.72 42 56.72H14C6.268 56.72 0 50.452 0 42.72V14.72Z"
                fill="#008AFF"
              />
              <path
                d="M29.826 32.6839C29.826 31.4439 30.087 30.4659 31 28.0529L34.065 18.9199H38.174L35.761 28.6399C37.457 29.2269 38.5 30.6619 38.5 32.6839C38.5 35.2939 36.609 37.1199 34.196 37.1199C31.652 37.1199 29.826 35.2279 29.826 32.6839ZM17.5 32.6839C17.5 31.4439 17.76 30.4659 18.674 28.0529L21.739 18.9199H25.848L23.435 28.6399C25.13 29.2269 26.174 30.6619 26.174 32.6839C26.174 35.2939 24.283 37.1199 21.87 37.1199C19.326 37.1199 17.5 35.2279 17.5 32.6839Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_61_3979">
                <rect
                  width="56"
                  height="56"
                  fill="white"
                  transform="translate(0 0.719971)"
                />
              </clipPath>
            </defs>
          </svg>
          <Typography
            variant="body1"
            sx={{
              color: "#008AFF",
              fontSize: "15px",
              fontWeight: "600",
              lineHeight: "37px",
              textTransform: "uppercase",
            }}
          >
            {/* "Using NFC we can remotely determine the authenticity of the
            identity document at the trust level that is needed for.” */}
            {t("ukHomeOfficeEuss.nfc")}
          </Typography>
        </Box>
        <Typography variant="h1">
          {/* ePassport NFC chip reading */}
          {t("ukHomeOfficeEuss.ePassportNfc")}
        </Typography>{" "}
        <Typography variant="body1">
          {/* This innovative service is powered by CheckID, which reads the
          ePassport chip’s security features to authenticate the legitimacy of
          the document, as part of WorldReach’s Know You Traveller platform.
          Also part of the identity verification is selfie matching. This is
          achieved by comparing the secure reference image from the ePassport
          chip to a live selfie captured by a smartphone camera. This service
          supports not only ePassports, but also UK biometric residence cards
          and EU citizen eID cards, all using ICAO standards.  */}
          {t("ukHomeOfficeEuss.innovativeService")}
        </Typography>
        <Typography variant="body1">
          {/* Using NFC we can remotely determine the authenticity of the identity
          document at the trust level that is needed for. In addition, the
          high-resolution face-image from the chip enables secure facial
          matching. This use case clearly demonstrates why NFC First is the best
          approach in remote identity verification. */}
          {t("ukHomeOfficeEuss.nfcRemote")}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          padding: "75px 10px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "40px",
            color: "#fff",
          }}
        >
          {/* Identification take away */}
          {t("ukHomeOfficeEuss.identificationTakeAway")}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#008AFF",
            borderRadius: "29px",
            padding: "17px 38px",
          }}
        >
          {/* Download Case Study EUSS */}
          {t("ukHomeOfficeEuss.downloadCaseStudy")}
        </Button>
      </Box>
      <Box
        sx={{ padding: "50px 10px", display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            padding: "30px 0",
            display: "flex",
            gap: "48px",
            flexDirection: tablet ? "column" : "row",
          }}
        >
          <img src={pritiPatel} alt="Priti Patel" />
          <Box sx={{ maxWidth: "600px" }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "24px", fontWeight: "500", marginBottom: "30px" }}
            >
              {/* "Having more than 6 million applications to the scheme is an
              unprecedented achievement and I am delighted that we have secured
              the rights of so many EU citizens – our friends, neighbours and
              family members." */}
              {t("ukHomeOfficeEuss.pritiPatel")}
            </Typography>
            <Box sx={{ marginBottom: "24px" }}>
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", fontWeight: "700" }}
              >
                {/* Priti Patel */}
                {t("ukHomeOfficeEuss.pritiPatelName")}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", fontWeight: "500" }}
              >
                {/* UK Home Secretary  */}
                {t("ukHomeOfficeEuss.ukHomeSecretary")}
                <br />
                {/* [Photo DFID] */}
                {t("ukHomeOfficeEuss.photodfid")}
              </Typography>
            </Box>
            <Button
              variant="text"
              sx={{
                padding: "6px 0",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "700",
                gap: "10px",
              }}
            >
              {/* Press release UK Home Office */}
              {t("ukHomeOfficeEuss.pressReleaseUk")}
              <FaArrowRight />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: `#4F9CF9`,
          padding: "75px 10px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "700",
            lineHeight: "40px",
            color: "#fff",
            maxWidth: "485px",
          }}
        >
          {/* Want to learn more about government-grade security for identity
          verification? */}
          {t("ukHomeOfficeEuss.learnMoreGoverment")}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFF",
            borderRadius: "29px",
            padding: "19px 106px",
            color: "#4F9CF9",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "700",
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          {/* Contact a specialist */}
          {t("ukHomeOfficeEuss.contactSpecialist")}
        </Button>
      </Box>
      <Box sx={{ maxWidth: "1300px", margin: "auto", padding: "75px 10px" }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "40px", fontWeight: "700", marginBottom: "20px" }}
        >
          {/* Results */}
          {t("ukHomeOfficeEuss.results")}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "16px", fontWeight: "500", marginBottom: "20px" }}
        >
          {/* The EUSS is a very successful, scalable proof-point of what’s possible
          and achievable with the right end-to-end processes, technology and
          collaborative team. */}
          {t("ukHomeOfficeEuss.theEussVerySuccessfull")}
        </Typography>
        <List
          sx={{
            "& svg": {
              width: "6px",
              height: "6px",
              marginRight: "15px",
              color: "#4F9CF9",
              marginTop: "10px",
            },
            "& .MuiListItem-root": {
              fontSize: "16px",
              fontWeight: "500",
              alignItems: "flex-start",
              height: "34px",
              padding: "0",
            },
          }}
        >
          <ListItem>
            <FiberManualRecordIcon />
            {/* More than 6 million applications have successfully concluded (data
            December 2021). */}
            {t("ukHomeOfficeEuss.moreThan6MillionApplication")}
          </ListItem>
          <ListItem>
            <FiberManualRecordIcon />
            {/* A high percentage completed their
            application in under 10 minutes, with a high level of identity
            assurance. */}
            {t("ukHomeOfficeEuss.highPercentage")}
          </ListItem>
          <ListItem>
            <FiberManualRecordIcon />
            {/* This was the first iOS app in production to read ICAO MRTD compliant
            chips via NFC at large scale. */}
            {t("ukHomeOfficeEuss.thisWasTheFirst")}
          </ListItem>
          <ListItem>
            <FiberManualRecordIcon />
            {/* Over 2,300 different makes and models of Android and iOS devices
            have been used to complete the identity verification process. */}
            {t("ukHomeOfficeEuss.overDifferent")}
          </ListItem>
          <ListItem>
            <FiberManualRecordIcon />
            {/* The service is scalable, with peaks of 25,000-30,000 applications
            per day as realized by the EUSS. */}
            {t("ukHomeOfficeEuss.serviceIsScalable")}
          </ListItem>
          <ListItem>
            <FiberManualRecordIcon />
            {/* System Availability since the start of live production is 99.97%,
            exceeding SLA commitments. */}
            {t("ukHomeOfficeEuss.systemAvailable")}
          </ListItem>
          <ListItem>
            <FiberManualRecordIcon />
            {/* 2019 EUSS feedback survey results: 79% of applicants indicated that
            proving their identity through the app was either “very easy” or
            “fairly easy”. A further 7% found it neither difficult nor easy. */}
            {t("ukHomeOfficeEuss.feebackSurvey")}
          </ListItem>
        </List>
      </Box>
      <Divider
        sx={{
          borderColor: "#DADCE4",
          maxWidth: "1300px",
          margin: "auto",
        }}
      />
      <Box sx={{ maxWidth: "1300px", margin: "auto", padding: "30px 10px" }}>
        <Typography
          variant="text"
          sx={{
            gap: "10px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "700",
            color: "var(--primary-2)",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            cursor: "pointer",

            "&:hover svg": {
              transition: "all 0.3s ease",
              transform: "translateX(5px)",
            },
          }}
        >
          {/* More customer stories */}
          {t("ukHomeOfficeEuss.moreCustomerStories")}
          <FaArrowRight />
        </Typography>
      </Box>
    </Box>
  );
};
