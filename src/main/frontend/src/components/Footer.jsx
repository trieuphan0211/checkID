import React from "react";

import "../assets/css/Footer.css";
import { FiArrowRight } from "react-icons/fi";
import { BiSolidPaperPlane } from "react-icons/bi";
import logo from "../assets/img/logo_blue.png";
import iso from "../assets/img/iso27001.png";
import tuv from "../assets/img/tuv.png";

import { Button, Divider, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import styled from "@emotion/styled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageMenu from "./menus/LanguageMenu";
import { useTranslation } from "react-i18next";

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
});
const StyleTextField = styled(TextField)({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  width: "307px",
  borderRadius: "3px",
  fontSize: "1.8em",
  fontWeight: "500",
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
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer d-flex flex-column align-items-center">
      <div className="flex-column align-items-start">
        <div className="footer_info d-flex justify-content-center flex-wrap">
          <div className="footer_info-item">
            <img src={logo} alt="" />
            <p className="footer_info-title">{t("footer.feature.body")}</p>
            <p className="footer_info-btn"> {t("footer.feature.subcribe")}</p>
            <p className="footer_info-btn">
              {t("footer.feature.newsletter")} <FiArrowRight />
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
              label={
                <p className="footer_info-item--lable d-flex align-items-center">
                  <MailOutlineIcon style={{ marginRight: "10px" }} />
                  {t("footer.enterEmail")}
                </p>
              }
              multiline
              maxRows={4}
            />
            <SignButton variant="contained" className="footer_info-btn">
              {t("footer.signup")}
              <BiSolidPaperPlane />
            </SignButton>
          </div>
        </div>
        <div className="footer_cer">
          <div className="footer_cer-item d-flex justify-content-center flex-wrap">
            <div className="d-flex align-items-center ">
              <img src={iso} alt="" />
              <div>
                <p>ISO/IEC 27001 </p>
                <p>certified</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={iso} alt="" />
              <div>
                <p>ISO/IEC 27001 </p>
                <p>certified</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={tuv} alt="" />
              <div>
                <p>eIDAS module </p>
                <p>certification for QTSPs</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={tuv} alt="" />
              <div>
                <p>eIDAS eID module </p>
                <p>certification High</p>
              </div>
            </div>
          </div>
          <p>
            {t("footer.allCer")} <FiArrowRight />
          </p>
        </div>

        <div className="footer_contact d-flex justify-content-between align-items-center">
          <LanguageMenu />
          <div className="d-flex">
            <p>© CheckID 2023 </p>
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
  );
};

export default Footer;
