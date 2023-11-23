import React from "react";

import r301c11_fullFace from "../../assets/img/product/R301_C11/fullFace.png";
import front_face from "../../assets/img/product/R301_C11/front_face.png";
import behind_face from "../../assets/img/product/R301_C11/behind_face.png";
import SmartCard from "../../assets/img/product/SmartCard.png";
import RichPorts from "../../assets/img/product/RichPorts.png";
import nfc from "../../assets/img/product/NFC.png";
import { Box } from "@mui/material";
import {
  InfoDetail,
  OrtherProduct,
  TechnicalSpecifications,
} from "../../components/products";
import r301c11_2 from "../../assets/img/product/security_chip.png";
import r301c11_3 from "../../assets/img/product/R301_C11/r301c11_3.png";
import r301c11_4 from "../../assets/img/product/platform.png";
import r301c11_5 from "../../assets/img/product/R301_C11/r301c11_5.png";
import r301c11_6 from "../../assets/img/product/R301_C11/r301c11_6.png";
import r301c11_7 from "../../assets/img/product/R301_C11/r301c11_7.png";
import { useTranslation } from "react-i18next";

export const R301C11Product = () => {
  // set Title
  document.title = "R301-C11 | CheckID";

  const { t } = useTranslation();
  const r301c11Img = [front_face, behind_face];
  const infoDetail = {
    header: "products.r301c11.infoDetail.header",
    model: "products.r301c11.infoDetail.model",
    description: "products.r301c11.infoDetail.description",
    function: [
      { name: "SmartCard", image: SmartCard },
      { name: "Rich Ports", image: RichPorts },
      { name: "NFC", image: nfc },
    ],
  };
  const specification = [
    {
      item: "Interface",
      specification: "USB 2.0 Type A or Type C interface (12Mbps)",
      item1: "Working Temperature",
      specification1: "0°C ~ 60 °C",
    },
    {
      item: "Power Supply",
      specification: "USB port 3 ~ 5V DC",
      item1: "Storage Temperature",
      specification1: "-20°C ~ 85°C",
    },
    {
      item: "CPU Card",
      specification:
        "ISO/IEC7816, T=0 and T=1 protocol, Class A, B, C cards /n Data transfer speed: 13440 ~ 625kbps /n Power supply: 1.8V, 3V and 5V /n Frequency of card: 5MHz ~ 12MHz /n Card size: ID1",
      item1: "Meantime Between Failure (MTBF)",
      specification1: "500,000 hours",
    },
    {
      item: "Working Current",
      specification: "≤ 12mA without card plugged < 50mA with card plugged",
      item1: "Connector Cable",
      specification1: '150cm (59.1")',
    },
    {
      item: "Card Slot",
      specification: "ISO7816-3 standard slot >300,000 times plug/unplug",
      item1: "Material",
      specification1: "ABS+PC",
    },
    {
      item: "Hardware Security",
      specification:
        "Support Card short circuit protection /n Build in short-circuited / over-voltage protection",
      item1: "Color",
      specification1: "Black",
    },
    {
      item: "Supported OS",
      specification:
        "Windows 2000 / XP / Server 2003 / Vista / Server 2008 //n Server 2008 R2 / Server 2012 / Server 2012 R2 / 7 / 8 / /n8.1 / 10, Linux, macOS, Solaris, Android 5.0+ (OTG)",
      item1: "Size",
      specification1: "67 × 57.5 × 12.5 mm",
    },
    {
      item: "Certification",
      specification:
        "ISO9001 / ISO14001 / CE / FCC / RoHS / EMV Level 1 / ICP/n-Brasil / Microsoft WHQL, EN60950 / IEC60950, WEEE,/n REACH",
      item1: "Card Clock Frequency",
      specification1: "5MHz ~ 12MHz",
    },
    {
      item: "Firmware",
      specification: "OEM firmware",
      item1: "Warranty",
      specification1: "Two-year warranty",
    },
    {
      item: "Humidity",
      specification: "≤90% (non-condensed)",
      item1: "Transmission Speed",
      specification1: "50g",
    },
  ];
  return (
    <Box className="r301c11">
      <Box className="r301c11_info d-flex align-items-center">
        <Box>
          <h1 className="r301c11_info-header">
            {t("products.r301c11.header")}
          </h1>
          <p className="r301c11_info-title">{t("products.r301c11.title")}</p>
        </Box>
        <img src={r301c11_fullFace} alt="" className="r301c11_info-img" />
      </Box>
      <InfoDetail
        classHeader="r301c11"
        showImg={r301c11Img}
        infoDetail={infoDetail}
      />
      <Box className="r301c11_features">
        <Box className="r301c11_features-comp">
          <Box className="r301c11_features-comp-info">
            <h4>{t("products.r301c11.features.0.header")}</h4>
            <p>
              {t("products.r301c11.features.0.body")
                .split("/n")
                .map((item) => (
                  <>
                    {item}
                    <br />
                  </>
                ))}
            </p>
          </Box>
          <img src={r301c11_2} alt="" />
        </Box>
        <Box className="r301c11_features-comp">
          <img src={r301c11_3} alt="" />
          <Box className="r301c11_features-comp-info">
            <h4>{t("products.r301c11.features.1.header")}</h4>
            <p>
              {t("products.r301c11.features.1.body")
                .split("/n")
                .map((item) => (
                  <>
                    {item}
                    <br />
                  </>
                ))}
            </p>
          </Box>
        </Box>
        <Box className="r301c11_features-comp">
          <Box className="r301c11_features-comp-info">
            <h4>{t("products.r301c11.features.2.header")}</h4>
            <p>{t("products.r301c11.features.2.body")}</p>
          </Box>
          <img src={r301c11_4} alt="" />
        </Box>
        <Box className="r301c11_features-comp">
          <img src={r301c11_5} alt="" />
          <Box className="r301c11_features-comp-info">
            <h4>{t("products.r301c11.features.3.header")}</h4>
            <p>{t("products.r301c11.features.3.body")}</p>
          </Box>
        </Box>
        <Box className="r301c11_features-comp">
          <Box className="r301c11_features-comp-info">
            <h4>{t("products.r301c11.features.4.header")}</h4>
            <p>
              {t("products.r301c11.features.4.body")
                .split("/n")
                .map((item) => (
                  <>
                    {item}
                    <br />
                  </>
                ))}
            </p>
          </Box>
          <img src={r301c11_6} alt="" />
        </Box>
        <Box className="r301c11_features-comp">
          <img src={r301c11_7} alt="" />
          <Box className="r301c11_features-comp-info">
            <h4>{t("products.r301c11.features.5.header")}</h4>
            <p>{t("products.r301c11.features.5.body")}</p>
          </Box>
        </Box>
      </Box>
      <TechnicalSpecifications
        classHeader="r301c11"
        specification={specification}
      />
      <OrtherProduct classHeader="r301c11" />
    </Box>
  );
};
