import React from "react";
import { useTranslation } from "react-i18next";

import { Header, SubHeader } from "../components/headers";
import vendor from "../assets/img/home_page/vendor.png";
import "../assets/css/HomePage.css";
import benifit from "../assets/img/home_page/benifit.png";
import remote from "../assets/img/home_page/remote-icon.png";
import facetoface from "../assets/img/home_page/face-to-face.png";
import feature from "../assets/img/home_page/Featured-image-website-blog.png";
import banner from "../assets/img/home_page/banner_readid_phone-app.png";
import talkChallenge from "../assets/img/home_page/talkChallenge.png";
import ai from "../assets/img/home_page/ai.png";
import acb from "../assets/img/company/acb.png";
import eximbank from "../assets/img/company/eximbank.png";
import pgbank from "../assets/img/company/pgbank.png";
import ocb from "../assets/img/company/ocb.png";
import techcombank from "../assets/img/company/techcombank.png";
import fpt from "../assets/img/company/fpt.png";
import viettel from "../assets/img/company/viettel.png";
import vnpt from "../assets/img/company/vnpt.png";
import vgca from "../assets/img/company/vgca.png";
import fastca from "../assets/img/company/fastca.png";
import winca from "../assets/img/company/winca.png";
import cmcca from "../assets/img/company/cmcca.png";
import easyca from "../assets/img/company/easyca.png";
import ica from "../assets/img/company/ica.png";
import bkavca from "../assets/img/company/bkavca.png";
import hiloca from "../assets/img/company/hiloca.png";
import trustca from "../assets/img/company/trustca.png";
import misa from "../assets/img/company/misa.png";
import newtel from "../assets/img/company/newtel.png";
import martsign from "../assets/img/company/martsign.png";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

