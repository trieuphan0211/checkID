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

export const R502_CLProduct = () => {
  // set Title
  document.title = "R502-CL | CheckID";
  const r502clImg = [front_face, behind_face];
  const infoDetail = {
    header: "CCID Smartcard Reader",
    model: "R502-CL",
    description:
      "R502-CL is a terminal interface device for smart card applications and system integrations. It can be widely used in industries or applications requiring electronic payment and authentication, especially suitable for the high security fields. It is an optimal solution for authentication, e-commerce, financial organizations, access control etc.",
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
          <h1 className="r502cl_info-header">
            CCID Smartcard Reader (R502-CL)
          </h1>
          <p className="r502cl_info-title">
            A combination of contactless and contact smart card reader
          </p>
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
            <h4>High security level hardware design</h4>
            <p>
              High security level chipset
              <br /> Built-in short-circuited / over-voltage protection
              <br /> Firmware encryption mechanism
              <br /> Encrypted firmware upgrade
            </p>
          </Box>
          <img src={r502cl_2} alt="" />
        </Box>
        <Box className="r502cl_features-comp">
          <img src={r502cl_3} alt="" />
          <Box className="r502cl_features-comp-info">
            <h4>Multifunctional composite product</h4>
            <p>
              Combined with contact and contactless function, in addition with 2
              extra SAM slots, Contactless Smart Card Reader could be used for
              both authentication and payment.
            </p>
          </Box>
        </Box>
        <Box className="r502cl_features-comp">
          <Box className="r502cl_features-comp-info">
            <h4>Major platform compatible</h4>
            <p>
              Smart Card Readers are compatible with mainstream operating system
              platforms: Windows, Linux, macOS, Unix, with full CCID support,
              Android with OTG. A true sense of driverless product.
            </p>
          </Box>
          <img src={r502cl_4} alt="" />
        </Box>
        <Box className="r502cl_features-comp">
          <img src={r502cl_5} alt="" />
          <Box className="r502cl_features-comp-info">
            <h4>Flexible customizations</h4>
            <p>
              We offer complete customization options for casing, packaging and
              related service to enable the ability of creating your very own
              Smart Card Reader.
            </p>
          </Box>
        </Box>
        <Box className="r502cl_features-comp">
          <Box className="r502cl_features-comp-info">
            <h4>Support all 13.56 MHz NFC Cards</h4>
            <p>
              ISO/IEC 7816-1, 2, 3, 4;ISO/IEC 14443 Type A and B
              <br />
              Mifare © 13.56 MHz ISO 14443A
              <br />
              Felica © protocol support
              <br />
              Compatible with ISO 15693 protocol
              <br />
              Compatible with ISO/IEC 18092 protocol
              <br />
              VHBR protocol support *(Optional).
            </p>
          </Box>
          <img src={r502cl_6} alt="" />
        </Box>
        <Box className="r502cl_features-comp">
          <img src={r502cl_7} alt="" />
          <Box className="r502cl_features-comp-info">
            <h4>Certifications</h4>
            <p>
              With these certifications, Smart Card Reader tops by both
              functionality and performance.
            </p>
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
