import { Box, Button } from "@mui/material";
import React from "react";

export const InfoDetail = ({ showImg, classHeader, infoDetail }) => {
  const [faceImg, setFaceImg] = React.useState(showImg[0]);
  return (
    <Box className={`${classHeader}_detail d-flex`}>
      <Box className={`${classHeader}_detail-img`}>
        <img
          className={`${classHeader}_detail-img-show`}
          src={faceImg}
          alt=""
        />
        <Box className={`${classHeader}_detail-img-list`}>
          {showImg?.map((img, index) => (
            <Box
              className={img === faceImg ? "active" : ""}
              onClick={() => setFaceImg(img)}
            >
              <img src={img} alt="" key={index} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={`${classHeader}_detail-info`}>
        <h4 className={`${classHeader}_detail-info-header`}>
          {infoDetail.header}
        </h4>
        <h5 className={`${classHeader}_detail-info-model`}>
          Model: {infoDetail.model}
        </h5>
        <p className={`${classHeader}_detail-info-description`}>
          {infoDetail.description.split("/n").map((item) => (
            <>
              {item}
              <br />
            </>
          ))}
        </p>
        <h5 className={`${classHeader}_detail-info-functionHeader`}>
          Function:
        </h5>
        <Box className={`${classHeader}_detail-info-function`}>
          {infoDetail.function.map((item, index) => (
            <Box
              key={index}
              className={`${classHeader}_detail-info-function-item`}
            >
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </Box>
          ))}
        </Box>
        <Button
          sx={{
            borderRadius: "29px",
            backgroundColor: "var(--primary-2)",
            padding: "21px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            lineHeight: "16px",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#0074ff",
            },
          }}
        >
          Download
        </Button>
      </Box>
    </Box>
  );
};
