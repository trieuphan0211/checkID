import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import behind_face from "../../assets/img/product/AM_001/behind_face.png";
import front_face from "../../assets/img/product/AM_001/front_face.png";
import am001_fullFace from "../../assets/img/product/AM_001/fullFace.png";
import other_face from "../../assets/img/product/AM_001/orther_face.png";
import fingerprint from "../../assets/img/product/Fingerprint.png";
import nfc from "../../assets/img/product/NFC.png";
import RichPorts from "../../assets/img/product/RichPorts.png";
import SmartCard from "../../assets/img/product/SmartCard.png";
import camera from "../../assets/img/product/camera.png";
import mrz from "../../assets/img/product/mrz.png";
import {
  InfoDetail,
  OrtherProduct,
  TechnicalSpecifications,
} from "../../components/products";

export const AM001Product = () => {
  // set Title
  document.title = "BioR502-MRZ | CheckID";
  console.log(process.env.public_url);
  const { t } = useTranslation();
  const am001Img = [front_face, behind_face, other_face];
  const infoDetail = {
    header: "products.am001.infoDetail.header",
    model: "products.am001.infoDetail.model",
    description: "products.am001.infoDetail.description",
    function: [
      { name: "SmartCard", image: SmartCard },
      { name: "Rich Ports", image: RichPorts },
      { name: "NFC", image: nfc },
      { name: "Camera", image: camera },
      { name: "Fingerprint", image: fingerprint },
      { name: "MRZ  ", image: mrz },
    ],
  };
  const specification = [
    {
      item: "Interface",
      specification: "USB 2.0 CCID(also compiant with USB 1.1)",
      item1: "Type of object that can be photographed",
      specification1: "eID card, ePassport, contract, credential",
    },
    {
      item: "USB Port",
      specification: "USB Type C female on reader port",
      item1: "Meantime Between Failure(MTBF)",
      specification1: "500,000 hours",
    },
    {
      item: "Transmission Speed",
      specification: "12Mbps(USB 2.0 Full Speed)",
      item1: "Card Reader Standard",
      specification1:
        "ISO-7816 Class A, B, C ( 5V, 3V,1.8V) Standard/n ISO 14443 Standard, Felica Standard, Mifare © Standard/n EMV Level 1 Standard/n PC/SC Standard/n USB 2.0 Standard/n CCID Standard",
    },
    {
      item: "Dimension",
      specification: "341 * 309 * 400mm (L*W*H)",
      item1: "Warranty",
      specification1: "one year warranty",
    },
    {
      item: "SIM Card",
      specification: "2 SAM Slot",
      item1: "Shooting format",
      specification1: "A4,A5,A6, ID Card, ICAO ePassport, SIM card",
    },
    {
      item: "Hardware Security",
      specification:
        "Support Card short circuit protection /nBuild in short-circuited / over-voltage protection",
      item1: "Image format",
      specification1: "JPG, TIF, PNG, BMP, PDF",
    },
    {
      item: "ID1 Contact",
      specification:
        "Supported Card Types: 1.8V, 3V and 5V/nSmart Card Interface Speed: 10753~625kbps(when supported by card)/nSmart Card Interface Speed: 10753~625kbps(when supported by card)/nISO 7816-3 ID-1 (full-size)/nISO/IEC7816, T=0 and T=1 protocol, Class A, B, C cards",
      item1: "Physical Security",
      specification1:
        "Short circuit and thermal protection/over-voltage protection /n High security level chipset /n Electrostatic prevention /n Firmware encryption mechanism /n Firmware upgradability in encryption /n Firmware cannot be read out. Anti-reverse analysis",
    },
    {
      item: "Contactless",
      specification:
        "Build-in antenna /n 106kbps-424kbps /n Smart Card Clock Frequency: 13.56MHzISO 14443 Type A and Type B, Mifare© Protocol, Felica® protocol",
      item1: "API Standard",
      specification1: "PC/SC Lite/WINSCARD API",
    },
    {
      item: "Fingerprint Module Model Name",
      specification: "SupreMa BM-Slim2S",
      item1: "DPI/Resolution",
      specification1: "500 DPI",
    },
    {
      item: "Biometric template Standards",
      specification: "Suprema, ISO19794-2, ANSI 378",
      item1: "Light Source",
      specification1: "Red LED",
    },
  ];
  return (
    <Box className="am001">
      <Box className="am001_info d-flex align-items-center">
        <Box>
          <h1 className="am001_info-header">{t("products.am001.header")}</h1>
          <p className="am001_info-title">{t("products.am001.title")}</p>
        </Box>
        <img src={am001_fullFace} alt="" className="am001_info-img" />
      </Box>
      <InfoDetail
        classHeader="am001"
        showImg={am001Img}
        infoDetail={infoDetail}
      />
      <TechnicalSpecifications
        classHeader="am001"
        specification={specification}
      />
      <OrtherProduct classHeader="am001" />
    </Box>
  );
};
