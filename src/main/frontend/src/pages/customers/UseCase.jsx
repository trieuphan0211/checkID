import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ReCAPTCHA from "react-google-recaptcha";
import { useWindowSize } from "usehooks-ts";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import rabobank from "../../assets/img/customer/rabobank.png";
import lawStore from "../../assets/img/customer/lawstore.png";
import aegon from "../../assets/img/customer/Aegon-logo.png";
import trustid from "../../assets/img/customer/trustid.png";
import moneyou from "../../assets/img/customer/Moneyou.png";
import leiden from "../../assets/img/customer/leiden.png";
import thirdfort from "../../assets/img/customer/thirdfort.png";
import agecy from "../../assets/img/customer/digst-uk.png";
import digidentity from "../../assets/img/customer/digidentity-logo.png";
import cbr from "../../assets/img/customer/cbr.png";
import asb from "../../assets/img/customer/asb.png";
import sk_id_solutions from "../../assets/img/customer/sk-id-solutions.png";
import acb from "../../assets/img/company/acb.png";
import eximbank from "../../assets/img/company/eximbank.png";
import pgbank from "../../assets/img/company/pgbank.png";
import ocb from "../../assets/img/company/ocb.png";
import techcombank from "../../assets/img/company/techcombank.png";
import fpt from "../../assets/img/company/fpt.png";
import viettel from "../../assets/img/company/viettel.png";
import vnpt from "../../assets/img/company/vnpt.png";
import vgca from "../../assets/img/company/vgca.png";
import fastca from "../../assets/img/company/fastca.png";
import winca from "../../assets/img/company/winca.png";
import cmcca from "../../assets/img/company/cmcca.png";
import easyca from "../../assets/img/company/easyca.png";
import ica from "../../assets/img/company/ica.png";
import bkavca from "../../assets/img/company/bkavca.png";
import hiloca from "../../assets/img/company/hiloca.png";
import trustca from "../../assets/img/company/trustca.png";
import misa from "../../assets/img/company/misa.png";
import newtel from "../../assets/img/company/newtel.png";
import martsign from "../../assets/img/company/martsign.png";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import { mailContact } from "../../services/RemoteIdentityService";

const names = [
  "usecaseStories.info.caseList.financialServices",
  "usecaseStories.info.caseList.onBoarding",
  "usecaseStories.info.caseList.remoteIdentityVerification",
  "usecaseStories.info.caseList.checkidSaas",
  "usecaseStories.info.caseList.digitalSigning",
  "usecaseStories.info.caseList.realEstate",
  "usecaseStories.info.caseList.checkidReady",
  "usecaseStories.info.caseList.government",
  "usecaseStories.info.caseList.faceToFaceVerification",
  "usecaseStories.info.caseList.borderControlPolice",
  "usecaseStories.info.caseList.checkidClient",
  "usecaseStories.info.caseList.travel",
  "usecaseStories.info.caseList.reVerification",
  "usecaseStories.info.caseList.hiring",
];

const items = [
  {
    img: rabobank,
    content: "usecaseStories.slider.0.content",
    name: "usecaseStories.slider.0.name",
    title: "Rabobank",
    link: "",
  },
  {
    img: lawStore,
    content: "usecaseStories.slider.1.content",
    name: "usecaseStories.slider.1.name",
    title: "the lawstore / livesign",
    link: "",
    scale: "1.8",
  },
  {
    img: leiden,
    content: "usecaseStories.slider.2.content",
    name: "usecaseStories.slider.2.name",
    title: "Leiden University",
    link: "",
    scale: "1.8",
  },
  {
    img: cbr,
    content: "usecaseStories.slider.3.content",
    name: "usecaseStories.slider.3.name",
    title: "CBR",
    link: "",
  },
  {
    img: asb,
    content: "usecaseStories.slider.4.content",
    name: "usecaseStories.slider.4.name",
    title: "ASB Bank",
    link: "",
  },
  {
    img: sk_id_solutions,
    content: "usecaseStories.slider.5.content",
    name: "usecaseStories.slider.5.name",
    title: "SK ID Solutions",
    link: "",
    scale: "1.8",
  },
  {
    img: digidentity,
    content: "usecaseStories.slider.6.content",
    name: "usecaseStories.slider.6.name",
    title: "Digidentity",
    link: "",
    scale: "1.8",
  },
  {
    img: aegon,
    content: "usecaseStories.slider.7.content",
    name: "usecaseStories.slider.7.name",
    title: "Aegon",
    link: "",
  },
  {
    img: agecy,
    content: "usecaseStories.slider.8.content",
    name: "usecaseStories.slider.8.name",
    title: "Agency for Digitisation Denmark",
    link: "",
    scale: "1.8",
  },
  {
    img: thirdfort,
    content: "usecaseStories.slider.9.content",
    name: "usecaseStories.slider.9.name",
    title: "Thirdfort",
    link: "",
  },
  {
    img: moneyou,
    content: "usecaseStories.slider.10.content",
    name: "usecaseStories.slider.10.name",
    title: "ABN AMRO | Moneyou",
    link: "",
  },
  {
    img: trustid,
    content: "usecaseStories.slider.11.content",
    name: "usecaseStories.slider.11.name",
    title: "TrustID",
    link: "",
  },
];

