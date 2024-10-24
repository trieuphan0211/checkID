import styled from "@emotion/styled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { BiSolidPaperPlane } from "react-icons/bi";
import iso from "../assets/img/iso27001.png";
import logo from "../assets/img/logo_blue.png";
import tuv from "../assets/img/tuv.png";
import "../assets/scss/Footer.scss";
import { https } from "../services/AxiosConfig";
import LanguageMenu from "./menus/LanguageMenu";

//Begin: Custom style for TextField, Button component from Material UI
const SignButton = styled(Button)({
  backgroundColor: "#FFE492",
  marginTop: "16px",
  color: "var(--primary-1)",
  fontSize: "1.8em",
  fontWeight: "600",
  width: "307px",
  height: "55px",
  "&:hover": {
    backgroundColor: "#ffc81f",
  },
  "&:disabled": {
    backgroundColor: "#FFE492",
    color: "var(--primary-1)",
    opacity: "0.5",
  },
});
const StyleTextField = styled(TextField)({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  width: "307px",
  borderRadius: "3px",
  fontSize: "1.8em",
  fontWeight: "500",
  "& .MuiInputBase-root.Mui-focused": {
    backgroundColor: "var(--primary-1)",
  },
  "& .MuiFormLabel-root ": {
    color: "#ADB7C2",
  },
  "& .MuiInputBase-root": {
    padding: "15px 25px",
    color: "#ADB7C2",
    "&:before": {
      borderBottom: "none",
    },
  },
});
//End: Custom style for TextField, Button component from Material UI
const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = React.useState(""); // email state
  const [checkNull, setCheckNull] = React.useState(false); // check null state
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState("success");
  const [stateOpen, setStateOpen] = React.useState(false);
  var regEx = /\S+@\S+\.\S+/;
  const sendEmail = async () => {
    setOpen(true);
    if (email === "" || !regEx.test(email)) {
      setCheckNull(true);
    } else {
      try {
        const mesage = await https.post(
          "/sendmail",
          { email: email },
          {
            headers: {
              "X-XSRF-TOKEN": sessionStorage.getItem("XSRF-TOKEN"),
            },
          }
        );
        setState(mesage.data);
      } catch (error) {
        setState("error");
      }
      setStateOpen(true);
    }
    setOpen(false);
  };
  return (
    <>
      <div className="footer d-flex flex-column align-items-center">
        <div className="flex-column align-items-start">
          <div className="footer_info d-flex justify-content-center flex-wrap">
            <div className="footer_info-item">
              <img src={logo} alt="" />
              <h6>{t("footer.feature.company")}</h6>
              <p className="footer_info-title">{t("footer.feature.body")}</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    d="M13.8154 4.12227L13.9804 5.01705C14.0054 5.15279 14.0054 5.28731 13.9844 5.41392C14.0033 5.50383 14.0051 5.5978 13.9896 5.68867C13.974 5.77953 13.9417 5.86488 13.8949 5.93818C13.8482 6.01148 13.7883 6.0708 13.7198 6.1116C13.6513 6.1524 13.5761 6.1736 13.4999 6.17357H12.3724L11.6309 4.97018V4.96897C11.5123 4.7757 11.3582 4.61887 11.1809 4.51097C11.0036 4.40306 10.8081 4.34708 10.6099 4.34749H10.4999V3.31879C10.4999 2.87931 10.2059 2.5214 9.84495 2.5214H9.15496C8.79397 2.5214 8.49998 2.87931 8.49998 3.31879V4.3414H5.50003V3.31879C5.50003 2.87931 5.20603 2.5214 4.84504 2.5214H4.15505C3.79406 2.5214 3.50006 2.87931 3.50006 3.31879V4.34749H3.39006C2.98607 4.34749 2.60858 4.5794 2.36508 4.97444L1.62709 6.17357H0.500111C0.423881 6.1736 0.348656 6.1524 0.280187 6.1116C0.211717 6.0708 0.151818 6.01148 0.105067 5.93818C0.0583158 5.86488 0.0259517 5.77953 0.0104488 5.68867C-0.00505418 5.5978 -0.00328545 5.50383 0.0156197 5.41392C-0.006269 5.28279 -0.00490522 5.14749 0.0196197 5.01705L0.179617 4.12227C0.357856 3.15059 0.802581 2.28177 1.44056 1.65887C2.07855 1.03597 2.87175 0.696134 3.68956 0.695312H10.3104C11.1278 0.695409 11.9208 1.0351 12.5581 1.65823C13.1954 2.28136 13.6389 3.15061 13.8154 4.12227Z"
                    fill="white"
                  />
                  <path
                    d="M11.2298 5.33336L13.0598 8.3038C13.67 9.29184 13.9999 10.4946 13.9998 11.7308V13.7455C13.9998 14.269 13.6498 14.6951 13.2198 14.6951H0.779987C0.349994 14.6951 0 14.269 0 13.7455V11.7308C0 10.4951 0.329994 9.28988 0.939984 8.3038L2.76495 5.33945C2.91495 5.09597 3.14495 4.95597 3.38994 4.95597H3.84493C3.92993 4.95597 3.99993 4.87075 3.99993 4.76727V3.31858C3.99993 3.2151 4.06993 3.12988 4.15493 3.12988H4.84492C4.92992 3.12988 4.99991 3.2151 4.99991 3.31858V4.76727C4.99991 4.87075 5.06991 4.95597 5.15491 4.95597H8.84485C8.92985 4.95597 8.99985 4.87075 8.99985 4.76727V3.31858C8.99985 3.2151 9.06984 3.12988 9.15484 3.12988H9.84483C9.92983 3.12988 9.99983 3.2151 9.99983 3.31858V4.76727C9.99983 4.87075 10.0698 4.95597 10.1548 4.95597H10.6098C10.8548 4.95597 11.0848 5.09597 11.2298 5.33336ZM5.8489 7.99945C5.9339 7.99945 6.0044 7.91423 5.9994 7.80953V6.97197C5.99927 6.92176 5.98286 6.87363 5.95374 6.83807C5.92462 6.80251 5.88515 6.78238 5.8439 6.78206H5.15541C5.07041 6.78206 4.99991 6.86727 4.99991 6.97197V7.80953C4.99991 7.91362 5.06991 7.99945 5.16091 7.99945H5.8489ZM7.34887 7.99945C7.36917 7.99963 7.38929 7.9948 7.40801 7.98524C7.42672 7.97569 7.44365 7.9616 7.45777 7.94385C7.47189 7.92609 7.4829 7.90503 7.49014 7.88195C7.49737 7.85886 7.50068 7.83423 7.49987 7.80953V6.97197C7.49961 6.9217 7.48309 6.87358 7.45389 6.83803C7.42469 6.80249 7.38517 6.78238 7.34387 6.78206H6.65589C6.61455 6.78222 6.57495 6.80228 6.54572 6.83786C6.5165 6.87344 6.50002 6.92165 6.49989 6.97197V7.80953C6.49989 7.91362 6.56989 7.99945 6.66089 7.99945H7.34887ZM8.16036 7.99945H8.84885C8.86915 7.99963 8.88926 7.9948 8.90798 7.98524C8.9267 7.97569 8.94363 7.9616 8.95775 7.94385C8.97186 7.92609 8.98287 7.90503 8.99011 7.88195C8.99735 7.85886 9.00066 7.83423 8.99985 7.80953V6.97197C8.99958 6.9217 8.98306 6.87358 8.95387 6.83803C8.92467 6.80249 8.88514 6.78238 8.84385 6.78206H8.15536C8.07036 6.78206 7.99986 6.86727 7.99986 6.97197V7.80953C7.99986 7.91362 8.06986 7.99945 8.16086 7.99945H8.16036ZM5.8489 9.82553C5.9339 9.82553 6.0044 9.74032 5.9994 9.63562V8.79806C5.99927 8.74784 5.98286 8.69972 5.95374 8.66416C5.92462 8.62859 5.88515 8.60846 5.8439 8.60814H5.15541C5.07041 8.60814 4.99991 8.69336 4.99991 8.79806V9.63562C4.99991 9.73971 5.06991 9.82553 5.16091 9.82553H5.8489ZM6.66039 9.82553H7.34887C7.36917 9.82572 7.38929 9.82089 7.40801 9.81133C7.42672 9.80177 7.44365 9.78769 7.45777 9.76993C7.47189 9.75218 7.4829 9.73112 7.49014 9.70803C7.49737 9.68495 7.50068 9.66031 7.49987 9.63562V8.79806C7.49961 8.74779 7.48309 8.69967 7.45389 8.66412C7.42469 8.62857 7.38517 8.60846 7.34387 8.60814H6.65589C6.61455 8.6083 6.57495 8.62836 6.54572 8.66395C6.5165 8.69953 6.50002 8.74774 6.49989 8.79806V9.63562C6.49989 9.73971 6.56939 9.82553 6.66039 9.82553ZM8.84885 9.82553C8.86915 9.82572 8.88926 9.82089 8.90798 9.81133C8.9267 9.80177 8.94363 9.78769 8.95775 9.76993C8.97186 9.75218 8.98287 9.73112 8.99011 9.70803C8.99735 9.68495 9.00066 9.66031 8.99985 9.63562V8.79806C8.99958 8.74779 8.98306 8.69967 8.95387 8.66412C8.92467 8.62857 8.88514 8.60846 8.84385 8.60814H8.15536C8.07036 8.60814 7.99986 8.69336 7.99986 8.79806V9.63562C7.99986 9.73971 8.06986 9.82553 8.16086 9.82553H8.84885ZM5.16041 11.6516H5.8489C5.9339 11.6516 6.0044 11.5664 5.9994 11.4617V10.6241C5.99927 10.5739 5.98286 10.5258 5.95374 10.4902C5.92462 10.4547 5.88515 10.4346 5.8439 10.4342H5.15541C5.07041 10.4342 4.99991 10.5194 4.99991 10.6241V11.4617C4.99991 11.5658 5.06941 11.6516 5.16041 11.6516ZM7.34887 11.6516C7.36917 11.6518 7.38929 11.647 7.40801 11.6374C7.42672 11.6279 7.44365 11.6138 7.45777 11.596C7.47189 11.5783 7.4829 11.5572 7.49014 11.5341C7.49737 11.511 7.50068 11.4864 7.49987 11.4617V10.6241C7.49961 10.5739 7.48309 10.5258 7.45389 10.4902C7.42469 10.4547 7.38517 10.4345 7.34387 10.4342H6.65589C6.61455 10.4344 6.57495 10.4545 6.54572 10.49C6.5165 10.5256 6.50002 10.5738 6.49989 10.6241V11.4617C6.49989 11.5658 6.56989 11.6516 6.66089 11.6516H7.34887ZM8.16036 11.6516H8.84885C8.86915 11.6518 8.88926 11.647 8.90798 11.6374C8.9267 11.6279 8.94363 11.6138 8.95775 11.596C8.97186 11.5783 8.98287 11.5572 8.99011 11.5341C8.99735 11.511 9.00066 11.4864 8.99985 11.4617V10.6241C8.99958 10.5739 8.98306 10.5258 8.95387 10.4902C8.92467 10.4547 8.88514 10.4345 8.84385 10.4342H8.15536C8.07036 10.4342 7.99986 10.5194 7.99986 10.6241V11.4617C7.99986 11.5658 8.06986 11.6516 8.16086 11.6516H8.16036Z"
                    fill="white"
                  />
                </svg>
                <span style={{ marginLeft: "14px", lineHeight: "34px" }}>
                  1900 6884
                </span>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                >
                  <path
                    d="M15.3452 10.5756C15.2155 11.5241 14.7314 12.3948 13.9833 13.0249C13.2351 13.6551 12.2742 14.0017 11.2799 14C5.50345 14 0.803718 9.47795 0.803718 3.9199C0.801935 2.96319 1.16215 2.03857 1.81709 1.31874C2.47203 0.598902 3.37691 0.133074 4.36271 0.00825843C4.61199 -0.0210292 4.86444 0.028042 5.08235 0.148147C5.30027 0.268251 5.47198 0.452948 5.57183 0.674665L7.10834 3.9752V3.9836C7.18479 4.15332 7.21637 4.33861 7.20024 4.52294C7.18412 4.70726 7.1208 4.88487 7.01595 5.03991C7.00285 5.05881 6.98903 5.07631 6.97448 5.09381L5.4598 6.82142C6.0047 7.88684 7.1629 8.99145 8.28473 9.51715L10.0555 8.06744C10.0729 8.05337 10.0911 8.04028 10.1101 8.02824C10.2711 7.92492 10.4563 7.86185 10.649 7.84474C10.8417 7.82763 11.0358 7.85701 11.2137 7.93023L11.2232 7.93444L14.6505 9.41215C14.8813 9.50789 15.0737 9.67296 15.199 9.88267C15.3242 10.0924 15.3755 10.3355 15.3452 10.5756Z"
                    fill="white"
                  />
                </svg>
                <span style={{ marginLeft: "10px", lineHeight: "34px" }}>
                  +84 28 3622 2982
                </span>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M13.3333 3.59229H2.66659C1.93325 3.59229 1.33992 4.19229 1.33992 4.92562L1.33325 12.9256C1.33325 13.659 1.93325 14.259 2.66659 14.259H13.3333C14.0666 14.259 14.6666 13.659 14.6666 12.9256V4.92562C14.6666 4.19229 14.0666 3.59229 13.3333 3.59229ZM13.0666 6.42562L8.35325 9.37229C8.13992 9.50562 7.85992 9.50562 7.64658 9.37229L2.93325 6.42562C2.8664 6.38809 2.80786 6.33739 2.76118 6.27659C2.71449 6.21578 2.68063 6.14614 2.66164 6.07187C2.64264 5.99759 2.63892 5.92024 2.65069 5.84449C2.66246 5.76874 2.68948 5.69616 2.73011 5.63115C2.77074 5.56614 2.82413 5.51006 2.88707 5.46628C2.95 5.42251 3.02117 5.39196 3.09625 5.37648C3.17133 5.36101 3.24877 5.36093 3.32389 5.37625C3.399 5.39157 3.47023 5.42197 3.53325 5.46562L7.99992 8.25895L12.4666 5.46562C12.5296 5.42197 12.6008 5.39157 12.6759 5.37625C12.7511 5.36093 12.8285 5.36101 12.9036 5.37648C12.9787 5.39196 13.0498 5.42251 13.1128 5.46628C13.1757 5.51006 13.2291 5.56614 13.2697 5.63115C13.3104 5.69616 13.3374 5.76874 13.3491 5.84449C13.3609 5.92024 13.3572 5.99759 13.3382 6.07187C13.3192 6.14614 13.2853 6.21578 13.2387 6.27659C13.192 6.33739 13.1334 6.38809 13.0666 6.42562Z"
                    fill="white"
                  />
                </svg>
                <span style={{ marginLeft: "11px", lineHeight: "34px" }}>
                  info@mobile-id.vn
                </span>
              </p>
            </div>
            <div className="footer_info-item d-flex">
              <div className="link-discover">
                <h5> {t("footer.discover.title")}</h5>
                <p>{t("footer.discover.why")}</p>
                <p>{t("footer.discover.using")}</p>
                <p>{t("footer.discover.work")}</p>
                <p>{t("footer.discover.partnerships")}</p>
              </div>
              <div className="link-service">
                <h5>{t("footer.service.title")}</h5>
                <p>{t("footer.service.contact")}</p>
                <p>{t("footer.service.try")}</p>
                <p>{t("footer.service.request")}</p>
                <p>{t("footer.service.downloads")}</p>
              </div>
            </div>
            <div className="footer_info-item d-flex flex-column">
              <h5>{t("footer.stayINformed")}</h5>

              <StyleTextField
                id="outlined-multiline-flexible"
                color="primary"
                error={checkNull}
                label={
                  <p className="footer_info-item--lable d-flex align-items-center">
                    <MailOutlineIcon style={{ marginRight: "10px" }} />
                    {t("footer.enterEmail")}
                  </p>
                }
                multiline
                maxRows={4}
                onChange={(event) => setEmail(event.target.value)}
                onClick={() => setCheckNull(false)}
              />
              <input
                type="hidden"
                id="_csrf"
                name="_csrf"
                value="${_csrf.token}"
              />

              <SignButton
                variant="contained"
                className="footer_info-btn"
                onClick={() => sendEmail()}
                disabled={email === "" || !regEx.test(email) ? true : false}
              >
                {t("footer.signup")}
                <BiSolidPaperPlane />
              </SignButton>
              <Grid
                className="footer_info-item-cer"
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ maxWidth: "307px", width: "100%" }}
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    width: "117px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& p": {
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "26px",
                      textAlign: "center",
                    },
                    "& img": {
                      width: "90px",
                    },
                  }}
                >
                  <img src={iso} alt="" />
                  <p>ISO/IEC 27001 certified</p>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    width: "117px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingLeft: "50px !important",
                    "& p": {
                      fontSize: "15px",
                      width: "120px",
                      fontWeight: "500",
                      lineHeight: "26px",
                      textAlign: "center",
                    },
                    "& img": {
                      width: "90px",
                    },
                  }}
                >
                  <img src={tuv} alt="" />
                  <p>eIDAS module certification for QTSPs</p>
                </Grid>
              </Grid>
            </div>
          </div>

          <div className="footer_contact d-flex justify-content-between align-items-center">
            <LanguageMenu />
            <p>
              Copyright © {new Date().getFullYear() != "2023" ? "2023 - " : ""}
              {new Date().getFullYear()} Mobile-ID
            </p>
            <div className="d-flex">
              <p>{t("footer.privacy")} </p>
              <p>{t("footer.contact")}</p>
            </div>
          </div>
        </div>
        <Divider
          sx={{
            borderColor: "#fff",
            width: "100%",
            position: "absolute",
            bottom: "82px",
          }}
        />
      </div>
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
    </>
  );
};

export default Footer;
