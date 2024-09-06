import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/img/product/CheckID_ET100/et100_1.png";
import img2 from "../../assets/img/product/CheckID_ET100/et100_2.png";
import img3 from "../../assets/img/product/CheckID_ET100/et100_3.png";
import img4 from "../../assets/img/product/CheckID_ET100/et100_4.png";
import img5 from "../../assets/img/product/CheckID_ET100/et100_5.png";
import et100_fullFace from "../../assets/img/product/CheckID_ET100/fullFace.png";
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
        "WCDMA band 1/8, /n TD-SCDMA band 34/39, CDMA BC0, /n TDD-LTE band 34/39/40/41 (38) /n FDD LTE band 1/3/5/8",
    },
    {
      item: "Weight",
      specification: "2.5 kg",
      item1: "WIFI",
      specification1: `IEEE 802.11 a/b/g//cbn/ac,2.4G & 5G,AP`,
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
      specification: "Support remote upgrade",
      item1: "MRZ Reader",
      specification1:
        "300dpi resolution, wide angle multiple spectral lights /n High-definition scan tube, high-definition image",
    },
    {
      item: "Processor ",
      specification: "8-Core ARM Cortex-A53 2.0G",
      item1: "NFC Interface",
      specification1:
        "Support all 13.56 MHz NFC functions /n Followed ISO/IEC 14443 Type A/B",
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
      item1: "Background Light",
      specification1: "Adjustable",
    },

    {
      item: "Screen Size",
      specification: "10.1 inch LCD",
      item1: "Touch",
      specification1: "Supported",
    },

    {
      item: "Camera",
      specification: "5.0M Pixels Monocular Camera",
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
      item: "Speaker",
      specification: "Supported",
      item1: "Location",
      specification1: "GPS",
    },
    {
      item: "MIC",
      specification: "Supported",
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