// Begin: Custom MUI
const TextFieldCustom = styled(TextField)({
  width: "100%",
  marginTop: "10px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff",
    borderRadius: "10px",
  },
  "&:hover .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  "& .MuiFormLabel-root": {
    color: "#fff",
    fontSize: "15px",
    fontWeight: "500",
    lineHeight: "26px",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
    paddingRight: "21px",
    fontSize: "15px",
  },
});
// End: Custom MUI

export const UseCase = () => {
  // set Title
  document.title = "Customer overview | CheckID";
  const { t, i18n } = useTranslation();

  const { width } = useWindowSize();

  // Begin: Select
  const [selectValue, setSelectValue] = React.useState(
    t("usecaseStories.info.filterByUsecase")
  );

  const handleChangeSelect = (event) => {
    console.log(event.target.value);
    setSelectValue(event.target.value);
  };
  // End: Select

  // Begin: capcha
  const [recaptcha, setRecaptcha] = React.useState(null);
  const onChange = (value) => {
    setRecaptcha(value);
  };
  // End: capcha

  // Begin: Get params
  const location = useLocation().search;
  const param = new URLSearchParams(location);
  // End: Get params
  // Begin: Set page
  const [data, setData] = React.useState([]);

  const [count, setCount] = React.useState(0);

  const caseParam = param.get("case");
  React.useEffect(() => {
    document
      .querySelector(".usecase .usecaseStories_quotes .indicators > img")
      ?.click();
    if (!caseParam) {
      setData(items);
      setCount(items.length);
      setPage(1);
    } else {
      switch (caseParam) {
        case "FinancialServices":
          setData([items[0], items[4], items[7], items[10]]);
          break;
        case "Onboarding":
          setData([
            items[0],
            items[2],
            items[4],
            items[8],
            items[10],
            items[11],
          ]);
          break;
        case "RemoteIdentityVerification":
          setData([
            items[4],
            items[0],
            items[1],
            items[2],
            items[5],
            items[6],
            items[7],
            items[8],
            items[9],
            items[10],
            items[11],
          ]);
          break;
        case "ReadIDSaaS":
          setData([items[4], items[0], items[1], items[5], items[6], items[8]]);
          break;
        case "DigitalSigning":
          setData([items[1], items[5]]);
          break;
        case "RealEstate":
          setData([items[1], items[9], items[10]]);
          break;
        case "ReadIDReady":
          setData([items[2], items[7], items[10], items[11]]);
          break;
        case "Government":
          setData([items[3], items[5], items[6], items[8], items[4]]);
          break;
        case "Face-to-faceVerification":
          setData([items[3]]);
          break;
        case "BorderControl/police":
          setData([items[3]]);
          break;
        case "ReadIDClient-only":
          setData([items[3]]);
          break;
        case "Travel":
          setData([]);
          break;
        case "Re-verification":
          setData([items[7]]);
          break;
        case "Hiring":
          setData([items[11]]);
          break;
        default:
          break;
      }
    }
  }, [caseParam]);
  React.useEffect(() => {
    if (caseParam) {
      switch (caseParam) {
        case "FinancialServices":
          setSelectValue(t("usecaseStories.info.caseList.financialServices"));
          break;
        case "Onboarding":
          setSelectValue(t("usecaseStories.info.caseList.onBoarding"));
          break;
        case "RemoteIdentityVerification":
          setSelectValue(
            t("usecaseStories.info.caseList.remoteIdentityVerification")
          );
          break;
        case "ReadIDSaaS":
          setSelectValue(t("usecaseStories.info.caseList.checkidSaas"));
          break;
        case "DigitalSigning":
          setSelectValue(t("usecaseStories.info.caseList.digitalSigning"));
          break;
        case "RealEstate":
          setSelectValue(t("usecaseStories.info.caseList.realEstate"));
          break;
        case "ReadIDReady":
          setSelectValue(t("usecaseStories.info.caseList.checkidReady"));
          break;
        case "Government":
          setSelectValue(t("usecaseStories.info.caseList.government"));
          break;
        case "Face-to-faceVerification":
          setSelectValue(
            t("usecaseStories.info.caseList.faceToFaceVerification")
          );
          break;
        case "BorderControl/police":
          setSelectValue(t("usecaseStories.info.caseList.borderControlPolice"));
          break;
        case "ReadIDClient-only":
          setSelectValue(t("usecaseStories.info.caseList.checkidClient"));
          break;
        case "Travel":
          setSelectValue(t("usecaseStories.info.caseList.travel"));
          break;
        case "Re-verification":
          setSelectValue(t("usecaseStories.info.caseList.reVerification"));
          break;
        case "Hiring":
          setSelectValue(t("usecaseStories.info.caseList.hiring"));
          break;
        default:
          break;
      }
    }
  }, []);
  React.useEffect(() => {
    setCount(Math.ceil(data.length / 5));
  }, [data]);
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = React.useState(1);
  const dataPage = data.slice(0 + (page - 1) * 5, 5 + (page - 1) * 5);
  const pageParam = param.get("quotes_page_num");
  React.useEffect(() => {
    if (pageParam) {
      setPage(parseInt(pageParam));
    } else {
      setPage(1);
    }
    document
      .querySelector(".usecase .usecaseStories_quotes .indicators > img")
      ?.click();
  }, [pageParam]);
  const handleChangePage = (event, value) => {
    setPage(value);
    if (searchParams.get("case")) {
      setSearchParams({
        case: caseParam,
        quotes_page_num: value,
      });
    } else {
      setSearchParams({ quotes_page_num: value });
    }
  };
  // End: Set page
  // Begin: set Case
  const handleChangeCase = (value) => {
    switch (value) {
      case 0:
        setSearchParams({});
        break;
      case 1:
        setSearchParams({ case: "FinancialServices" });
        break;
      case 2:
        setSearchParams({ case: "Onboarding" });
        break;
      case 3:
        setSearchParams({ case: "RemoteIdentityVerification" });
        break;
      case 4:
        setSearchParams({ case: "ReadIDSaaS" });
        break;
      case 5:
        setSearchParams({ case: "DigitalSigning" });
        break;
      case 6:
        setSearchParams({ case: "RealEstate" });
        break;
      case 7:
        setSearchParams({ case: "ReadIDReady" });
        break;
      case 8:
        setSearchParams({ case: "Government" });
        break;
      case 9:
        setSearchParams({ case: "Face-to-faceVerification" });
        break;
      case 10:
        setSearchParams({ case: "BorderControl/police" });
        break;
      case 11:
        setSearchParams({ case: "ReadIDClient-only" });
        break;
      case 12:
        setSearchParams({ case: "Travel" });
        break;
      case 13:
        setSearchParams({ case: "Re-verification" });
        break;
      case 14:
        setSearchParams({ case: "Hiring" });
        break;
      default:
        break;
    }
  };
  // End: set Case
  // Begin: Slide
  const [slideIndex, setSlideIndex] = React.useState(0);
  const properties = {
    prevArrow: (
      <Button
        sx={{
          minWidth: "50px",
          height: "50px",
          borderRadius: "50%",
          border: slideIndex === 0 ? "#F3F5F7" : "1px solid var(--primary-1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: slideIndex === 0 ? "#F3F5F7" : "var(--primary-1)",

          marginLeft: width < 1153 ? "40px" : "19%",
          "&:hover": {
            backgroundColor:
              slideIndex === 0 ? "transparent" : "var(--primary-1)",
          },
        }}
        disabled={slideIndex === 0}
      >
        <ArrowBackIosIcon
          sx={{
            fontSize: "24px",
            marginRight: "-10px",
            color: slideIndex === 0 ? "var(--primary-1)" : "#fff",
          }}
        />
      </Button>
    ),
    nextArrow: (
      <Button
        sx={{
          minWidth: "50px",
          height: "50px",
          borderRadius: "50%",
          pointerEvents: slideIndex === dataPage.length - 1 ? "none" : "auto",
          border:
            slideIndex === dataPage.length - 1
              ? "#F3F5F7"
              : "1px solid var(--primary-1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: width < 1153 ? "40px" : "19%",
          backgroundColor:
            slideIndex === dataPage.length - 1 ? "#F3F5F7" : "var(--primary-1)",
          "&:hover": {
            backgroundColor:
              slideIndex === dataPage.length - 1
                ? "transparent"
                : "var(--primary-1)",
          },
        }}
        disabled={slideIndex === dataPage.length - 1}
      >
        <ArrowForwardIosIcon
          sx={{
            fontSize: "24px",
            color:
              slideIndex === dataPage.length - 1 ? "var(--primary-1)" : "#fff",
            // marginRight: "18px",
          }}
        />
      </Button>
    ),
    autoplay: false,
    canSwipe: width < 768,
    arrows: width > 768,
    transitionDuration: 200,
    defaultIndex: 0,
    infinite: false,
    onChange: (oldIndex, newIndex) => {
      setSlideIndex(newIndex);
    },
    cssClass: "usecaseStories_quotes-slide",
    indicators: (index) =>
      dataPage[index]?.img ? (
        <img
          src={dataPage[index]?.img}
          style={{ scale: dataPage[index]?.scale }}
          alt={dataPage[index]?.scale}
        />
      ) : (
        <img src="" alt="" style={{ display: "none" }} />
      ),
  };
  // End: Slide
  //service
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState("warning");
  const [stateOpen, setStateOpen] = React.useState(false);
  const [checkNul, setCheckNul] = React.useState({
    companyUrl: false,
    email: false,
    firstName: false,
    lastName: false,
    companyName: false,
  });
  const [companyUrl, setCompanyUrl] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [check, setCheck] = React.useState(false);
  var regEx = /\S+@\S+\.\S+/;
  const sendMail = async () => {
    setOpen(true);
    if (
      companyUrl === "" ||
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      companyName === "" ||
      !regEx.test(email)
    ) {
      const checkInfo = {};
      if (companyUrl === "") {
        checkInfo.companyUrl = true;
      }
      if (email === "") {
        checkInfo.email = true;
      }
      if (firstName === "") {
        checkInfo.firstName = true;
      }
      if (lastName === "") {
        checkInfo.lastName = true;
      }
      if (companyName === "") {
        checkInfo.companyName = true;
      }
      if (!regEx.test(email) || email === "") {
        checkInfo.email = true;
      }
      setCheckNul({ ...checkNul, ...checkInfo });
    } else {
      const mesage = await mailContact({
        name:
          i18n.language === 0
            ? firstName + " " + lastName
            : lastName + " " + firstName,
        email: email,
        company: companyName,
        companyUrl: companyUrl,
        signup: check ? "Agree" : "Disagree",
      });
      console.log(mesage);
      setState(mesage);
      setStateOpen(true);
    }

    setOpen(false);
  };
  console.log(checkNul, firstName, lastName, companyName, email, companyUrl);
  return (
    <Box className="usecaseStories">
      <Box className="usecaseStories_intro">
        <h4 className="usecaseStories_intro-subHeader">
          {t("usecaseStories.info.subHeader")}
        </h4>
        <h1 className="usecaseStories_intro-header">
          {" "}
          {t("usecaseStories.info.header")}
        </h1>
        <p className="usecaseStories_intro-title">
          {t("usecaseStories.info.title")}
        </p>

        <FormControl
          className="usecaseStories_intro-choise"
          sx={{
            marginTop: "50px",
            "& .MuiInputLabel-root": {
              color: "#fff",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "26px",
            },
          }}
        >
          <Select
            value={selectValue}
            onChange={handleChangeSelect}
            renderValue={(value) => `${value}`}
            displayEmpty
            sx={{
              minWidth: "255px",
              padding: "16px 25px ",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
              "& .MuiInputBase-input": {
                padding: "0px",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "26px",
                color: "#fff",
              },
              "& .MuiSelect-iconOpen": {
                transform: "rotate(180deg)",
                transition: "all 0.3s ease",
              },
              "& .MuiSelect-icon": {
                color: "#fff",
              },
            }}
            IconComponent={ExpandMoreIcon}
          >
            <MenuItem
              value={t("usecaseStories.info.filterByUsecase")}
              onClick={() => handleChangeCase(0)}
            >
              {t("usecaseStories.info.caseList.all")}
            </MenuItem>
            {names.map((name, index) => (
              <MenuItem
                key={index}
                value={t(name)}
                onClick={() => handleChangeCase(index + 1)}
              >
                {t(name)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className="usecaseStories_company d-flex flex-column align-items-center">
        <h2 className="usecaseStories_company-title">
          {t("usecaseStories.company.title")}
        </h2>
        <p className="usecaseStories_company-content">
           {t("usecaseStories.company.content")}
        </p>
        <Box className="usecaseStories_company-logos d-flex ">
          <img src={acb} alt="" />
          <img src={eximbank} alt="" />
          <img src={pgbank} alt="" />
          <img src={ocb} alt="" />
          <img src={techcombank} alt="" />

          <img src={fpt} alt="" />
          <img src={viettel} alt="" />
          <img src={vnpt} alt="" />
          <img src={vgca} alt="" />
          <img src={fastca} alt="" />

          <img src={winca} alt="" />
          <img src={cmcca} alt="" />
          <img src={easyca} alt="" />
          <img src={ica} alt="" />
          <img src={bkavca} alt="" />

          <img src={hiloca} alt="" />
          <img src={trustca} alt="" />
          <img src={misa} alt="" />
          <img src={newtel} alt="" />
          <img src={martsign} alt="" />
        </Box>
      </Box>
      {data.length > 0 && (
        <Box className="usecaseStories_quotes">
          <Slide {...properties}>
            {data
              .slice(0 + (page - 1) * 5, 5 + (page - 1) * 5)
              .map((item, index) => {
                if (index + 1 === dataPage.length && dataPage.length < 5) {
                  const length = 5 - dataPage.length;

                  const arr = [];
                  arr.push(
                    <div className="each-slide-effect" key={index + 1}>
                      <Box className={`usecaseStories_quotes-page`}>
                        <img alt="" />
                        <Box className=" d-flex flex-column">
                          <p className="usecaseStories_quotes-page-content ">
                            {t(item.content)}
                          </p>
                          <Box className="usecaseStories_quotes-page-info ">
                            <Box className="usecaseStories_quotes-page-info-name">
                              {t(item.name)}
                            </Box>
                            <Box className="usecaseStories_quotes-page-info-title">
                              {item.title}
                            </Box>
                            <Link className="usecaseStories_quotes-page-info-link">
                              {t("usecaseStories.readStory")}
                              <FiArrowRight />
                            </Link>
                          </Box>
                        </Box>
                      </Box>
                    </div>
                  );
                  Array.from({ length: length }).map((item) =>
                    arr.push(
                      <div className="each-slide-effect" key={index + 1}>
                        <Box></Box>
                      </div>
                    )
                  );
                  return arr.map((item) => item);
                } else {
                  return (
                    <div className="each-slide-effect" key={index + 1}>
                      <Box className={`usecaseStories_quotes-page`}>
                        <img src={item.img} alt="" />
                        <Box className=" d-flex flex-column">
                          <p className="usecaseStories_quotes-page-content ">
                            {t(item.content)}
                          </p>
                          <Box className="usecaseStories_quotes-page-info ">
                            <Box className="usecaseStories_quotes-page-info-name">
                              {t(item.name)}
                            </Box>
                            <Box className="usecaseStories_quotes-page-info-title">
                              {item.title}
                            </Box>
                            <Link className="usecaseStories_quotes-page-info-link">
                              {t("usecaseStories.readStory")}
                              <FiArrowRight />
                            </Link>
                          </Box>
                        </Box>
                      </Box>
                    </div>
                  );
                }
              })}
          </Slide>
          {count > 1 && (
            <Box className="usecaseStories_quotes-pagination d-flex">
              <p> {t("usecaseStories.exploremore")} </p>
              <Pagination
                hideNextButton={page === count}
                hidePrevButton={page === 1}
                count={count}
                page={page}
                onChange={handleChangePage}
                siblingCount="3"
                sx={{
                  "& .MuiPaginationItem-root": {
                    margin: "0 4px",
                    backgroundColor: "var(--primary-3)",
                    padding: "10px 20px",
                    height: "50px",
                    borderRadius: "14px",
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "30px",
                    "&:hover": {
                      backgroundColor: "var(--primary-2)",
                      color: "#fff",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "var(--primary-2)",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "var(--primary-2)",
                        color: "#fff",
                      },
                    },
                  },
                }}
              />
            </Box>
          )}
        </Box>
      )}

      <Box className="usecaseStories_receive">
        <Box className="usecaseStories_receive-form">
          <h1 className="usecaseStories_receive-form-title">
            {t("usecaseStories.recives.header")}
          </h1>
          <Box className="usecaseStories_receive-form-input">
            <h4>{t("usecaseStories.recives.body.header")}</h4>
            <p>{t("usecaseStories.recives.body.title")}</p>
            <Box>
              <TextFieldCustom
                label={t("usecaseStories.recives.body.yourEmail")}
                required
                error={checkNul.email}
                onChange={(event) => setEmail(event.target.value)}
                onClick={() => setCheckNul({ ...checkNul, email: false })}
              />
              <TextFieldCustom
                label={t("usecaseStories.recives.body.yourName")}
                required
                error={checkNul.firstName}
                onChange={(event) => setFirstName(event.target.value)}
                onClick={() => setCheckNul({ ...checkNul, firstName: false })}
              />
              <TextFieldCustom
                label={t("usecaseStories.recives.body.lastName")}
                required
                error={checkNul.lastName}
                onChange={(event) => setLastName(event.target.value)}
                onClick={() => setCheckNul({ ...checkNul, lastName: false })}
              />
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextFieldCustom
                    id="outlined-multiline-flexible"
                    label={t("usecaseStories.recives.body.companyName")}
                    onChange={(event) => setCompanyName(event.target.value)}
                    onClick={() =>
                      setCheckNul({ ...checkNul, companyName: false })
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextFieldCustom
                    id="outlined-multiline-flexible"
                    label={t("usecaseStories.recives.body.url")}
                    onChange={(event) => setCompanyUrl(event.target.value)}
                    onClick={() =>
                      setCheckNul({ ...checkNul, companyUrl: false })
                    }
                  />
                </Grid>
              </Grid>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#fff",
                    }}
                    icon={<SquareRoundedIcon />}
                    onChange={(event) => setCheck(event.target.checked)}
                  />
                }
                label={t("usecaseStories.recives.body.check")}
                sx={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  "& span": {
                    fontSize: "13px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    textWrap: "wrap",
                  },
                }}
              />
              <ReCAPTCHA
                sitekey="6LcbJg0pAAAAAPxqdGBmN6e6E3UQ4hNDkVMUAxt7"
                onChange={onChange}
              />
              <p className="usecaseStories_receive-form-input-context">
                {t("usecaseStories.recives.body.sub")}
                <Link style={{ color: "#fff" }}>
                   {t("usecaseStories.recives.body.private")}
                </Link>
              </p>
              <Button
                onClick={() => sendMail()}
                sx={{
                  padding: "21px 40px",
                  borderRadius: "29px",
                  backgroundColor: "#fff",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "16px",
                  color: "var(--primary-1)",
                  textTransform: "none",
                  marginTop: "40px",
                  width: "282px",

                  "&:hover": {
                    backgroundColor: "var(--primary-2)",
                    color: "#fff",
                  },
                }}
                disabled={
                  recaptcha === null ||
                  companyUrl === "" ||
                  email === "" ||
                  firstName === "" ||
                  lastName === "" ||
                  companyName === ""
                    ? true
                    : false
                }
              >
                {t("usecaseStories.recives.body.button")}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={stateOpen} onClose={() => setStateOpen(false)}>
        <Alert severity={state}>
          {state === "error" && "ERROR NETWORK"}
          {state === "success" && "SENDING MAIL SUCCESSFULLY"}
          {state === "warning" && "SENDING MAIL FAILED"}
        </Alert>
      </Snackbar>
    </Box>
  );
};
