import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

export const UseCase = () => {
  // set Title
  document.title = "Customer Stories | CheckID";
  const { t } = useTranslation();

  // Begin: Select
  const [selectValue, setSelectValue] = React.useState("");

  const handleChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };
  // End: Select
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
        <h4 className="usecaseStories_intro-subHeader">Customer stories</h4>
        <h1 className="usecaseStories_intro-header">
          Stories from the people we’ve worked with
        </h1>
        <p className="usecaseStories_intro-title">
          Discover how MobileID ensures the most trusted mobile identity
          document authenticity across industries, and impacts the world of
          identity verification. Below are our success stories.
        </p>

        <FormControl
          className="usecaseStories_intro-choise"
          sx={{
            margin: "80px 0 60px",
            // border: "1px solid #fff",
            // borderRadius: "8px",
            "& .MuiInputLabel-root": {
              color: "#fff",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "26px",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">
            Filter by use cases
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
            <p>
              “It just wasn't a seamless user experience with OCR, leading to
              poor conversion. With NFC we created a high quality customer
              journey and the number of customers who no longer need to visit a
              branch has increased fivefold"
            </p>
            <h6>Andrea McKain</h6>
            <p>ASB Bank</p>
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
            <p>
              “We have grown the online channel for onboarding new customers
              from 35% to 60% and the feedback we receive from app users
              includes comments such as "Is fantastic", "Fast" and "Clear.”
            </p>
            <h6>Evelien Mooij</h6>
            <p>Rabobank</p>

            <Link>
              Read the full story <FiArrowRight />
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
            <p>
              "We wanted the best technology behind this that would offer
              titanium standard identity verification for Livesign. After
              testing CheckID technology, we concluded that there is no better
              solution for identity verification."
            </p>
            <h6>Ian Hendey</h6>
            <p>the lawstore / livesign</p>

            <Link>
              Read the full story <FiArrowRight />
            </Link>
          </Box>
        </Box>
        <Box className="usecaseStories_quotes-item">
          <Box className="usecaseStories_quotes-item-body">
            <p>
              “The full student onboarding has changed to an instant and smooth
              process. Great for students and employees"
            </p>
            <h6>Jeroen Ruiter</h6>
            <p>Leiden University</p>

            <Link>
              Read the full story <FiArrowRight />
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
            <p>
              “CBR employees have identified a few cases where look-a-likes
              tried to fool them. The CheckID app confirmed the employees'
              doubts.”
            </p>
            <h6>Tjitse van den Bos</h6>
            <p>CBR</p>

            <Link>
              Read the full story <FiArrowRight />
            </Link>
          </Box>
        </Box>
        <Box className="usecaseStories_quotes-pagination d-flex">
          <p>Explore more</p>
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
      <Box className="usecaseStories_receive">s</Box>
    </Box>
  );
};
