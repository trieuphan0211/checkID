import React, { useEffect, useState } from "react";

import v11 from "../../assets/img/product/v11.png";
import v20 from "../../assets/img/product/v20.png";
import checkid_sr from "../../assets/img/product/checkid-sr.png";
import r301_c11 from "../../assets/img/product/r301-c11.png";
import r502_cl from "../../assets/img/product/r502-cl.png";
import am_001 from "../../assets/img/product/am-001.png";
import v10p from "../../assets/img/product/v10p.png";

import { Box, Pagination } from "@mui/material";
import { Link } from "react-router-dom";

const context = "";
const allProducts = [
  {
    id: 1,
    name: "V11",
    img: v11,
    link: "/products/v11",
    description: "Handheld Biometric ID Terminal",
  },
  {
    id: 2,
    name: "V20",
    img: v20,
    link: "/products/v20",
    description: "Biometric Tablet",
  },

  {
    id: 3,
    name: "CheckID-SR",
    img: checkid_sr,
    link: "/products/checkid-sr",

    description: "ID card reader/scanner",
  },
  {
    id: 4,
    name: "R301 C11",
    img: r301_c11,
    link: "/products/r301-c11",
    description: "CCID Smartcard Reader",
  },
  {
    id: 5,
    name: "R502-CL",
    img: r502_cl,
    link: "/products/r502-cl",
    description: "CCID Smartcard Reader",
  },
  {
    id: 6,
    name: "AM-001",
    img: am_001,
    link: "/products/am-001",
    description: "Altimeter for document/ID card",
  },
  {
    id: 7,
    name: "V10P",
    img: v10p,
    link: "/products/v10p",
    description: "Desktop Biometric ID Terminal",
  },
];

export const AllProducts = () => {
  // set Title
  document.title = "All Products | CheckID";
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const pageCount = Math.ceil(allProducts.length / 9);

  const [data, setData] = useState(allProducts.slice((page - 1) * 9, page * 9));
  useEffect(() => {
    setData(allProducts.slice((page - 1) * 9, page * 9));
  }, [page]);
  return (
    <Box className="allProducts">
      <Box className="allProducts_info d-flex flex-column align-items-center">
        <h4 className="allProducts_info-subheader">ALL Products</h4>
        <h1 className="allProducts_info-header">Identification Terminal</h1>
        <p className="allProducts_info-title">
          Fingerprint Scanner / NFC / 4G / Bluetooth / Wifi
        </p>
      </Box>
      <Box className="allProducts_item">
        {data.map((item) => (
          <Link
            to={`${context}${item?.link}`}
            className="allProducts_item-box"
            key={item.id}
          >
            <img src={item.img} alt="" />
            <Box className="allProducts_item-body">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </Box>
          </Link>
        ))}
      </Box>
      {pageCount > 1 && (
        <Pagination
          count={pageCount}
          page={page}
          sx={{
            mx: "auto",
            mb: "50px",
            "& .MuiPagination-ul": {
              justifyContent: "center",
            },
          }}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      )}
    </Box>
  );
};
