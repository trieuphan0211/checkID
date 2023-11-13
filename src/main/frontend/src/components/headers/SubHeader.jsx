import React from "react";
import "../../assets/scss/Header.scss";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { useTranslation } from "react-i18next";

export const SubHeader = ({ bg }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="d-flex justify-content-center w-100">
      <div
        className="subHeader d-flex justify-content-between"
        style={
          bg === "blue"
            ? { backgroundColor: "var(--primary-1)", color: "#fff" }
            : {}
        }
        data-language={i18n.language}
      >
        <div className="subHeader_read d-flex align-items-center">
          <p className="subHeader_p-bold" style={{ padding: "0 6px 0 10px" }}>
            <FaInfoCircle />
            {t("header.subHeader.question")}
          </p>
          <p className="subHeader_p">
            {t("header.subHeader.readMore")}
            <BsChevronRight
              className="subHeader_icon-hover"
              style={{ fontSize: "10px" }}
            />
          </p>
        </div>
        <div className="subHeader_app d-flex align-items-center">
          <IoIosSearch style={{ fontSize: "24px" }} />
          <div className="d-flex align-items-center">
            <p className="subHeader_p">{t("header.subHeader.usingApp")}</p>
            <FaArrowRight className="subHeader_icon-hover" />
          </div>
        </div>
      </div>
    </div>
  );
};
