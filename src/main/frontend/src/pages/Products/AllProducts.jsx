import React, { useEffect, useState } from "react";

import v11 from "../../assets/img/product/v11.png";
import v20 from "../../assets/img/product/v20.png";
import checkid_sr from "../../assets/img/product/checkid-sr.png";
import r301_c11 from "../../assets/img/product/r301-c11.png";
import r502_cl from "../../assets/img/product/r502-cl.png";
import am_001 from "../../assets/img/product/am-001.png";
import v10p from "../../assets/img/product/v10p.png";
import checkid_et100 from "../../assets/img/product/et100.png";

import { Box, Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const context = "";

export const AllProducts = () => {
  // set Title
  document.title = "All Products | CheckID";

  const { t } = useTranslation();
  const allProducts = [
    {
      id: 1,
      name: "CheckID-ET100",
      img: checkid_et100,
      link: "/products/checkid-et100",
      description: "products.allProducts.items.et100",
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
      name: "BioR502-MRZ",
      img: am_001,
      link: "/products/BioR502-MRZ",
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
        <h4 className="allProducts_info-subheader">
          {t("products.allProducts.header")}
        </h4>
        <h1 className="allProducts_info-header">
          {t("products.allProducts.subheader")}
        </h1>
        <p className="allProducts_info-title">
          {t("products.allProducts.title")}
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
              <p>{t(item.description)}</p>
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
