import { Box } from "@mui/material";
import React from "react";
import {
  InfoDetail,
  OrtherProduct,
  TechnicalSpecifications,
} from "../../components/products";

import r502cl_fullFace from "../../assets/img/product/R502_CL/fullFace.png";
import front_face from "../../assets/img/product/R502_CL/front_face.png";
import behind_face from "../../assets/img/product/R502_CL/behind_face.png";
import temperature from "../../assets/img/product/temperature.png";
import SmartCard from "../../assets/img/product/SmartCard.png";
import RichPorts from "../../assets/img/product/RichPorts.png";
import nfc from "../../assets/img/product/NFC.png";
import r502cl_2 from "../../assets/img/product/security_chip.png";
import r502cl_3 from "../../assets/img/product/R502_CL/r502cl_3.png";
import r502cl_4 from "../../assets/img/product/platform.png";
import r502cl_5 from "../../assets/img/product/R502_CL/r502cl_5.png";
import r502cl_6 from "../../assets/img/product/R502_CL/r502cl_6.png";
import r502cl_7 from "../../assets/img/product/R502_CL/r502cl_7.png";
import { useTranslation } from "react-i18next";

export const R502CLProduct = () => {
  // set Title
  document.title = "R502-CL | CheckID";

  const { t } = useTranslation();
  const r502clImg = [front_face, behind_face];
  const infoDetail = {
    header: "products.r502cl.infoDetail.header",
    model: "products.r502cl.infoDetail.model",
    description: "products.r502cl.infoDetail.description",
    function: [
      { name: "Temperature", image: temperature },
      { name: "SmartCard", image: SmartCard },
      { name: "Rich Ports", image: RichPorts },
      { name: "NFC", image: nfc },
    ],
  };
  const specification = [
    {
      item: "Host Interface",
      specification: "USB 2.0 CCID (also complaint with USB 1.1)",
      item1: "Supported OS",
      specification1: "Win2000+ / Linux / macOS X / UNIX / Android(OTG)",
    },
    {
      item: "Transmission Speed",
      specification: "12Mbps (USB 2.0 Full Speed)",
      item1: "Earphone",
      specification1: "Type-C port convert to earphone",
    },
    {
      item: "Contact",
      specification:
        "Supported Card Types: 1.8V, 3V and 5V /n Smart Card Interface Speed: 10753~625kbps /n Smart Card Clock Frequency: 4M/n ISO 7816-3 ID-1 (full-size)/n ISO / IEC7816, T=0 and T=1 protocol, Class A, B, C cards",
      item1: "Standard",
      specification1:
        "ISO 14443 Standard /n Felica® Standard /n Mifare© Standard /n EMV Level 1 Standard /n PC / SC Standard /n USB 2.0 Standard /n CCID Standard",
    },
    {
      item: "Power to Smart Card",
      specification: "60mA",
      item1: "Certification",
      specification1: "CE / FCC / RoHS / EMV Level 1 / LTIC / BSMI / UL",
    },
    {
      item: "Custom Items",
      specification: "OEM logo, packaging, color and firmware",
      item1: "API Standard",
      specification1: "PC / SC Lite / WINSCARD API / CT-API",
    },
    {
      item: "Size",
      specification: "120 × 80 × 25.6 mm",
      item1: "Firmware Security",
      specification1:
        "Firmware encryption mechanism/n  Firmware upgradability in encryption/n  Firmware cannot be read out/n Anti-reverse analysis",
    },
    {
      item: "Working temperature",
      specification: "0°C ~ 60 °C",
      item1: "Hardware Security",
      specification1:
        "Short circuit protection/n Thermal protection/n Over-voltage protection/n  High security level chipset/n  Electrostatic prevention",
    },
    {
      item: "Storage temperature",
      specification: "-20°C ~ 85°C",
      item1: "Meantime Between Failure (MTBF)",
      specification1: "500,000 hours",
    },
    {
      item: "Working current",
      specification: "170mA without any card, 230mA with contactless card",
      item1: "Warranty",
      specification1: "Two-year warranty",
    },
    {
      item: "Power to Smart Card",
      specification: "60mA",
      item1: "Power supply",
      specification1: "USB port 5V DC",
    },
  ];
  return (
    <Box className="r502cl">
      <Box className="r502cl_info d-flex align-items-center">
        <Box>
          <h1 className="r502cl_info-header">{t("products.r502cl.header")}</h1>
          <p className="r502cl_info-title">{t("products.r502cl.title")}</p>
        </Box>
        <img src={r502cl_fullFace} alt="" className="r502cl_info-img" />
      </Box>
      <InfoDetail
        classHeader="r502cl"
        showImg={r502clImg}
        infoDetail={infoDetail}
      />
      <Box className="r502cl_features">
        <Box className="r502cl_features-comp">
          <Box className="r502cl_features-comp-info">
            <h4>{t("products.r502cl.features.0.header")}</h4>
            <p>
              {t("products.r502cl.features.0.body")
                .split("/n")
                .map((item) => (
                  <>
                    {item}
                    <br />
                  </>
                ))}
            </p>
          </Box>
          <img src={r502cl_2} alt="" />
        </Box>
        <Box className="r502cl_features-comp">
          <img src={r502cl_3} alt="" />
          <Box className="r502cl_features-comp-info">
            <h4>{t("products.r502cl.features.1.header")}</h4>
            <p>{t("products.r502cl.features.1.body")}</p>
          </Box>
        </Box>
        <Box className="r502cl_features-comp">
          <Box className="r502cl_features-comp-info">
            <h4>{t("products.r502cl.features.2.header")}</h4>
            <p>{t("products.r502cl.features.2.body")}</p>
          </Box>
          <img src={r502cl_4} alt="" />
        </Box>
        <Box className="r502cl_features-comp">
          <img src={r502cl_5} alt="" />
          <Box className="r502cl_features-comp-info">
            <h4>{t("products.r502cl.features.3.header")}</h4>
            <p>{t("products.r502cl.features.3.body")}</p>
          </Box>
        </Box>
        <Box className="r502cl_features-comp">
          <Box className="r502cl_features-comp-info">
            <h4>{t("products.r502cl.features.4.header")}</h4>
            <p>
              {t("products.r502cl.features.4.body")
                .split("/n")
                .map((item) => (
                  <>
                    {item}
                    <br />
                  </>
                ))}
            </p>
          </Box>
          <img src={r502cl_6} alt="" />
        </Box>
        <Box className="r502cl_features-comp">
          <img src={r502cl_7} alt="" />
          <Box className="r502cl_features-comp-info">
            <h4>{t("products.r502cl.features.5.header")}</h4>
            <p>{t("products.r502cl.features.5.body")}</p>
          </Box>
        </Box>
      </Box>
      <TechnicalSpecifications
        classHeader="r502cl"
        specification={specification}
      />
      <OrtherProduct classHeader="r502cl" />
    </Box>
  );
};
