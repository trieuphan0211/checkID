import { Box } from "@mui/material";
import React from "react";

import fullFace from "../../assets/img/product/v20/fullFace.png";
import front_face from "../../assets/img/product/v20/front_face.png";
import behind_face from "../../assets/img/product/v20/behind_face.png";
import android from "../../assets/img/product/Android.png";
import fingerprint from "../../assets/img/product/Fingerprint.png";
import size from "../../assets/img/product/size.png";
import nfc from "../../assets/img/product/NFC.png";
import g4 from "../../assets/img/product/4G.png";
import mrz from "../../assets/img/product/mrz.png";
import camera from "../../assets/img/product/camera.png";
import {
  InfoDetail,
  OrtherProduct,
  TechnicalSpecifications,
} from "../../components/products";
import v20_2 from "../../assets/img/product/v20/v20_2.png";
import howtouse from "../../assets/img/product/howtouse.png";
import passport from "../../assets/img/product/v20/passport.png";
import memoryCard from "../../assets/img/product/memoryCard.png";
import background_4g from "../../assets/img/product/bg_4g.png";
import { useTranslation } from "react-i18next";

export const V20Product = () => {
  // set Title
  document.title = "V20 | CheckID";

  const { t, i18n } = useTranslation();
  const v20Img = [front_face, behind_face];
  const infoDetail = {
    header: "products.v20.infoDetail.header",
    model: "products.v20.infoDetail.model",
    description: "products.v20.infoDetail.description",
    function: [
      { name: "Android", image: android },
      { name: "Fingerprint", image: fingerprint },
      { name: "10-inch", image: size },
      { name: "NFC", image: nfc },
      { name: "MRZ  ", image: mrz },
      { name: "4G", image: g4 },
      { name: "Camera", image: camera },
    ],
  };
  const specification = [
    {
      item: "CPU",
      specification: "CPU QUALCOMM 450",
      item1: "Barcode scanner",
      specification1: "1D,2D,MRZ(machine readable Zone)",
    },
    {
      item: "Core",
      specification: "1.8 GHz 8xCore,Cortex-A53",
      item1: "Charger Adapter",
      specification1: "100-240V, AC Adapter, 1.2m USB Type-C Cable",
    },
    {
      item: "RAM/ROM",
      specification: "2+16GB (3+32GB or 4+64GB optional)",
      item1: "Physical Security",
      specification1:
        "Short Circuit and Thermal Protection/ Over-Voltage Protection High Security Level Chipset Electrostatic Prevention",
    },
    {
      item: "GMS",
      specification: "Support Google Mobile Services",
      item1: "TF Card",
      specification1: "x1 - Support 128GB TF Card",
    },
    {
      item: "Support OS",
      specification: "Android 9",
      item1: "USB Interface",
      specification1: "Type-CUSB 3.0 x 1, USB 2.0 x1",
    },
    {
      item: "Display",
      specification: "10-inch, 1280*800, IPS",
      item1: "Battery",
      specification1:
        "5,000mAh by default (up to 7500mAh)Support PD ChargingCertification: 38.3 report, CB, CE, FCC",
    },
    {
      item: "Communication",
      specification: `2G B5 (850), B8 (900)
        3G B2 (1900), B8 (900)
        4G B3 (1800), B4 (1700/2100)`,
      item1: "Contact",
      specification1:
        "Supported Card Types: 1.8V, 3V and 5V Smart Card Interface Speed: 10753~625kbps(when supported by card) Smart Card Clock Frequency: 4MISO 7816-3 ID-1 (full-size)",
    },
    {
      item: "Speaker",
      specification: "1.5W-3W",
      item1: "Contactless",
      specification1:
        "Build-in Antenna106kbps-424kbpsSmart Card Clock Frequency: 13.56MHzISO 14443 Type A and Type B,Mifare© Protocol, Felica® Protocol",
    },
    {
      item: "Mic/GPS",
      specification: "Yes",
      item1: "Meantime Between Failure (MTBF)",
      specification1: "500,000 hours",
    },
    {
      item: "Camera",
      specification: "Front Camera 500W Rear Camera 1200W",
      item1: "Storage Temperature",
      specification1: "-20°C ～ 85°C",
    },
  ];
  return (
    <Box className="v20">
      <Box className="v20_info d-flex align-items-center">
        <Box>
          <h1 className="v20_info-header" lang={i18n.language}>
            {t("products.v20.header")}
          </h1>
          <p className="v20_info-title">
            {t("products.v20.title")
              .split("/n")
              .map((item) => (
                <>
                  {item}
                  <br />
                </>
              ))}
          </p>
        </Box>
        <img src={fullFace} alt="" className="v20_info-img" />
      </Box>
      <InfoDetail classHeader="v20" showImg={v20Img} infoDetail={infoDetail} />
      <Box className="v20_features">
        <Box className="v20_features-comp">
          <Box className="v20_features-comp-info">
            <h4>{t("products.v20.features.0.header")}</h4>
            <p>{t("products.v20.features.0.body")}</p>
          </Box>
          <img src={v20_2} alt="" />
        </Box>
        <Box className="v20_features-comp">
          <img src={howtouse} alt="" />
          <Box className="v20_features-comp-info">
            <h4>{t("products.v20.features.1.header")}</h4>
            <p>{t("products.v20.features.1.body")}</p>
          </Box>
        </Box>
        <Box className="v20_features-comp">
          <Box className="v20_features-comp-info">
            <h4>{t("products.v20.features.2.header")}</h4>
            <p>{t("products.v20.features.2.body")}</p>
            <p>{t("products.v20.features.2.body1")}</p>
          </Box>
          <img src={passport} alt="" />
        </Box>
        <Box className="v20_features-comp">
          <img src={memoryCard} alt="" />
          <Box className="v20_features-comp-info">
            <h4>{t("products.v20.features.3.header")}</h4>
            <p>{t("products.v20.features.3.body")}</p>
          </Box>
        </Box>
        <Box className="v20_features-comp">
          <Box className="v20_features-comp-info">
            <h4>{t("products.v20.features.4.header")}</h4>
            <p>{t("products.v20.features.4.body")}</p>
          </Box>
          <img src={background_4g} alt="" />
        </Box>
      </Box>
      <TechnicalSpecifications
        classHeader="v20"
        specification={specification}
      />
      <OrtherProduct classHeader="v20" />
    </Box>
  );
};
