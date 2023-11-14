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
import howtouse from "../../assets/img/product/V11/howtouse.png";
import fingerPrint from "../../assets/img/product/V11/fingerprint.png";
import memoryCard from "../../assets/img/product/V11/memoryCard.png";
import contactCard from "../../assets/img/product/V11/contact_card.png";
import background_4g from "../../assets/img/product/V11/4g.png";

export const V11Product = () => {
  // set Title
  document.title = "V11 | CheckID";
  const v11Img = [front_face, behind_face];
  const infoDetail = {
    header: "Handheld Biometric ID Terminal",
    model: "V11",
    description:
      "V11 is a smart Android mobile terminal, featuring a biometric fingerprint scanner that offers accurate identification. Being the most stable biometric characteristics, fingerprint authentication can be used to prevent unauthorized physical access to the school, office, laboratory, warehouse, etc.",
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
        "5,000mAh by default (up to 7500mAh)Support PD ChargingCertification: 38.3 report, CB, CE, FCC",
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
          <h1 className="v11_info-header">
            Handheld Biometric ID Terminal (V11)
          </h1>
          <p className="v11_info-title">
            Pogo PIN supported Extensible Biometric Handheld Terminal
          </p>
        </Box>
        <img src={v11_fullFace} alt="" className="v11_info-img" />
      </Box>
      <InfoDetail classHeader="v11" showImg={v11Img} infoDetail={infoDetail} />
      <Box className="v11_open d-flex justify-content-center">
        <img src={telpo} alt="" />
      </Box>
      <Box className="v11_features">
        <Box className="v11_features-comp">
          <Box className="v11_features-comp-info">
            <h4>More Scalabilities, More Possibilities</h4>
            <p>
              More possibilities and functions are available with pogo PIN, such
              as Printer module, UHF module, etc.
            </p>
          </Box>
          <img src={v11_2} alt="" />
        </Box>
        <Box className="v11_features-comp">
          <img src={howtouse} alt="" />
          <Box className="v11_features-comp-info">
            <h4>How to Use</h4>
            <p>
              Supporting fingerprint verification, NFC card reading, contact
              card reading, iris recognition, MRZ Passport reading, OCR, and
              barcode scanning
            </p>
          </Box>
        </Box>
        <Box className="v11_features-comp">
          <Box className="v11_features-comp-info">
            <h4>Strong Fingerprint Authentication</h4>
            <p>
              Live finger detection technology, high perform fingerprint sensor
              guarantees accurate and effective ID verification.
            </p>
            <p>
              Multi-vendor fingerprint sensors are supported: Built-in FBI PIV &
              FBI Mobile ID FAP30 / FAP20 / FAP10 certified single flat finger
              scanner including:
            </p>
            <ol>
              <li>IB LES Danno (TFT camera)</li>
              <li>Suprema: BM-Slim2, BM-Slim2S, BM-Slim3S</li>
              <li>Morpho CBM-E3</li>
              <li>Futronic: FS81H, FS89H</li>
              <li>Aratek: A600-M</li>
              <li>SecuGen U10</li>
            </ol>
          </Box>
          <img src={fingerPrint} alt="" />
        </Box>
        <Box className="v11_features-comp">
          <img src={memoryCard} alt="" />
          <Box className="v11_features-comp-info">
            <h4>Large Memory</h4>
            <p>3GB RAM+32GB ROM, up to 128GB Micro SD card supported</p>
          </Box>
        </Box>
        <Box className="v11_features-comp">
          <Box className="v11_features-comp-info">
            <h4>For Both Contact and Contactless Cards</h4>
            <p>
              Contact: Support ID-1 size smart card, such as: ID card, chip
              embedded NFC card.
            </p>
            <p>
              Contactless (NFC): ISO/IEC 14443 A/B, ISO/IEC 7816, etc. support
              original Android NFC API.
            </p>
          </Box>
          <img src={contactCard} alt="" />
        </Box>
        <Box className="v11_features-comp">
          <img src={background_4g} alt="" />
          <Box className="v11_features-comp-info">
            <h4>Always Connected</h4>
            <p>
              4G/3G, Wi-Fi, Bluetooth and USB Type-C supported guarantee the
              device can be connected anywhere with smooth data transmission
            </p>
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
