import React from "react";
import { useTranslation } from "react-i18next";

import SmartCard from "../../assets/img/product/SmartCard.png";
import RichPorts from "../../assets/img/product/RichPorts.png";
import nfc from "../../assets/img/product/NFC.png";
import mrz from "../../assets/img/product/mrz.png";
import fingerprint from "../../assets/img/product/Fingerprint.png";
import camera from "../../assets/img/product/camera.png";
import et100_fullFace from "../../assets/img/product/CheckID_ET100/fullFace.png";
import img1 from "../../assets/img/product/CheckID_ET100/et100_1.png";
import img2 from "../../assets/img/product/CheckID_ET100/et100_2.png";
import img3 from "../../assets/img/product/CheckID_ET100/et100_3.png";
import img4 from "../../assets/img/product/CheckID_ET100/et100_4.png";
import img5 from "../../assets/img/product/CheckID_ET100/et100_5.png";
import {
  InfoDetail,
  OrtherProduct,
  TechnicalSpecifications,
} from "../../components/products";
import { Box } from "@mui/material";

export const CheckIDET100 = () => {
  // set Title
  document.title = "CheckID-ET100 | CheckID";

  const { t } = useTranslation();

  const et100Img = [img1, img2, img3, img4, img5];
  const infoDetail = {
    header: "products.et100.infoDetail.header",
    model: "products.et100.infoDetail.model",
    description: "products.et100.infoDetail.description",
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
      item: "Dimension (L x W x H)",
      specification: "273 x 155 x 20 mm",
      item1: "Band",
      specification1:
        "GSM band 3/8, /n WCDMA band 1/8, /n TD-SCDMA band 34/39, /n CDMA BC0, /n TDD-LTE band 34/39/40/41 (38)  /n FDD LTE band 1/3/5/8",
    },
    {
      item: "Weight",
      specification: "2.5 kg",
      item1: "WIFI",
      specification1: "IEEE 802.11 a/b/g/n/ac  /n 2.4G & 5 /n GAP",
    },
    {
      item: "Working Temprature",
      specification: "-10° - 50° C (14° - 122° F)",
      item1: "Card Slot",
      specification1: "Nano SIM x 1 /n PSAM x 1 /n SD x 1",
    },
    {
      item: "Storage Temprature",
      specification: "-20° - 60° C (-4° - 140° F)",
      item1: "Bluetooth",
      specification1: "BLE4.2",
    },
    {
      item: "Relative Humidity",
      specification: " 10% - 95% noncondensing",
      item1: "Ethernet",
      specification1: "10/100M self-adaptive",
    },
    {
      item: "Operation System",
      specification: " Android 9+, support remote upgrade",
      item1: "MRZ Reader",
      specification1: "Yes",
    },
    {
      item: "Processor ",
      specification: "8-Core ARM Cortex-A53 2.0G",
      item1: "Contactless Reader",
      specification1: "ISO 14443 Type-A/B, Mifare",
    },
    {
      item: "RAM",
      specification: "2GB /n 4GB",
      item1: "Printer",
      specification1: "58mm",
    },
    {
      item: "ROM",
      specification: "16GB /n 32GB /n 64GB",
      item1: "USB",
      specification1: "USB 2.0 x 2 /n USB HID x 1 /n Micro-USB x 1",
    },
    {
      item: "Resolution ",
      specification: "1280 x 800",
      item1: "RJ45",
      specification1: "Yes",
    },
    {
      item: "Background Light ",
      specification: "Size 10.1 inch LCD",
      item1: "RJ11 (RS232)",
      specification1: "Yes",
    },
    {
      item: "Screen",
      specification: "Adjustable",
      item1: "RJ11 (Cashbox)",
      specification1: "Yes",
    },
    {
      item: "Touch",
      specification: "Yes",
      item1: "Power Port Yes",
      specification1: "Yes",
    },
    {
      item: "Camera",
      specification: "5M Pixel /n Binocular Camera support liveness detection",
      item1: "Input",
      specification1: "100V-240V AC50/60HZ 1.0A",
    },
    {
      item: "Button",
      specification: "Power Button x 1 /n Configurable Button x 2",
      item1: "Output ",
      specification1: "12/3A DC",
    },
    {
      item: "Light",
      specification: "Lights for status indication",
      item1: "Certification",
      specification1: "CE/FCC",
    },
    {
      item: "Speaker",
      specification: "Yes",
      item1: "Location",
      specification1: "GPS",
    },
    {
      item: "MIC",
      specification: "Yes",
      item1: "Video",
      specification1: "1080p HD video playing /n 720p HD video recording",
    },
  ];
  return (
    <Box className="et100">
      <Box className="et100_info d-flex align-items-center">
        <Box>
          <h1 className="et100_info-header">{t("products.et100.header")}</h1>
          <p className="et100_info-title">{t("products.et100.title")}</p>
        </Box>
        <img src={et100_fullFace} alt="" className="et100_info-img" />
      </Box>
      <InfoDetail
        classHeader="et100"
        showImg={et100Img}
        infoDetail={infoDetail}
      />
      <TechnicalSpecifications
        classHeader="et100"
        specification={specification}
      />
      <OrtherProduct classHeader="et100" />
    </Box>
  );
};
