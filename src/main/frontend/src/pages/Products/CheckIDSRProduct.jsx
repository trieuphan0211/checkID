import React from "react";

import checkIdSr_fullFace from "../../assets/img/product/CheckID_SR/fullFace.png";
import front_face from "../../assets/img/product/CheckID_SR/front_face.png";
import behind_face from "../../assets/img/product/CheckID_SR/behind_face.png";
import SmartCard from "../../assets/img/product/SmartCard.png";
import RichPorts from "../../assets/img/product/RichPorts.png";
import nfc from "../../assets/img/product/NFC.png";
import mrz from "../../assets/img/product/mrz.png";
import camera from "../../assets/img/product/camera.png";
import { Box } from "@mui/material";
import {
  InfoDetail,
  OrtherProduct,
  TechnicalSpecifications,
} from "../../components/products";
import { useTranslation } from "react-i18next";

export const CheckIDSRProduct = () => {
  // set Title
  document.title = "CheckID-SR | CheckID";

  const { t } = useTranslation();

  const checkIdSrImg = [front_face, behind_face];
  const infoDetail = {
    header: "products.checkidSr.infoDetail.header",
    model: "products.checkidSr.infoDetail.model",
    description: "products.checkidSr.infoDetail.description",
    function: [
      { name: "SmartCard", image: SmartCard },
      { name: "Rich Ports", image: RichPorts },
      { name: "NFC", image: nfc },
      { name: "Camera", image: camera },
      { name: "MRZ  ", image: mrz },
    ],
  };
  const specification = [
    {
      item: "Name ",
      specification: "Slot load smart card scanner",
      item1: "Security module",
      specification1:
        "Security module Embedded ID card security module (SAM) optional",
    },
    {
      item: "RF technology",
      specification: "Support ISO/IEC 14443 Type A/B",
      item1: "Power input",
      specification1: "DC 12V ± 5% 1500 mA",
    },
    {
      item: "Scan spec",
      specification: "300DPI double size full color 87mm/second",
      item1: "Power consumption",
      specification1: "Quiescent current ≤ 190 mA /n Peak current≤1000 mA",
    },
    {
      item: "Universal ID documentation type",
      specification: "Viet Nam national ID card",
      item1: "Environment condition",
      specification1:
        "Operation: 0°C - 50°C, 0°C - 90% RH (non-condense)/n Storage: -30°C - 60°C, 0°C - 95% RH (non-condense)",
    },
    {
      item: "Working frequency",
      specification: "13.56MHz ± 7kHz",
      item1: "Net weight",
      specification1: "About 450g",
    },
    {
      item: "Operation speed",
      specification: "≤3 second (depending on card)",
      item1: "RoHS standard",
      specification1: "Conform to RoHS standard",
    },
    {
      item: "Camera spec",
      specification: "2.0M pixel 1080P resolution, fixed length, rotate angle",
      item1: "Product device",
      specification1: "154mm *95*40mm",
    },
    {
      item: "Communicate interface",
      specification: "USB 2.0 high-speed interface",
      item1: "Install screws",
      specification1: "M3-6",
    },
    {
      item: "Platform",
      specification: "Windows",
      item1: "Power adaptor",
      specification1: "DC 12V",
    },
    {
      item: "Update",
      specification: "Support firmware update",
      item1: "USB data cable",
      specification1: "USB cable 1000mm",
    },
    {
      item: "Biometric template Standards",
      specification: "Suprema, ISO19794-2, ANSI 378",
      item1: "Case material",
      specification1: "Sturdy ABS-PC plastic LED",
    },
  ];

  // Begin: Scroll to top when route changes

  return (
    <Box className="checkIdSr">
      <Box className="checkIdSr_info d-flex align-items-center">
        <Box>
          <h1 className="checkIdSr_info-header">
            {t("products.checkidSr.header")}
          </h1>
          <p className="checkIdSr_info-title">
            {t("products.checkidSr.title")}
          </p>
        </Box>
        <img src={checkIdSr_fullFace} alt="" className="checkIdSr_info-img" />
      </Box>
      <InfoDetail
        classHeader="checkIdSr"
        showImg={checkIdSrImg}
        infoDetail={infoDetail}
      />
      <TechnicalSpecifications
        classHeader="checkIdSr"
        specification={specification}
      />
      <OrtherProduct classHeader="checkIdSr" />
    </Box>
  );
};
