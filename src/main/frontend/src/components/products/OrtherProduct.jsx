import { Box, Button } from "@mui/material";
import React from "react";
import { Slide } from "react-slideshow-image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useWindowSize } from "usehooks-ts";

import v20 from "../../assets/img/product/v20.png";
import r301_c11 from "../../assets/img/product/r301-c11.png";
import r502_cl from "../../assets/img/product/r502-cl.png";
import checkid_sr from "../../assets/img/product/checkid-sr_1.png";

export const OrtherProduct = ({ classHeader }) => {
  const { width, height } = useWindowSize();
  console.log(height);
  const [slideIndex, setSlideIndex] = React.useState(0);
  const product = [
    {
      img: v20,
      name: "V20",
      title: "Biometric Tablet",
    },
    {
      img: r301_c11,
      name: "R301 C11",
      title: "CCID Smartcard Reader",
    },
    {
      img: r502_cl,
      name: "R502-CL",
      title: "CCID Smartcard Reader",
    },
    {
      img: checkid_sr,
      name: "CheckID-SR",
      title: "ID card reader/scanner",
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
    slidesToShow: 4,
    onChange: (oldIndex, newIndex) => setSlideIndex(newIndex),
  };
  return (
    <Box className={`${classHeader}_ortherProduct`}>
      <h1 className={`${classHeader}_ortherProduct-header`}>
        Related Products
      </h1>
      <Slide {...properties}>
        {product.map((item, index) => (
          <div className="each-slide-effect">
            <Box className={`${classHeader}_ortherProduct-item`}>
              <img src={item.img} alt="" />
              <Box>
                <h6>{item.name}</h6>
                <p>{item.title}</p>
              </Box>
            </Box>
          </div>
        ))}
      </Slide>
    </Box>
  );
};
