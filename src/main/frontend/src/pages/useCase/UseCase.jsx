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
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import ReCAPTCHA from "react-google-recaptcha";
import { useWindowSize } from "usehooks-ts";

import asbApp from "../../assets/img/customer/asb_app.png";
import raboOnline from "../../assets/img/customer/rabo_online_identificeren.png";
import livestyleLawstore from "../../assets/img/customer/livesign_lawstore_app.png";
import lucardLeidenUniversity from "../../assets/img/customer/lucard_leiden_university.png";
import readidCbr from "../../assets/img/customer/readid_cbr.png";
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
import { Test } from "../Test";

const names = [
  "Financial Services",
  "Onboarding",
  "Remote identity verification",
  "ReadID SaaS",
  "Digital Signing",
  "Real Estate",
  "ReadID Ready",
  "Government",
  "Face-to-face verification",
  "Border control / police",
  "ReadID Client-only",
  "Travel",
  "Re-verification",
  "Hiring",
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
  const { t } = useTranslation();

  const { width, height } = useWindowSize();

  // Begin: Select
  const [selectValue, setSelectValue] = React.useState("");

  const handleChangeSelect = (event) => {
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
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = React.useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
    setSearchParams({ ...searchParams, quotes_page_num: value });
  };
  // End: Set page
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
            margin: "80px 0 60px",
            "& .MuiInputLabel-root": {
              color: "#fff",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "26px",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">
            {t("usecaseStories.info.filterByUsecase")}
          </InputLabel>
          <Select
            variant="outlined"
            id="demo-simple-select"
            labelId="demo-simple-select-label"
            value={selectValue}
            onChange={handleChangeSelect}
            label="Filter by use cases"
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
            }}
            IconComponent={() => (
              <ExpandMoreIcon
                sx={{
                  color: "#fff",
                }}
              />
            )}
          >
            <MenuItem>
              <em>All</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box className="usecaseStories_intro-description">
          <img
            className="usecaseStories_intro-description-img"
            src={asbApp}
            alt=""
          />
          <Box className="usecaseStories_intro-description-body">
            <p>{t("usecaseStories.info.description.p")}</p>
            <h6>{t("usecaseStories.info.description.h6")}</h6>
            <p>{t("usecaseStories.info.description.name")}</p>
          </Box>
        </Box>
      </Box>
      <Box className="usecaseStories_company d-flex flex-column align-items-center">
        <h2 className="usecaseStories_company-title">
          {t("usecaseStories.company.title")}
        </h2>
        <p className="usecaseStories_company-content">
           {t("usecaseStories.company.content")}
        </p>
        <Box className="usecaseStories_company-logos d-flex flex-column align-items-center">
          <Box className="usecaseStories_company-logos-item">
            <img src={acb} alt="" />
            <img src={eximbank} alt="" />
            <img src={pgbank} alt="" />
            <img src={ocb} alt="" />
            <img src={techcombank} alt="" />
          </Box>
          <Box className="usecaseStories_company-logos-item">
            <img src={fpt} alt="" />
            <img src={viettel} alt="" />
            <img src={vnpt} alt="" />
            <img src={vgca} alt="" />
            <img src={fastca} alt="" />
          </Box>
          <Box className="usecaseStories_company-logos-item">
            <img src={winca} alt="" />
            <img src={cmcca} alt="" />
            <img src={easyca} alt="" />
            <img src={ica} alt="" />
            <img src={bkavca} alt="" />
          </Box>
          <Box className="usecaseStories_company-logos-item">
            <img src={hiloca} alt="" />
            <img src={trustca} alt="" />
            <img src={misa} alt="" />
            <img src={newtel} alt="" />
            <img src={martsign} alt="" />
          </Box>
          <p className="usecaseStories_company-readstore">
            {t("usecaseStories.company.readStory")} <FiArrowRight />
          </p>
        </Box>
      </Box>
      <Box className="usecaseStories_quotes">
        <Box className="usecaseStories_quotes-item">
          <Box className="usecaseStories_quotes-item-body">
            <p> {t("usecaseStories.quotes.0.header")}</p>
            <h6>{t("usecaseStories.quotes.0.name")}</h6>
            <p>{t("usecaseStories.quotes.0.title")}</p>

            <Link>
              {t("usecaseStories.readStory")} <FiArrowRight />
            </Link>
          </Box>
          <img
            className="usecaseStories_quotes-item-img"
            src={raboOnline}
            alt=""
          />
        </Box>
        <Box className="usecaseStories_quotes-item">
          <img
            className="usecaseStories_quotes-item-img"
            src={livestyleLawstore}
            alt=""
          />
          <Box className="usecaseStories_quotes-item-body">
            <p> {t("usecaseStories.quotes.1.header")}</p>
            <h6>{t("usecaseStories.quotes.1.name")}</h6>
            <p>{t("usecaseStories.quotes.1.title")}</p>

            <Link>
              {t("usecaseStories.readStory")} <FiArrowRight />
            </Link>
          </Box>
        </Box>
        <Box className="usecaseStories_quotes-item">
          <Box className="usecaseStories_quotes-item-body">
            <p> {t("usecaseStories.quotes.2.header")}</p>
            <h6>{t("usecaseStories.quotes.2.name")}</h6>
            <p>{t("usecaseStories.quotes.2.title")}</p>

            <Link>
              {t("usecaseStories.readStory")} <FiArrowRight />
            </Link>
          </Box>
          <img
            className="usecaseStories_quotes-item-img"
            src={lucardLeidenUniversity}
            alt=""
          />
        </Box>
        <Box className="usecaseStories_quotes-item">
          <img
            className="usecaseStories_quotes-item-img"
            src={readidCbr}
            alt=""
          />
          <Box className="usecaseStories_quotes-item-body">
            <p> {t("usecaseStories.quotes.3.header")}</p>
            <h6>{t("usecaseStories.quotes.3.name")}</h6>
            <p>{t("usecaseStories.quotes.3.title")}</p>

            <Link>
              {t("usecaseStories.readStory")} <FiArrowRight />
            </Link>
          </Box>
        </Box>
        <Box className="usecaseStories_quotes-pagination d-flex">
          <p> {t("usecaseStories.quotes.exploremore")} </p>
          <Pagination
            hideNextButton={page === 4}
            hidePrevButton={page === 1}
            count={4}
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
      </Box>
      <Box className="usecaseStories_receive">
        <Box className="usecaseStories_receive-form">
          <h1 className="usecaseStories_receive-form-title">
            Never stop learning.We like to make an effort to deliver all the
            insights to you.
          </h1>
          <Box className="usecaseStories_receive-form-input">
            <h4>Receive updates per email</h4>
            <p>1 newsletter a month</p>
            <Box>
              <TextFieldCustom label="Your email" required />
              <TextFieldCustom label="First name" required />
              <TextFieldCustom label="Last name" required />
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextFieldCustom
                    id="outlined-multiline-flexible"
                    label="Company Name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextFieldCustom
                    id="outlined-multiline-flexible"
                    label="Company website url"
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
                  />
                }
                label="Yes, inform me about identity verification. I want to
              subscribe for the CheckID Newsletter*"
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
                We’re committed to protecting and respecting your privacy. For
                more information read our
                <Link style={{ color: "#fff" }}> Privacy Policy.</Link>
              </p>
              <Button
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
                disabled
              >
                Yes, keep me informed
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
