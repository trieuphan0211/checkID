import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { Slide } from "react-slideshow-image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useWindowSize } from "usehooks-ts";
import { Link, useLocation } from "react-router-dom";

import v20 from "../../assets/img/product/v20.png";
import v11 from "../../assets/img/product/v11.png";
import r301_c11 from "../../assets/img/product/r301-c11.png";
import r502_cl from "../../assets/img/product/r502-cl.png";
import checkid_sr from "../../assets/img/product/checkid-sr_1.png";
import am_001 from "../../assets/img/product/am-001.png";
import v10p from "../../assets/img/product/v10p.png";
import { useTranslation } from "react-i18next";

export const OrtherProduct = ({ classHeader }) => {
  const { t } = useTranslation();
  const { width, height } = useWindowSize();
  console.log(height);
  const [showNumber, setShowNumber] = React.useState(4);
  const [currentProduct, setCurrentProduct] = React.useState(0);
  const path = useLocation();
  const context = "";
  useEffect(() => {
    const index = path.pathname.split("/")[2];

    if (index === "v11") {
      setCurrentProduct(0);
    } else if (index === "v20") {
      setCurrentProduct(1);
    } else if (index === "r301-c11") {
      setCurrentProduct(2);
    } else if (index === "r502-cl") {
      setCurrentProduct(3);
    } else if (index === "checkid-sr") {
      setCurrentProduct(4);
    } else if (index === "am-001") {
      setCurrentProduct(5);
    } else if (index === "v10p") {
      setCurrentProduct(6);
    }
  }, [path?.pathname]);
  useEffect(() => {
    if (width >= 1600) {
      setShowNumber(4);
    } else if (width >= 1200 && width < 1600) {
      setShowNumber(3);
    } else if (width >= 800 && width < 1200) {
      setShowNumber(2);
    } else {
      setShowNumber(1);
    }
  }, [width]);
  const product = [
    {
      id: 1,
      name: "V11",
      img: v11,
      link: "/products/v11",
      description: "products.allProducts.items.v11",
    },
    {
      id: 2,
      name: "V20",
      img: v20,
      link: "/products/v20",
      description: "products.allProducts.items.v20",
    },

    {
      id: 3,
      name: "CheckID-SR",
      img: checkid_sr,
      link: "/products/checkid-sr",
      description: "products.allProducts.items.checkidsr",
    },
    {
      id: 4,
      name: "R301 C11",
      img: r301_c11,
      link: "/products/r301-c11",
      description: "products.allProducts.items.r301c11",
    },
    {
      id: 5,
      name: "R502-CL",
      img: r502_cl,
      link: "/products/r502-cl",
      description: "products.allProducts.items.r502cl",
    },
    {
      id: 6,
      name: "AM-001",
      img: am_001,
      link: "/products/am-001",
      description: "products.allProducts.items.am001",
    },
    {
      id: 7,
      name: "V10P",
      img: v10p,
      link: "/products/v10p",
      description: "products.allProducts.items.v10p",
    },
  ];
  const properties = {
    prevArrow: (
      <Button
        sx={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginleft: "100px",
          backgroundColor: "#EDF0F2",
          "&:hover": {
            backgroundColor: "#eef1f4",
          },
        }}
      >
        <ArrowBackIosIcon
          sx={{
            fontSize: "30px",
            marginLeft: "12px",
            color: "#CCC",
          }}
        />
      </Button>
    ),
    nextArrow: (
      <Button
        sx={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginleft: "100px",
          backgroundColor: "#EDF0F2",
          "&:hover": {
            backgroundColor: "#eef1f4",
          },
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            fontSize: "30px",
            marginLeft: "12px",
            color: "#CCC",
          }}
        />
      </Button>
    ),
    autoplay: false,
    canSwipe: width > 768 ? false : true,
    arrows: width > 768 ? true : false,
    transitionDuration: 500,
    slidesToScroll: 1,
    slidesToShow: showNumber,
  };
  return (
    <Box className={`${classHeader}_ortherProduct`}>
      <h1 className={`${classHeader}_ortherProduct-header`}>
        {t("products.relatedProducts")}
      </h1>
      <Slide {...properties}>
        {product.map(
          (item, index) =>
            index !== currentProduct && (
              <div className="each-slide-effect">
                <Link
                  className={`${classHeader}_ortherProduct-item`}
                  to={context + item.link}
                >
                  <img src={item.img} alt="" />
                  <Box>
                    <h6>{item.name}</h6>
                    <p>{t(item.description)}</p>
                  </Box>
                </Link>
              </div>
            )
        )}
      </Slide>
    </Box>
  );
};
