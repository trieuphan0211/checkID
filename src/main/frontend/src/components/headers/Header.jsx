import React, { useEffect } from "react";
import "../../assets/scss/Header.scss";
import logo from "../../assets/img/logo.png";
import logo_blue from "../../assets/img/logo_blue.png";

import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import { useWindowSize } from "usehooks-ts";

import { Box, Button, Divider, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import {
  AIDocumentScanning,
  Blog,
  Careers,
  Check,
  Contact,
  DataManagement,
  DocumentVerification,
  Financial,
  GameWireless,
  Global,
  Govement,
  Group,
  Group1,
  Knowledge,
  PersonSearch,
  Scale,
  Signature,
  Top,
  Tower,
} from "../../icons";
import { Link, useNavigate } from "react-router-dom";

const context = "";
const ContactButton = styled(Button)({
  backgroundColor: "var(--primary-2)",
  color: "#fff",
  textTransform: "none",
  padding: "21px 20px",
  fontSize: "1.6em",
  fontWeight: "700",
  borderRadius: "30px",
  height: "58px",
  margin: "10px",
  "&:hover": {
    backgroundColor: "#0074ff",
  },
});
export const Header = ({ bg }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className={`header  d-flex  ${
        width > 1441 ? "align-items-center" : "justify-content-between"
      }`}
      style={
        bg === "white"
          ? {
              color: "var(--primary-1)",
              backgroundColor: "var( --primary-3)",
              paddingLeft: "30px",
            }
          : { paddingLeft: "30px" }
      }
    >
      <img
        className="header_logo"
        src={bg === "white" ? logo_blue : logo}
        alt=""
        onClick={() => navigate(`${context}/`)}
      />
      {width <= 1441 && (
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
      {width <= 1441 && (
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#043873",
              color: "#fff",
              p: width < 769 ? "40px 0 20px" : "20px 0",
              " &::-webkit-scrollbar": {
                display: "none",
              },
            },
          }}
        >
          <Box
            sx={{
              width: "auto",
            }}
            role="presentation"
          >
            {width < 769 && (
              <CloseIcon
                sx={{
                  position: "absolute",
                  left: "10px",
                  top: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(false)}
              />
            )}
            <ul className="headerList " bg={bg}>
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                <input type="checkbox" />
                <p>
                  {t("header.header.menu.identityVerification")}
                  <FaChevronDown />
                </p>

                <ul className="subItem1 flex-column align-items-start">
                  <h5>
                    {" "}
                    {t(
                      "header.header.menu.subIdentityVerification.built.title"
                    )}
                  </h5>
                  <li
                    className="subItem1_item d-flex justify-content-between"
                    onClick={() => setOpen(false)}
                  >
                    <AIDocumentScanning />
                    <Link to={`${context}/trusted-identity-verification`}>
                      <h4>
                        {t(
                          "header.header.menu.subIdentityVerification.built.why"
                        )}
                      </h4>
                      <p>
                        {t(
                          "header.header.menu.subIdentityVerification.built.bodyWhy"
                        )}
                      </p>
                    </Link>
                  </li>
                  <Divider
                    component="li"
                    sx={{
                      width: "100%",
                      marginTop: "12px",
                      borderColor: "#C4C4C4",
                    }}
                  />
                  <h5>
                    {t(
                      "header.header.menu.subIdentityVerification.solution.title"
                    )}
                  </h5>
                  <li
                    className="subItem1_item d-flex justify-content-between"
                    onClick={() => setOpen(false)}
                  >
                    <DocumentVerification />
                    <Link to={`${context}/remote-identity-verification`}>
                      <h4>
                        {" "}
                        {t(
                          "header.header.menu.subIdentityVerification.solution.remote"
                        )}
                      </h4>
                      <p>
                        {t(
                          "header.header.menu.subIdentityVerification.solution.bodyRemote"
                        )}
                      </p>
                    </Link>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-between"
                    onClick={() => setOpen(false)}
                  >
                    <DataManagement />
                    <Link to={`${context}/face-to-face-identity-verification`}>
                      <h4>
                        {t(
                          "header.header.menu.subIdentityVerification.solution.facetoface"
                        )}
                      </h4>
                      <p>
                        {t(
                          "header.header.menu.subIdentityVerification.solution.bodyFacetoFace"
                        )}
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                <input type="checkbox" />
                <p>
                  {t("header.header.menu.products")}
                  <FaChevronDown />
                </p>
                <ul className="subItem1">
                  <h5>{t("header.header.menu.subProduct.icao")}</h5>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Check />
                    <div>
                      <h4>
                        {t("header.header.menu.subProduct.subicao.checkid")}
                      </h4>
                      <p>
                        {t("header.header.menu.subProduct.subicao.bodyCheckid")}
                      </p>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Check />
                    <Link to={`${context}/products/v11`}>
                      <h4>{t("header.header.menu.subProduct.subicao.v11")}</h4>
                      <p>
                        {t("header.header.menu.subProduct.subicao.bodyV11")}
                      </p>
                    </Link>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Check />
                    <div>
                      <h4>{t("header.header.menu.subProduct.subicao.r301")}</h4>
                      <p>
                        {t("header.header.menu.subProduct.subicao.bodyR301")}
                      </p>
                    </div>
                  </li>

                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Check />
                    <div>
                      <h4>
                        {t("header.header.menu.subProduct.subicao.am001")}
                      </h4>
                      <p>
                        {t("header.header.menu.subProduct.subicao.bodyAm001")}
                      </p>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Check />
                    <div>
                      <h4>{t("header.header.menu.subProduct.subicao.v20")}</h4>
                      <p>
                        {t("header.header.menu.subProduct.subicao.bodyV20")}
                      </p>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Check />
                    <div>
                      <h4>{t("header.header.menu.subProduct.subicao.r502")}</h4>
                      <p>
                        {t("header.header.menu.subProduct.subicao.bodyR502")}
                      </p>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Check />
                    <div>
                      <h4>{t("header.header.menu.subProduct.subicao.v10p")}</h4>
                      <p>
                        {t("header.header.menu.subProduct.subicao.bodyV10p")}
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                <input type="checkbox" />
                <p>
                  {t("header.header.menu.solution")}
                  <FaChevronDown />
                </p>
                <ul className="subItem1">
                  <h5>{t("header.header.menu.subSolution.icao")}</h5>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Check />
                    <div>
                      <h4>
                        {" "}
                        {t("header.header.menu.subSolution.subicao.checkid")}
                      </h4>
                      {/* <p>ID card reader/scanner</p> */}
                    </div>
                  </li>
                </ul>
              </li>
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                <input type="checkbox" />
                <p>
                  {t("header.header.menu.customers")}
                  <FaChevronDown />
                </p>
                <ul className="subItem1 flex-column align-items-start">
                  <h5>{t("header.header.menu.subCustomers.how.title")}</h5>
                  <li
                    className="subItem1_item d-flex justify-content-between"
                    onClick={() => setOpen(false)}
                  >
                    <Group />
                    <div>
                      <h4>
                        {t("header.header.menu.subCustomers.how.customers")}
                      </h4>
                      <p>
                        {t("header.header.menu.subCustomers.how.bodyCustomers")}
                      </p>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-between"
                    onClick={() => setOpen(false)}
                  >
                    <Group1 />
                    <div>
                      <h4>
                        {t("header.header.menu.subCustomers.how.partner")}
                      </h4>
                      <p>
                        {t(
                          "header.header.menu.subCustomers.how.bodyPartnerships"
                        )}
                      </p>
                    </div>
                  </li>
                  <Divider
                    component="li"
                    sx={{
                      width: "100%",
                      marginTop: "12px",
                      borderColor: "#C4C4C4",
                    }}
                  />
                  <h5>
                    {" "}
                    {t("header.header.menu.subCustomers.highlight.title")}
                  </h5>
                  <li
                    className="subItem1_item d-flex justify-content-between"
                    onClick={() => setOpen(false)}
                  >
                    <Check />
                    <div>
                      <h4>
                        {" "}
                        {t("header.header.menu.subCustomers.highlight.digital")}
                      </h4>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-between"
                    onClick={() => setOpen(false)}
                  >
                    <Check />
                    <div>
                      <h4>
                        {t("header.header.menu.subCustomers.highlight.ukHome")}
                      </h4>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-between"
                    onClick={() => setOpen(false)}
                  >
                    <Check />
                    <div>
                      <h4>
                        {t(
                          "header.header.menu.subCustomers.highlight.automated"
                        )}
                      </h4>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-between"
                    onClick={() => setOpen(false)}
                  >
                    <Check />
                    <div>
                      <h4>
                        {t("header.header.menu.subCustomers.highlight.quality")}
                      </h4>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                <input type="checkbox" />
                <p>
                  {t("header.header.menu.industries")}
                  <FaChevronDown />
                </p>
                <ul className="subItem1">
                  <h5>
                    {" "}
                    {t("header.header.menu.subIndustries.working.title")}
                  </h5>

                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Financial />
                    <div>
                      <h4>
                        {t(
                          "header.header.menu.subIndustries.working.financial"
                        )}
                      </h4>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Signature />
                    <div>
                      <h4>
                        {t("header.header.menu.subIndustries.working.digital")}
                      </h4>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Govement />
                    <div>
                      <h4>
                        {" "}
                        {t(
                          "header.header.menu.subIndustries.working.eGovernment"
                        )}
                      </h4>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Scale />
                    <div>
                      <h4>
                        {t("header.header.menu.subIndustries.working.law")}
                      </h4>
                    </div>
                  </li>

                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Global />
                    <div>
                      <h4>
                        {" "}
                        {t("header.header.menu.subIndustries.working.travel")}
                      </h4>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <PersonSearch />
                    <div>
                      <h4>
                        {t("header.header.menu.subIndustries.working.hiring")}
                      </h4>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <GameWireless />
                    <div>
                      <h4>
                        {t("header.header.menu.subIndustries.working.Gaming")}
                      </h4>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Tower />
                    <div>
                      <h4>
                        {t("header.header.menu.subIndustries.working.real")}
                      </h4>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                className={`headerList_item ${
                  bg === "white" ? "headerList_item-white" : ""
                }`}
              >
                <input type="checkbox" />
                <p>
                  {t("header.header.menu.resources")}
                  <FaChevronDown />
                </p>
                <ul className="subItem1">
                  <h5> {t("header.header.menu.subResources.gain.title")}</h5>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Blog />
                    <div>
                      <h4> {t("header.header.menu.subResources.gain.blog")}</h4>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Knowledge />
                    <div>
                      <h4>
                        {" "}
                        {t("header.header.menu.subResources.gain.knowledge")}
                      </h4>
                    </div>
                  </li>
                  <Divider
                    component="li"
                    sx={{
                      width: "100%",
                      marginTop: "12px",
                      borderColor: "#C4C4C4",
                    }}
                  />
                  <h5>{t("header.header.menu.subResources.about.title")}</h5>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Careers />
                    <div>
                      <h4>
                        {t("header.header.menu.subResources.about.company")}
                      </h4>
                    </div>
                  </li>
                  <li
                    className="subItem1_item d-flex justify-content-start"
                    onClick={() => setOpen(false)}
                  >
                    <Contact />
                    <div>
                      <h4>
                        {t("header.header.menu.subResources.about.contact")}
                      </h4>
                    </div>
                  </li>

                  <Top className="positionTop" bg={bg} />
                </ul>
              </li>
            </ul>
            <ContactButton sx={{ width: "calc(100% - 20px)" }}>
              {t("header.header.button.contact")}
            </ContactButton>
          </Box>
        </Drawer>
      )}
      {width > 1441 && (
        <>
          <ul className="headerList ">
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              {t("header.header.menu.identityVerification")}
              <FaChevronDown />
              <ul className="subItem1 flex-column align-items-start">
                <h5>
                  {t("header.header.menu.subIdentityVerification.built.title")}
                </h5>
                <li className="subItem1_item d-flex justify-content-between">
                  <AIDocumentScanning />
                  <Link to={`${context}/trusted-identity-verification`}>
                    <h4>
                      {t(
                        "header.header.menu.subIdentityVerification.built.why"
                      )}
                    </h4>
                    <p>
                      {t(
                        "header.header.menu.subIdentityVerification.built.bodyWhy"
                      )}
                    </p>
                  </Link>
                </li>
                <Divider
                  component="li"
                  sx={{
                    width: "100%",
                    marginTop: "12px",
                    borderColor: "#C4C4C4",
                  }}
                />
                <h5>
                  {t(
                    "header.header.menu.subIdentityVerification.solution.title"
                  )}
                </h5>
                <li className="subItem1_item d-flex justify-content-between">
                  <DocumentVerification />
                  <Link to={`${context}/remote-identity-verification`}>
                    <h4>
                      {" "}
                      {t(
                        "header.header.menu.subIdentityVerification.solution.remote"
                      )}
                    </h4>
                    <p>
                      {t(
                        "header.header.menu.subIdentityVerification.solution.bodyRemote"
                      )}
                    </p>
                  </Link>
                </li>
                <li className="subItem1_item d-flex justify-content-between">
                  <DataManagement />
                  <Link to={`${context}/face-to-face-identity-verification`}>
                    <h4>
                      {t(
                        "header.header.menu.subIdentityVerification.solution.facetoface"
                      )}
                    </h4>
                    <p>
                      {t(
                        "header.header.menu.subIdentityVerification.solution.bodyFacetoFace"
                      )}
                    </p>
                  </Link>
                </li>
                <Top className="positionTop" bg={bg} />
              </ul>
            </li>
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              <Link to={`${context}/products`}>
                {t("header.header.menu.products")}
              </Link>
              <FaChevronDown />
              <ul className="subItem1">
                <h5>{t("header.header.menu.subProduct.icao")}</h5>
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <li className="subItem1_item d-flex justify-content-start">
                      <Check />
                      <Link>
                        <h4>
                          {t("header.header.menu.subProduct.subicao.checkid")}
                        </h4>
                        <p>
                          {t(
                            "header.header.menu.subProduct.subicao.bodyCheckid"
                          )}
                        </p>
                      </Link>
                    </li>
                    <li className="subItem1_item d-flex  justify-content-start">
                      <Check />
                      <Link>
                        <h4>
                          {t("header.header.menu.subProduct.subicao.am001")}
                        </h4>
                        <p>
                          {t("header.header.menu.subProduct.subicao.bodyAm001")}
                        </p>
                      </Link>
                    </li>
                  </div>
                  <div className="d-flex justify-content-between">
                    <li className="subItem1_item d-flex justify-content-start">
                      <Check />
                      <Link to={`${context}/products/v11`}>
                        <h4>
                          {t("header.header.menu.subProduct.subicao.v11")}
                        </h4>
                        <p>
                          {t("header.header.menu.subProduct.subicao.bodyV11")}
                        </p>
                      </Link>
                    </li>
                    <li className="subItem1_item d-flex justify-content-start">
                      <Check />
                      <Link>
                        <h4>
                          {t("header.header.menu.subProduct.subicao.v20")}
                        </h4>
                        <p>
                          {t("header.header.menu.subProduct.subicao.bodyV20")}
                        </p>
                      </Link>
                    </li>
                  </div>
                  <div className="d-flex justify-content-between">
                    <li className="subItem1_item d-flex justify-content-start">
                      <Check />
                      <Link>
                        <h4>
                          {t("header.header.menu.subProduct.subicao.r301")}
                        </h4>
                        <p>
                          {t("header.header.menu.subProduct.subicao.bodyR301")}
                        </p>
                      </Link>
                    </li>{" "}
                    <li className="subItem1_item d-flex justify-content-start">
                      <Check />
                      <Link>
                        <h4>
                          {t("header.header.menu.subProduct.subicao.r502")}
                        </h4>
                        <p>
                          {t("header.header.menu.subProduct.subicao.bodyR502")}
                        </p>
                      </Link>
                    </li>
                  </div>
                  <div className="d-flex justify-content-between">
                    <li className="subItem1_item d-flex justify-content-start">
                      <Check />
                      <Link>
                        <h4>
                          {t("header.header.menu.subProduct.subicao.v10p")}
                        </h4>
                        <p>
                          {t("header.header.menu.subProduct.subicao.bodyV10p")}
                        </p>
                      </Link>
                    </li>
                  </div>
                </div>
                <Top className="positionTop" bg={bg} />
              </ul>
            </li>
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              {t("header.header.menu.solution")}
              <FaChevronDown />
              <ul className="subItem1">
                <h5>{t("header.header.menu.subSolution.icao")}</h5>
                <li className="subItem1_item d-flex justify-content-start">
                  <Check />
                  <div>
                    <h4>
                      {t("header.header.menu.subSolution.subicao.checkid")}
                    </h4>
                    {/* <p>ID card reader/scanner</p> */}
                  </div>
                </li>
                <Top className="positionTop" bg={bg} />
              </ul>
            </li>
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              {t("header.header.menu.customers")}
              <FaChevronDown />
              <ul className="subItem1 flex-column align-items-start">
                <h5>{t("header.header.menu.subCustomers.how.title")}</h5>
                <li className="subItem1_item d-flex justify-content-between">
                  <Group />
                  <div>
                    <h4>
                      {t("header.header.menu.subCustomers.how.customers")}
                    </h4>
                    <p>
                      {t("header.header.menu.subCustomers.how.bodyCustomers")}
                    </p>
                  </div>
                </li>
                <li className="subItem1_item d-flex justify-content-between">
                  <Group1 />
                  <div>
                    <h4>{t("header.header.menu.subCustomers.how.partner")}</h4>
                    <p>
                      {t(
                        "header.header.menu.subCustomers.how.bodyPartnerships"
                      )}
                    </p>
                  </div>
                </li>
                <Divider
                  component="li"
                  sx={{
                    width: "100%",
                    marginTop: "12px",
                    borderColor: "#C4C4C4",
                  }}
                />
                <h5> {t("header.header.menu.subCustomers.highlight.title")}</h5>
                <li className="subItem1_item d-flex justify-content-between">
                  <Check />
                  <div>
                    <h4>
                      {t("header.header.menu.subCustomers.highlight.digital")}
                    </h4>
                  </div>
                </li>
                <li className="subItem1_item d-flex justify-content-between">
                  <Check />
                  <div>
                    <h4>
                      {t("header.header.menu.subCustomers.highlight.ukHome")}
                    </h4>
                  </div>
                </li>
                <li className="subItem1_item d-flex justify-content-between">
                  <Check />
                  <div>
                    <h4>
                      {t("header.header.menu.subCustomers.highlight.automated")}
                    </h4>
                  </div>
                </li>
                <li className="subItem1_item d-flex justify-content-between">
                  <Check />
                  <div>
                    <h4>
                      {t("header.header.menu.subCustomers.highlight.quality")}
                    </h4>
                  </div>
                </li>
                <Top className="positionTop" bg={bg} />
              </ul>
            </li>
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              {t("header.header.menu.industries")}
              <FaChevronDown />
              <ul className="subItem1">
                <h5> {t("header.header.menu.subIndustries.working.title")}</h5>
                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <li className="subItem1_item d-flex justify-content-start">
                      <Financial />
                      <div>
                        <h4>
                          {" "}
                          {t(
                            "header.header.menu.subIndustries.working.financial"
                          )}
                        </h4>
                      </div>
                    </li>
                    <li className="subItem1_item d-flex justify-content-start">
                      <Signature />
                      <div>
                        <h4>
                          {" "}
                          {t(
                            "header.header.menu.subIndustries.working.digital"
                          )}
                        </h4>
                      </div>
                    </li>
                    <li className="subItem1_item d-flex justify-content-start">
                      <Govement />
                      <div>
                        <h4>
                          {" "}
                          {t(
                            "header.header.menu.subIndustries.working.eGovernment"
                          )}
                        </h4>
                      </div>
                    </li>
                    <li className="subItem1_item d-flex justify-content-start">
                      <Scale />
                      <div>
                        <h4>
                          {" "}
                          {t("header.header.menu.subIndustries.working.law")}
                        </h4>
                      </div>
                    </li>
                  </div>
                  <div>
                    <li className="subItem1_item d-flex justify-content-start">
                      <Global />
                      <div>
                        <h4>
                          {" "}
                          {t("header.header.menu.subIndustries.working.travel")}
                        </h4>
                      </div>
                    </li>
                    <li className="subItem1_item d-flex justify-content-start">
                      <PersonSearch />
                      <div>
                        <h4>
                          {" "}
                          {t("header.header.menu.subIndustries.working.hiring")}
                        </h4>
                      </div>
                    </li>
                    <li className="subItem1_item d-flex justify-content-start">
                      <GameWireless />
                      <div>
                        <h4>
                          {" "}
                          {t("header.header.menu.subIndustries.working.Gaming")}
                        </h4>
                      </div>
                    </li>
                    <li className="subItem1_item d-flex justify-content-start">
                      <Tower />
                      <div>
                        <h4>
                          {" "}
                          {t("header.header.menu.subIndustries.working.real")}
                        </h4>
                      </div>
                    </li>
                  </div>
                </div>
                <Top className="positionTop" bg={bg} />
              </ul>
            </li>
            <li
              className={`headerList_item ${
                bg === "white" ? "headerList_item-white" : ""
              }`}
            >
              {t("header.header.menu.resources")}
              <FaChevronDown />
              <ul className="subItem1">
                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <h5> {t("header.header.menu.subResources.gain.title")}</h5>
                    <li className="subItem1_item d-flex justify-content-start">
                      <Blog />
                      <div>
                        <h4>
                          {" "}
                          {t("header.header.menu.subResources.gain.blog")}
                        </h4>
                      </div>
                    </li>
                    <li className="subItem1_item d-flex justify-content-start">
                      <Knowledge />
                      <div>
                        <h4>
                          {t("header.header.menu.subResources.gain.knowledge")}
                        </h4>
                      </div>
                    </li>
                  </div>
                  <div>
                    <h5>{t("header.header.menu.subResources.about.title")}</h5>
                    <li className="subItem1_item d-flex justify-content-start">
                      <Careers />
                      <div>
                        <h4>
                          {t("header.header.menu.subResources.about.company")}
                        </h4>
                      </div>
                    </li>
                    <li className="subItem1_item d-flex justify-content-start">
                      <Contact />
                      <div>
                        <h4>
                          {t("header.header.menu.subResources.about.contact")}
                        </h4>
                      </div>
                    </li>
                  </div>
                </div>
                <Top className="positionTop" bg={bg} />
              </ul>
            </li>
          </ul>
          <ContactButton>{t("header.header.button.contact")}</ContactButton>
        </>
      )}
    </div>
  );
};
