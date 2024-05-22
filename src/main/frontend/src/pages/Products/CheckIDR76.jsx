import Box from "@mui/material/Box";
import React from "react";
import { useTranslation } from "react-i18next";
import android from "../../assets/img/product/Android.png";
import camera from "../../assets/img/product/camera.png";
import front_face from "../../assets/img/product/checkid-r76.png";
import nfc from "../../assets/img/product/NFC.png";
import size from "../../assets/img/product/size.png";
import qrCode from "../../assets/img/product/QR-code.png";
import RichPorts from "../../assets/img/product/RichPorts.png";
import {
  InfoDetail,
  OrtherProduct,
  TechnicalSpecifications,
} from "../../components/products";

export const CheckIDR76 = () => {
  document.title = "CheckID-R76 | CheckID";
  console.log(process.env.public_url);
  const { t } = useTranslation();
  const checkidR76Img = [front_face];
  const infoDetail = {
    header: "products.checkidR76.infoDetail.header",
    model: "products.checkidR76.infoDetail.model",
    description: "products.checkidR76.infoDetail.description",
    function: [
      { name: "Android", image: android },
      { name: "USB interface", image: RichPorts },
      { name: "NFC", image: nfc },
      { name: "Camera", image: camera },
      { name: "15.6 inch", image: size },
      { name: "QRcode", image: qrCode },
    ],
  };
  const specification = [
    {
      item: "IPC",
      specification:
        "Processor: RK3568 quad-core 2.0 GHz/n Memory: Sticker 2G memory, 32G storage/n Interface: 4 RS232,6 built-in USB,1, standard USB3.0,1 Type A download port,/n LVDS, HDMI interface, Support WIFI, 4G functions,/n DC12V power supply.  ",
    },
    {
      item: "DISPLAY SCREEN",
      specification:
        "Screen size: 15.6 inch LED /n Number of pixels: 1920×1080/n Brightness: 250 cd/m2 /n Display ratio: 16:10  ",
    },
    {
      item: "CAPACITIVE TOUCHSCREEN ",
      specification:
        "Size:15.6 inches /n Communication interface type USB /n Multi points touch /n Minimum touch object diameter > 3mm  ",
    },
    {
      item: "BINOCULAR CAMERA  ",
      specification:
        "TTL interface /n support 2D code: PDF417, QR Code, Data Matrix, Han Xin Code,GM code /n Aztec Code, Micro QR Code,etc /n Support 1D code: Code128， Code39， EAN8， EAN13， cross 25 code,etc  ",
    },
    {
      item: "PANEL PRINTER ",
      specification:
        "USB interface, DC12V, paper width 58mm, paper roll diameter 50mm, half cut, Support paper will function, white, with lock, support text, graphics, bar code printing  ",
    },
    {
      item: "EPP  ",
      specification:
        "Standard USB interface, with waterproof, dustproof, riot and leakage prevention, single DES, double DES, 3x DES algorithm, unpacking self-destruct program  ",
    },
    {
      item: "ID/PASSPORT READER  ",
      specification: "Support ID card and passport scan, USB interface. ",
    },
    {
      item: "OPERATING SYSTEM  ",
      specification: "Android 11  ",
    },
  ];
  return (
    <Box className="checkidR76">
      <Box className="checkidR76_info d-flex align-items-center">
        <Box>
          <h1 className="checkidR76_info-header">
            {t("products.checkidR76.header")}
          </h1>
          {/* <p className="checkidR76_info-title">{t("products.checkidR76.title")}</p> */}
        </Box>
        <img src={front_face} alt="" className="checkidR76_info-img" />
      </Box>
      <InfoDetail
        classHeader="checkidR76"
        showImg={checkidR76Img}
        infoDetail={infoDetail}
      />
      <TechnicalSpecifications
        classHeader="checkidR76"
        specification={specification}
        type="type1"
      />
      <OrtherProduct classHeader="checkidR76" />
    </Box>
  );
};
