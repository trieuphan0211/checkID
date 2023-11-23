import { Box } from "@mui/material";
import React from "react";
import {
  InfoDetail,
  OrtherProduct,
  TechnicalSpecifications,
} from "../../components/products";

import v11_fullFace from "../../assets/img/product/V11/fullFace.png";
import front_face from "../../assets/img/product/V11/front_face.png";
import behind_face from "../../assets/img/product/V11/behind_face.png";
import android from "../../assets/img/product/Android.png";
import fingerprint from "../../assets/img/product/Fingerprint.png";
import size from "../../assets/img/product/size.png";
import nfc from "../../assets/img/product/NFC.png";
import qrCode from "../../assets/img/product/QR-code.png";
import g4 from "../../assets/img/product/4G.png";
import bigBattery from "../../assets/img/product/BigBattery.png";
import telpo from "../../assets/img/product/V11/Telpo-TPS360.png";
import v11_2 from "../../assets/img/product/V11/v11_2.png";
import howtouse from "../../assets/img/product/howtouse.png";
import fingerPrint from "../../assets/img/product/V11/fingerprint.png";
import memoryCard from "../../assets/img/product/memoryCard.png";
import contactCard from "../../assets/img/product/V11/contact_card.png";
import background_4g from "../../assets/img/product/bg_4g.png";
import { useTranslation } from "react-i18next";

export const V11Product = () => {
  // set Title
  document.title = "V11 | CheckID";

  const { t } = useTranslation();
  const v11Img = [front_face, behind_face];
  const infoDetail = {
    header: "products.v11.infoDetail.header",
    model: "products.v11.infoDetail.model",
    description: "products.v11.infoDetail.description",
    function: [
      { name: "Android", image: android },
      { name: "Fingerprint", image: fingerprint },
      { name: "5-inch", image: size },
      { name: "NFC", image: nfc },
      { name: "QRcode", image: qrCode },
      { name: "4G", image: g4 },
      { name: "Big Battery", image: bigBattery },
    ],
  };
  const specification = [
    {
      item: "OS",
      specification: "Android 12 (GMS Available)",
      item1: "Communications",
      specification1: "4G/3G/2G/WLAN/Bluetooth/GNSS",
    },
    {
      item: "Processor",
      specification: "Quad-Core ARM Cortex A53",
      item1: "Earphone",
      specification1: "Type-C port convert to earphone",
    },
    {
      item: "Memory",
      specification: "RAM 3GB + ROM 32GB",
      item1: "Speaker",
      specification1: "Support",
    },
    {
      item: "Display",
      specification: "LCM 5 inch, 1280×720, IPS, Multi-Touch Panel",
      item1: "Material",
      specification1: "Rugged and ABS+PC",
    },
    {
      item: "Host Interface",
      specification: "USB Type-C",
      item1: "UHF Module",
      specification1: "Optional",
    },
    {
      item: "Contactless Card Reader (Optional)",
      specification:
        "ISO 7816-3 ID-1 (Full-size),ISO / IEC7816, T=0 and T=1 Protocol",
      item1: "Battery",
      specification1:
        "5,000mAh by default (up to 7500mAh)Support PD/n ChargingCertification: 38.3 report, CB, CE, FCC",
    },
    {
      item: "Fingerprint Module",
      specification:
        "Morpho CBM-V3 (by default)Compatible with:Futronic FS81, SecuGen U10, Suprema Slim2S, Aratek A600-M",
      item1: "NFC",
      specification1:
        "Clock Frequency: 13.56Mhz Smart /n Card Interface Speed: 106~848kbps /n Protocol: ISO/IEC 14443 A/BISO 15693, Mifare, FelicaNFC SDK by Android System (optional)",
    },
    {
      item: "Front Camera (Optional)",
      specification: "5MP, auto focus",
      item1: "Dimensions (mm)",
      specification1: "180X80X60mm (L×W×H)",
    },
    {
      item: "Rear Camera (Optional)",
      specification: "8MP Autofocus with Flash, optional 13MP",
      item1: "Barcode",
      specification1: "For both barcode and QR code",
    },
    {
      item: "4G",
      specification: "FDD-LTE B1 B3 B7 B8 B28TDD-LTE B38 B39 B40 B41B",
      item1: "Expansion Card",
      specification1: "Support up to 128GB Micro SD Card",
    },
  ];
  return (
    <Box className="v11">
      <Box className="v11_info d-flex align-items-center">
        <Box>
          <h1 className="v11_info-header">{t("products.v11.header")}</h1>
          <p className="v11_info-title">{t("products.v11.title")}</p>
        </Box>
        <img src={v11_fullFace} alt="" className="v11_info-img" />
      </Box>
      <InfoDetail classHeader="v11" showImg={v11Img} infoDetail={infoDetail} />
      <Box className="v11_open d-flex justify-content-center">
        <img src={telpo} alt="" />
      </Box>
      <Box className="v11_features">
        <Box className="v11_features-comp v11_features-comp-left">
          <Box className="v11_features-comp-info">
            <h4>{t("products.v11.features.0.header")}</h4>
            <p>{t("products.v11.features.0.body")}</p>
          </Box>
          <img src={v11_2} alt="" />
        </Box>
        <Box className="v11_features-comp">
          <img src={howtouse} alt="" />
          <Box className="v11_features-comp-info">
            <h4>{t("products.v11.features.1.header")}</h4>
            <p>{t("products.v11.features.1.body")}</p>
          </Box>
        </Box>
        <Box className="v11_features-comp v11_features-comp-left">
          <Box className="v11_features-comp-info">
            <h4>{t("products.v11.features.2.header")}</h4>
            <p>{t("products.v11.features.2.body")}</p>
            <p>{t("products.v11.features.2.body1")}</p>
            <ol>
              <li>{t("products.v11.features.2.ul.li1")}</li>
              <li>{t("products.v11.features.2.ul.li2")}</li>
              <li>{t("products.v11.features.2.ul.li3")}</li>
              <li>{t("products.v11.features.2.ul.li4")}</li>
              <li>{t("products.v11.features.2.ul.li5")}</li>
              <li>{t("products.v11.features.2.ul.li6")}</li>
            </ol>
          </Box>
          <img src={fingerPrint} alt="" />
        </Box>
        <Box className="v11_features-comp">
          <img src={memoryCard} alt="" />
          <Box className="v11_features-comp-info">
            <h4>{t("products.v11.features.3.header")}</h4>
            <p>{t("products.v11.features.3.body")}</p>
          </Box>
        </Box>
        <Box className="v11_features-comp v11_features-comp-left">
          <Box className="v11_features-comp-info">
            <h4>{t("products.v11.features.4.header")}</h4>
            <p>{t("products.v11.features.4.body")}</p>
            <p>{t("products.v11.features.4.body1")}</p>
          </Box>
          <img src={contactCard} alt="" />
        </Box>
        <Box className="v11_features-comp">
          <img src={background_4g} alt="" />
          <Box className="v11_features-comp-info">
            <h4>{t("products.v11.features.5.header")}</h4>
            <p>{t("products.v11.features.5.body")}</p>
          </Box>
        </Box>
      </Box>
      <TechnicalSpecifications
        classHeader="v11"
        specification={specification}
      />
      <OrtherProduct classHeader="v11" />
    </Box>
  );
};
