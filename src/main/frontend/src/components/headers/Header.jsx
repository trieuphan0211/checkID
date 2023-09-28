import React from "react";
import "../../assets/css/Header.css";
import logo from "../../assets/img/logo.png";
import logo_blue from "../../assets/img/logo_blue.png";

import { useTranslation } from "react-i18next";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useWindowSize } from "usehooks-ts";

import { Button, Collapse, Divider, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";

const ContactButton = styled(Button)({
  backgroundColor: "var(--primary-2)",
  color: "#fff",
  textTransform: "none",
  padding: "21px 20px",
  fontSize: "1.6em",
  fontWeight: "700",
  borderRadius: "30px",
  height: "58px",
  "&:hover": {
    backgroundColor: "#0074ff",
  },
});
export const Header = ({ bg }) => {
  const { t } = useTranslation();
  const { width, height } = useWindowSize();
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="header  d-flex  align-items-center"
      style={
        bg === "white"
          ? {
              color: "var(--primary-1)",
              backgroundColor: "#fff",
              paddingLeft: "30px",
            }
          : { paddingLeft: "30px" }
      }
    >
      <img
        className="header_logo"
        src={bg === "white" ? logo_blue : logo}
        alt=""
      />
      {width < 1440 && (
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon sx={{ fontSize: "45px" }} />
        </IconButton>
      )}
      {width < 1440 && (
        <Collapse
          in={open}
          sx={{ position: "absolute", top: "100%", right: "0" }}
        >
          <div className="header_component d-flex">
            <ul className="headerList ">
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                {t("header.header.menu.identityVerification")}
                <ul className="subItem1">
                  <li className="subItem1_item">
                    {width >= 768 && <BsChevronLeft />}
                    {t(
                      "header.header.menu.subIdentityVerification.built.title"
                    )}
                    {width < 768 && <BsChevronRight />}
                    <ul className="subItem2">
                      <li className="subItem2_item">
                        {t(
                          "header.header.menu.subIdentityVerification.built.why"
                        )}
                      </li>
                    </ul>
                  </li>
                  <li className="subItem1_item">
                    {width >= 768 && <BsChevronLeft />}
                    {t(
                      "header.header.menu.subIdentityVerification.solution.title"
                    )}
                    {width < 768 && <BsChevronRight />}
                    <ul className="subItem2">
                      <li className="subItem2_item">
                        {t(
                          "header.header.menu.subIdentityVerification.solution.remote"
                        )}
                      </li>
                      <li className="subItem2_item">
                        {t(
                          "header.header.menu.subIdentityVerification.solution.facetoface"
                        )}
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* <ul className="subItem1 subItem1_detail flex-column align-items-start">
                  <h5>Built with NFC technology</h5>
                  <li className="subItem1_detail-li">
                    <h4></h4>
                    <p>
                      Create trust in identity verification by leveraging
                      identity documents, NFC technology and smartphones
                    </p>
                  </li>
                  <Divider
                    component="li"
                    sx={{ width: "100%", margin: "20px 0" }}
                  />
                  <h5>Solutions for</h5>
                  <li className="subItem1_detail-li">
                    <h4>Remote identity verification</h4>
                    <p>
                      Identity verification within your mobile services or
                      through our ready-to-use app
                    </p>
                  </li>
                  <li className="subItem1_detail-li">
                    <h4>Face-to-face identity verification</h4>
                    <p>
                      Guaranteed identity verification without knowledge of
                      identity documents, anytime, anywhere
                    </p>
                  </li>
                </ul> */}
              </li>
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                {t("header.header.menu.products")}
                <ul className="subItem1">
                  <li className="subItem1_item">
                    {width >= 768 && <BsChevronLeft />}

                    {t("header.header.menu.subProduct.icao")}
                    {width < 768 && <BsChevronRight />}
                    <ul className="subItem2">
                      <li className="subItem2_item">
                        {" "}
                        {t("header.header.menu.subProduct.subicao.checkid")}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                {t("header.header.menu.solution")}
                <ul className="subItem1">
                  <li className="subItem1_item">
                    {width >= 768 && <BsChevronLeft />}
                    {t("header.header.menu.subSolution.icao")}
                    {width < 768 && <BsChevronRight />}
                    <ul className="subItem2">
                      <li className="subItem2_item">
                        {" "}
                        {t("header.header.menu.subSolution.subicao.checkid")}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                {t("header.header.menu.customers")}
                <ul className="subItem1">
                  <li className="subItem1_item">
                    {width >= 768 && <BsChevronLeft />}
                    {t("header.header.menu.subCustomers.how.title")}
                    {width < 768 && <BsChevronRight />}
                    <ul className="subItem2">
                      <li className="subItem2_item">
                        {t("header.header.menu.subCustomers.how.customers")}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subCustomers.how.partner")}
                      </li>
                    </ul>
                  </li>
                  <li className="subItem1_item">
                    {width >= 768 && <BsChevronLeft />}
                    {t("header.header.menu.subCustomers.highlight.title")}
                    {width < 768 && <BsChevronRight />}
                    <ul className="subItem2">
                      <li className="subItem2_item">
                        {t(
                          "header.header.menu.subCustomers.highlight.customers"
                        )}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subCustomers.highlight.ukHome")}
                      </li>
                      <li className="subItem2_item">
                        {t(
                          "header.header.menu.subCustomers.highlight.reverification"
                        )}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                {t("header.header.menu.industries")}
                <ul className="subItem1">
                  <li className="subItem1_item">
                    {width >= 768 && <BsChevronLeft />}
                    {t("header.header.menu.subIndustries.working.title")}
                    {width < 768 && <BsChevronRight />}
                    <ul className="subItem2">
                      <li className="subItem2_item">
                        {" "}
                        {t(
                          "header.header.menu.subIndustries.working.financial"
                        )}{" "}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subIndustries.working.travel")}{" "}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subIndustries.working.digital")}{" "}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subIndustries.working.hiring")}{" "}
                      </li>
                      <li className="subItem2_item">
                        {t(
                          "header.header.menu.subIndustries.working.eGovernment"
                        )}{" "}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subIndustries.working.Gaming")}{" "}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subIndustries.working.police")}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                {t("header.header.menu.resources")}
                <ul className="subItem1">
                  <li className="subItem1_item">
                    {width >= 768 && <BsChevronLeft />}
                    {t("header.header.menu.subResources.gain.title")}
                    {width < 768 && <BsChevronRight />}
                    <ul className="subItem2">
                      <li className="subItem2_item">
                        {t("header.header.menu.subResources.gain.blog")}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subResources.gain.whitepaper")}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subResources.gain.webinar")}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                {t("header.header.menu.aboutUs")}{" "}
                <ul className="subItem1">
                  <li className="subItem1_item">
                    {width >= 768 && <BsChevronLeft />}
                    {t("header.header.menu.subAboutUs.know.title")}
                    {width < 768 && <BsChevronRight />}
                    <ul className="subItem2">
                      <li className="subItem2_item">
                        {t("header.header.menu.subAboutUs.know.company")}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subAboutUs.know.History")}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subAboutUs.know.Certifications")}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subAboutUs.know.partnerShips")}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subAboutUs.know.awards")}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subAboutUs.know.events")}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subAboutUs.know.working")}
                      </li>
                      <li className="subItem2_item">
                        {t("header.header.menu.subAboutUs.know.contact")}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ContactButton>{t("header.header.button.contact")}</ContactButton>
          </div>
        </Collapse>
      )}
      {width >= 1440 && (
        <>
          <ul className="headerList ">
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              {t("header.header.menu.identityVerification")}
              <ul className="subItem1">
                <li className="subItem1_item">
                  {t("header.header.menu.subIdentityVerification.built.title")}
                  <BsChevronRight />
                  <ul className="subItem2">
                    <li className="subItem2_item">
                      {t(
                        "header.header.menu.subIdentityVerification.built.why"
                      )}
                    </li>
                  </ul>
                </li>
                <li className="subItem1_item">
                  {t(
                    "header.header.menu.subIdentityVerification.solution.title"
                  )}
                  <BsChevronRight />
                  <ul className="subItem2">
                    <li className="subItem2_item">
                      {t(
                        "header.header.menu.subIdentityVerification.solution.remote"
                      )}
                    </li>
                    <li className="subItem2_item">
                      {t(
                        "header.header.menu.subIdentityVerification.solution.facetoface"
                      )}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              {t("header.header.menu.products")}
              <ul className="subItem1">
                <li className="subItem1_item">
                  {t("header.header.menu.subProduct.icao")}
                  <BsChevronRight />
                  <ul className="subItem2">
                    <li className="subItem2_item">
                      {" "}
                      {t("header.header.menu.subProduct.subicao.checkid")}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              {t("header.header.menu.solution")}
              <ul className="subItem1">
                <li className="subItem1_item">
                  {t("header.header.menu.subSolution.icao")}
                  <BsChevronRight />
                  <ul className="subItem2">
                    <li className="subItem2_item">
                      {" "}
                      {t("header.header.menu.subSolution.subicao.checkid")}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              {t("header.header.menu.customers")}
              <ul className="subItem1">
                <li className="subItem1_item">
                  {t("header.header.menu.subCustomers.how.title")}
                  <BsChevronRight />
                  <ul className="subItem2">
                    <li className="subItem2_item">
                      {t("header.header.menu.subCustomers.how.customers")}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subCustomers.how.partner")}
                    </li>
                  </ul>
                </li>
                <li className="subItem1_item">
                  {t("header.header.menu.subCustomers.highlight.title")}
                  <BsChevronRight />
                  <ul className="subItem2">
                    <li className="subItem2_item">
                      {t("header.header.menu.subCustomers.highlight.customers")}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subCustomers.highlight.ukHome")}
                    </li>
                    <li className="subItem2_item">
                      {t(
                        "header.header.menu.subCustomers.highlight.reverification"
                      )}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              {t("header.header.menu.industries")}
              <ul className="subItem1">
                <li className="subItem1_item">
                  {t("header.header.menu.subIndustries.working.title")}
                  <BsChevronRight />
                  <ul className="subItem2">
                    <li className="subItem2_item">
                      {" "}
                      {t(
                        "header.header.menu.subIndustries.working.financial"
                      )}{" "}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subIndustries.working.travel")}{" "}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subIndustries.working.digital")}{" "}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subIndustries.working.hiring")}{" "}
                    </li>
                    <li className="subItem2_item">
                      {t(
                        "header.header.menu.subIndustries.working.eGovernment"
                      )}{" "}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subIndustries.working.Gaming")}{" "}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subIndustries.working.police")}
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <ul
                className="subItem1 subItem1_detail flex-column align-items-start"
                style={{ width: "auto" }}
              >
                <h5>Working for</h5>
                <div className="d-flex">
                  <li className="subItem1_detail-li">
                    <h4>Financial services</h4>
                    <p>Combining KYC, AML and great conversion</p>
                  </li>
                  <li className="subItem1_detail-li">
                    <h4>Travel</h4>
                    <p>
                      Combining safety, security and a seamless traveller
                      journey
                    </p>
                  </li>
                </div>
                <div className="d-flex">
                  <li className="subItem1_detail-li">
                    <h4>Digital signing</h4>
                    <p>Scalable customer identification at the highest level</p>
                  </li>
                  <li className="subItem1_detail-li">
                    <h4>Hiring</h4>
                    <p>
                      Trusted and flawless employee identity verification check
                    </p>
                  </li>
                </div>
                <div className="d-flex">
                  <li className="subItem1_detail-li">
                    <h4>eGovernment</h4>
                    <p>Creating the highest level of trust</p>
                  </li>
                  <li className="subItem1_detail-li">
                    <h4>Gaming & Gambling</h4>
                    <p>
                      Securely verifying players identity and improve sign-up
                      rates
                    </p>
                  </li>
                </div>
                <li className="subItem1_detail-li" style={{ width: "305px" }}>
                  <h4>Police and Border control</h4>
                  <p>Trusted identity verification anytime, anywhere</p>
                </li>
              </ul> */}
            </li>
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              {t("header.header.menu.resources")}
              <ul className="subItem1">
                <li className="subItem1_item">
                  {t("header.header.menu.subResources.gain.title")}
                  <BsChevronRight />
                  <ul className="subItem2">
                    <li className="subItem2_item">
                      {t("header.header.menu.subResources.gain.blog")}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subResources.gain.whitepaper")}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subResources.gain.webinar")}
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <ul className="subItem1 subItem1_detail flex-column align-items-start">
                <h5>Gain insights</h5>
                <li className="subItem1_detail-li">
                  <h4>Blog</h4>
                  <p>News, views and opinions from our team</p>
                </li>
                <li className="subItem1_detail-li">
                  <h4>White papers and Reports</h4>
                  <p>Take a deep dive into our experience</p>
                </li>
                <li className="subItem1_detail-li">
                  <h4>Webinars</h4>
                  <p>Binge watch our webinar series</p>
                </li>
              </ul> */}
            </li>
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              {t("header.header.menu.aboutUs")}{" "}
              <ul className="subItem1">
                <li className="subItem1_item">
                  {t("header.header.menu.subAboutUs.know.title")}
                  <BsChevronRight />
                  <ul className="subItem2">
                    <li className="subItem2_item">
                      {t("header.header.menu.subAboutUs.know.company")}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subAboutUs.know.History")}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subAboutUs.know.Certifications")}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subAboutUs.know.partnerShips")}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subAboutUs.know.awards")}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subAboutUs.know.events")}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subAboutUs.know.working")}
                    </li>
                    <li className="subItem2_item">
                      {t("header.header.menu.subAboutUs.know.contact")}
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <ul
                className="subItem1 subItem1_detail flex-column align-items-start"
                style={{ width: "auto" }}
              >
                <h5>Get to know us</h5>
                <div className="d-flex">
                  <li className="subItem1_detail-li">
                    <h4>Company</h4>
                    <p>InnoValor, the company that created CheckID</p>
                  </li>
                  <li className="subItem1_detail-li">
                    <h4>History</h4>
                    <p>Our innovation roots</p>
                  </li>
                </div>
                <div className="d-flex">
                  <li className="subItem1_detail-li">
                    <h4>Certifications</h4>
                    <p>A combination of certificates, unique to the industry</p>
                  </li>
                  <li className="subItem1_detail-li">
                    <h4>Partnerships</h4>
                    <p>
                      Strong together with partners in different verticals and
                      technologies
                    </p>
                  </li>
                </div>
                <div className="d-flex">
                  <li className="subItem1_detail-li">
                    <h4>Awards</h4>
                    <p>Recognition of our outstanding performance</p>
                  </li>
                  <li className="subItem1_detail-li">
                    <h4>Events</h4>
                    <p>Where to meet or see us?</p>
                  </li>
                </div>
                <div className="d-flex">
                  <li className="subItem1_detail-li">
                    <h4>Work at InnoValor</h4>
                    <p>Join our fast growing team</p>
                  </li>
                  <li className="subItem1_detail-li">
                    <h4>Contact</h4>
                    <p>Visit us or reach out to us</p>
                  </li>
                </div>
              </ul> */}
            </li>
          </ul>
          <ContactButton>{t("header.header.button.contact")}</ContactButton>
        </>
      )}
    </div>
  );
};
