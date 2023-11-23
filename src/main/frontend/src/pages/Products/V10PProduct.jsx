import React from "react";
import fullFace from "../../assets/img/product/V10P/fullFace.png";
import front_face from "../../assets/img/product/V10P/front_face.png";
import behind_face from "../../assets/img/product/V10P/behind_face.png";
import android from "../../assets/img/product/Android.png";
import fingerprint from "../../assets/img/product/Fingerprint.png";
import size from "../../assets/img/product/size.png";
import nfc from "../../assets/img/product/NFC.png";
import g4 from "../../assets/img/product/4G.png";
import camera from "../../assets/img/product/camera.png";
import bigBattery from "../../assets/img/product/BigBattery.png";
import howtouse from "../../assets/img/product/howtouse.png";
import v10p_1 from "../../assets/img/product/V10P/v10p_1.png";
import v10p_2 from "../../assets/img/product/V10P/v10p_2.png";
import memoryCard from "../../assets/img/product/memoryCard.png";
import background_4g from "../../assets/img/product/bg_4g.png";

import { Box } from "@mui/material";
import {
  InfoDetail,
  OrtherProduct,
  TechnicalSpecifications,
} from "../../components/products";
import { useTranslation } from "react-i18next";

export const V10PProduct = () => {
  // set Title
  document.title = "V10P | CheckID";

  const { t } = useTranslation();
  const v10pImg = [front_face, behind_face];
  const infoDetail = {
    header: "products.v10p.infoDetail.header",
    model: "products.v10p.infoDetail.model",
    description: "products.v10p.infoDetail.description",
    function: [
      { name: "Android", image: android },
      { name: "Fingerprint", image: fingerprint },
      { name: "10-inch", image: size },
      { name: "NFC", image: nfc },
      { name: "Camera", image: camera },
      { name: "4G", image: g4 },
      { name: "Big Battery", image: bigBattery },
    ],
  };
  const specification = [
    {
      item: "OS",
      specification: "Android 10 (GMS Available)",
      item1: "Host Interface",
      specification1: "1×USB Type-C, USB 2.0, OTG",
    },
    {
      item: "Processor",
      specification: "Qualcomm QCM2150",
      item1: "Dimension",
      specification1: "204.4X82.5X15.5mm (L×W×H)",
    },
    {
      item: "SIM Card Slot",
      specification:
        "Supported Card Types:1.8V, 3V and 5V /n Smart Card Interface Speed:10753~625kbps (when supported by card) /n Smart Card Clock Frequency:4M~12MISO 7816-3ISO/IEC7816, T=0 and T=1  /n Protocol,Class A, B, C card",
      item1: "SIM Card Slot",
      specification1:
        "Supported Card Types:1.8V, 3V and 5VSmart Card Interface Speed:10753~625kbps (when supported by card)Smart Card Clock Frequency:4M~12MISO 7816-3ISO/IEC7816, T=0 and T=1 Protocol,Class A, B, C cards",
    },
    {
      item: "Display",
      specification: "LCM 5 inch, 1280×720, IPS",
      item1: "Material",
      specification1: "ABS+PC",
    },
    {
      item: "DPI",
      specification: "500 DPI",
      item1: "4G",
      specification1: "B3 (1800), B4 (1700/2100)",
    },
    {
      item: "Image Size",
      specification: "320×480 Pixel",
      item1: "NFC (optional)",
      specification1:
        "Smart Card Interface Speed:106kbps~424kbpsSmart Card Clock Frequency:13.56MHzISO 14443 Type A and Type B",
    },
    {
      item: "ID-1 Card Slot (optional)",
      specification: `Support Card Types:1.8V, 3V and 5VSmart Card Interface /n Speed:10753~625kbps (when supported by card)Smart Card Clock /n Frequency:4M~12MISO 7816-3 ID-1 (full-size)ISO/IEC7816, T=0 and T=1 protocol,Class A, B, C cards`,
      item1: "ID-1 Card Slot (optional)",
      specification1:
        "Supported Card Types: 1.8V, 3V and 5V Smart Card Interface /n Speed: 10753~625kbps(when supported by card) Smart Card Clock /n Frequency: 4MISO 7816-3 ID-1 (full-size)",
    },
    {
      item: "Live Finger Detection (LFD) Feature",
      specification: "YES",
      item1: "Internal Memory",
      specification1: "RAM 2GB + ROM 16GB eMMC",
    },

    {
      item: "Power Adaptor",
      specification: "Input: 100~240V, 50/60Hz 0.35A /n Output: 5V/1500mAs",
      item1: "Bluetooth",
      specification1: "Bluetooth 4.2",
    },
    {
      item: "Voltage",
      specification: "DC 4.5~5.5V via USB port",
      item1: "Battery",
      specification1: "3.7V, 4000mAh",
    },
  ];
  return (
    <Box className="v10p">
      <Box className="v10p_info d-flex align-items-center">
        <Box>
          <h1 className="v10p_info-header">{t("products.v10p.header")}</h1>
          <p className="v10p_info-title">{t("products.v10p.title")}</p>
        </Box>
        <img src={fullFace} alt="" className="v10p_info-img" />
      </Box>
      <InfoDetail
        classHeader="v10p"
        showImg={v10pImg}
        infoDetail={infoDetail}
      />
      <Box className="v10p_features">
        <Box className="v10p_features-comp">
          <img src={howtouse} alt="" />
          <Box className="v10p_features-comp-info">
            <h4>{t("products.v10p.features.0.header")}</h4>
            <p>{t("products.v10p.features.0.body")}</p>
          </Box>
        </Box>
        <Box className="v10p_features-comp">
          <Box className="v10p_features-comp-info">
            <h4>{t("products.v10p.features.1.header")}</h4>
            <p>{t("products.v10p.features.1.body")}</p>
            <p>{t("products.v10p.features.1.body1")}</p>
          </Box>
          <img src={v10p_1} alt="" />
        </Box>
        <Box className="v10p_features-comp">
          <img src={v10p_2} alt="" />
          <Box className="v10p_features-comp-info">
            <h4>{t("products.v10p.features.2.header")}</h4>
            <p>{t("products.v10p.features.2.body")}</p>
          </Box>
        </Box>
        <Box className="v10p_features-comp">
          <Box className="v10p_features-comp-info">
            <h4>{t("products.v10p.features.3.header")}</h4>
            <p>{t("products.v10p.features.3.body")}</p>
          </Box>
          <img src={memoryCard} alt="" />
        </Box>
        <Box className="v10p_features-comp">
          <img src={background_4g} alt="" />
          <Box className="v10p_features-comp-info">
            <h4>{t("products.v10p.features.4.header")}</h4>
            <p>{t("products.v10p.features.4.body")}</p>
          </Box>
        </Box>
      </Box>
      <TechnicalSpecifications
        classHeader="v10p"
        specification={specification}
      />
      <OrtherProduct classHeader="v10p" />
    </Box>
  );
};