import { FiArrowRight } from "react-icons/fi";
import Footer from "../components/Footer";

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
const DemoButton = styled(Button)({
  backgroundColor: "#FFE492",
  color: "var(--primary-1)",
  textTransform: "none",
  padding: "21px 38px",
  fontSize: "1.6em",
  fontWeight: "700",
  borderRadius: "30px",
  height: "58px",
  "&:hover": {
    backgroundColor: "#ffc81f",
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
const HomePage = (props) => {
  const { t } = useTranslation();
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
      <div className="homePage">
        <div className="homePage_introduce d-flex justify-content-center">
          <div>
            <div className="homePage_introduce-header">
              {" "}
              {t("homePage.introduce.header")}
            </div>
            <div className="homePage_introduce-title">
              {t("homePage.introduce.title")}
            </div>
            <div className="homePage_introduce-body">
              <p>{t("homePage.introduce.body")}</p>
              <div>
                <LearnButton
                  sx={{
                    marginBottom: "20px",
                  }}
                >
                  {t("homePage.introduce.contact")}
                </LearnButton>
                <DemoButton
                  sx={{
                    marginBottom: "20px",
                  }}
                >
                  {t("homePage.introduce.demoapp")}
                </DemoButton>
              </div>
            </div>
          </div>
          <img className="homePage_introduce-img" src={ai} alt="" />
        </div>
        <div className="homePage_vendor d-flex ">
          <div className="homePage_vendor-img">
            <img src={vendor} alt="" />
          </div>
          <div className="homePage_vendor-intro">
            <h2 className="homePage_vendor-intro-title">
              {t("homePage.vendor.title")}
            </h2>
            <p className="homePage_vendor-intro-content">
              {t("homePage.vendor.content")}
            </p>
            <p className="homePage_vendor-intro-readmore">
              {t("homePage.vendor.readMore")} <FiArrowRight />
            </p>
          </div>
        </div>
        <div className="homePage_company d-flex flex-column align-items-center">
          <h2 className="homePage_company-title">
            {t("homePage.company.title")}
          </h2>
          <p className="homePage_company-content">
             {t("homePage.company.content")}
          </p>
          <div className="homePage_company-logos d-flex flex-column align-items-center">
            <div className="homePage_company-logos-item">
              <img src={acb} alt="" />
              <img src={eximbank} alt="" />
              <img src={pgbank} alt="" />
              <img src={ocb} alt="" />
              <img src={techcombank} alt="" />
            </div>
            <div className="homePage_company-logos-item">
              <img src={fpt} alt="" />
              <img src={viettel} alt="" />
              <img src={vnpt} alt="" />
              <img src={vgca} alt="" />
              <img src={fastca} alt="" />
            </div>
            <div className="homePage_company-logos-item">
              <img src={winca} alt="" />
              <img src={cmcca} alt="" />
              <img src={easyca} alt="" />
              <img src={ica} alt="" />
              <img src={bkavca} alt="" />
            </div>
            <div className="homePage_company-logos-item">
              <img src={hiloca} alt="" />
              <img src={trustca} alt="" />
              <img src={misa} alt="" />
              <img src={newtel} alt="" />
              <img src={martsign} alt="" />
            </div>
            <p className="homePage_company-readstore">
              {t("homePage.company.readStory")} <FiArrowRight />
            </p>
          </div>
        </div>
        <div className="homePage_question d-flex flex-column">
          <div className="homePage_question-header d-flex flex-column align-items-center">
            <h2>{t("homePage.question.header.question")} </h2>
            <h1>{t("homePage.question.header.body")}</h1>
            <LearnButton>{t("homePage.question.header.learnwhy")}</LearnButton>
          </div>
          <div className="homePage_question-body d-flex justify-content-center">
            <div className="benifit">
              <div className="benifit_item d-flex justify-content-between align-items-center">
                <div className="benifit_item-content">
                  <h3>{t("homePage.question.benefit.conversion.header")}</h3>
                  <p>{t("homePage.question.benefit.conversion.body")}</p>
                </div>
                <div className="benifit_item-icon">
                  <FiArrowRight />
                </div>
              </div>
              <div className="benifit_item d-flex justify-content-between align-items-center">
                <div className="benifit_item-content">
                  <h3>{t("homePage.question.benefit.scalability.header")}</h3>
                  <p>{t("homePage.question.benefit.scalability.body")}</p>
                </div>
                <div className="benifit_item-icon">
                  <FiArrowRight />
                </div>
              </div>
              <div className="benifit_item d-flex justify-content-between align-items-center">
                <div className="benifit_item-content">
                  <h3>{t("homePage.question.benefit.use.header")}</h3>
                  <p>{t("homePage.question.benefit.use.body")}</p>
                </div>
                <div className="benifit_item-icon">
                  <FiArrowRight />
                </div>
              </div>
              <div className="benifit_item d-flex justify-content-between align-items-center">
                <div className="benifit_item-content">
                  <h3>{t("homePage.question.benefit.secure.header")}</h3>
                  <p>{t("homePage.question.benefit.secure.body")}</p>
                </div>
                <div className="benifit_item-icon">
                  <FiArrowRight />
                </div>
              </div>
              <div className="benifit_item d-flex justify-content-between align-items-center">
                <div className="benifit_item-content">
                  <h3>
                    {t("homePage.question.benefit.implementation.header")}
                  </h3>
                  <p>{t("homePage.question.benefit.implementation.body")}</p>
                </div>
                <div className="benifit_item-icon">
                  <FiArrowRight />
                </div>
              </div>
            </div>
            <img src={benifit} alt="" />
          </div>
        </div>
        <div className="homePage_video d-flex flex-column align-items-end">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/UesGqiCEp7Y?rel=0"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
          <div className="homePage_video-title">
            <p>{t("homePage.videotitle")}</p>
          </div>
        </div>
        <div className="homePage_verify d-flex flex-column">
          <div className="homePage_verify-header d-flex flex-column align-items-center">
            <h2>{t("homePage.verify.header.title")}</h2>
            <h1>{t("homePage.verify.header.body")}</h1>
            <p>{t("homePage.verify.header.question")}</p>
          </div>
          <div className="homePage_verify-body d-flex justify-content-center">
            <div className="homePage_verify-body-item d-flex flex-column justify-content-between">
              <div className="d-flex">
                <p>{t("homePage.verify.body.remote.title")}</p>
                <img src={remote} alt="" />
              </div>
              <VerifyButton>
                {t("homePage.verify.body.remote.button")}
                <FiArrowRight />
              </VerifyButton>
            </div>
            <div className="homePage_verify-body-item d-flex flex-column justify-content-between">
              <div className="d-flex ">
                <p>{t("homePage.verify.body.facetoface.title")}</p>
                <img src={facetoface} alt="" />
              </div>
              <VerifyButton>
                {t("homePage.verify.body.facetoface.button")}
                <FiArrowRight />
              </VerifyButton>
            </div>
          </div>
        </div>
        <div className="homePage_news d-flex flex-column align-items-center">
          <div className="homePage_news-info d-flex ">
            <div className="homePage_news-info-title">
              <h3> {t("homePage.news.info.title.header")}</h3>
              <p>{t("homePage.news.info.title.body")}</p>
              <p>
                {t("homePage.news.info.title.goto")}
                <FiArrowRight />
              </p>
            </div>
            <div className="homePage_news-info-body d-flex">
              <div className="homePage_news-info-body-item">
                <img src={feature} alt="" />
                <h4>{t("homePage.news.info.body.austrian.header")}</h4>
                <p>{t("homePage.news.info.body.austrian.body")}</p>
              </div>
              <div className="homePage_news-info-body-item">
                <img src={banner} alt="" />
                <h4>{t("homePage.news.info.body.gartner.header")}</h4>
                <p>{t("homePage.news.info.body.gartner.body")}</p>
              </div>
            </div>
          </div>
          <div className="homePage_news-talk d-flex">
            <img src={talkChallenge} alt="" />
            <div>
              <h3>{t("homePage.news.talk.header")}</h3>
              <h5>{t("homePage.news.talk.body")}</h5>
              <LearnButton>{t("homePage.news.talk.button")}</LearnButton>
              <p>
                {t("homePage.news.talk.downloads")}
                <FiArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
