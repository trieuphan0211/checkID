import styled from "@emotion/styled";
import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import { AppBar, Slide, useScrollTrigger } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import gartner from "../../assets/img/customer/partners/Gartner.png";
import acb from "../../assets/img/customer/partners/acb.png";
import eIDAS from "../../assets/img/customer/partners/eIDAS.png";
import eximbank from "../../assets/img/customer/partners/eximbank.png";
import fpt_ca from "../../assets/img/customer/partners/fpt_ca.png";
import gartner_hypecycle from "../../assets/img/customer/partners/gartner_hypecycle.png";
import iso27001 from "../../assets/img/customer/partners/iso27001.png";
import ocb from "../../assets/img/customer/partners/ocb.png";
import pgbank from "../../assets/img/customer/partners/pgbank.png";
import techcombank from "../../assets/img/customer/partners/techcombank.png";
import viettel from "../../assets/img/customer/partners/viettel.png";
import partnership_1 from "../../assets/img/customer/partnership_1.png";
import "../../assets/scss/UseCase.scss";
import Footer from "../../components/Footer";
import { Header, SubHeader } from "../../components/headers";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const TextFieldCustom = styled(TextField)({
  width: "100%",
  marginTop: "10px",
  "& label": {
    color: "#fff",
  },
  "& .MuiInputBase-root": {
    padding: "14px 21px",
  },
  "& label.Mui-focused": {
    fontWeight: "700",
  },
  "& .MuiFormLabel-root": {
    left: "10px",
  },
  "& .Mui-focused.MuiFormLabel-root": {
    left: "0",
  },
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": {
      borderColor: "#fff",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "var(--bs-blue)",
    },
  },
});

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
export const Partnerships = (props) => {
  // set Title
  document.title = "Partnership | CheckID";
  const path = useLocation();
  const { t } = useTranslation();
  const parther = [acb, fpt_ca, eximbank, viettel, pgbank, ocb, techcombank];

  // Begin: Form
  const [formRadio, setFormRadio] = React.useState("");

  const handleChangeFormRadio = (event) => {
    setFormRadio(event.target.value);
  };

  // End: Form
  // Begin: capcha
  const [recaptcha, setRecaptcha] = React.useState(null);
  const onChange = (value) => {
    setRecaptcha(value);
  };
  // End: capcha
  // Begin: Select
  const [selectValue, setSelectValue] = React.useState("Please Select");

  const handleChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };
  // End: Select
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        {path?.pathname === "/use-cases" ? (
          <AppBar
            sx={{
              boxShadow: "none",
              backgroundColor: "white",
            }}
          >
            <SubHeader />
            <Header />
          </AppBar>
        ) : (
          <AppBar
            sx={{
              boxShadow: "none",
              backgroundColor: "var(--primary-1)",
            }}
          >
            <SubHeader bg="blue" />
            <Header bg="white" />
          </AppBar>
        )}
      </HideOnScroll>
      <div className="usecase">
        <Box className="partnerships">
          <Box className="partnerships_header d-flex flex-column align-items-center">
            <h4 className="partnerships_header-subheader">
              {t("partnership.header.subheader")}
            </h4>
            <h1 className="partnerships_header-header">
              {t("partnership.header.header")}
            </h1>
            <p className="partnerships_header-context">
              {t("partnership.header.context")}
            </p>
          </Box>
          <Box className="partnerships_expand d-flex justify-content-center">
            <img
              className="partnerships_expand-img"
              src={partnership_1}
              alt=""
            />
            <Box className="partnerships_expand-body d-flex flex-column">
              <h2 className="partnerships_expand-body-header">
                {t("partnership.expand.body.header")}
              </h2>
              <p className="partnerships_expand-body-p">
                {t("partnership.expand.body.p1")}
              </p>
              <p className="partnerships_expand-body-p">
                {t("partnership.expand.body.p2")}
              </p>
              <ol className="partnerships_expand-body-p">
                <li>{t("partnership.expand.body.li1")}</li>
                <li>{t("partnership.expand.body.li2")}</li>
              </ol>
              <p className="partnerships_expand-body-p">
                {t("partnership.expand.body.p3")}
              </p>
            </Box>
          </Box>
          <Box className="partnerships_partners d-flex flex-column align-items-center">
            <h2 className="partnerships_partners-header">
              {t("partnership.partners.header")}
            </h2>
            <Box className="partnerships_partners-body d-flex flex-wrap justify-content-center">
              {parther.map((item, index) => {
                return (
                  <Box className="partnerships_partners-body-item" key={index}>
                    <img
                      className="partnerships_partners-body-item-img"
                      src={item}
                      alt=""
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box className="partnerships_contact">
            <Box className="partnerships_contact-layout d-flex">
              <Box className="partnerships_contact-info">
                <h2>{t("partnership.contact.info.header1")}</h2>
                <p>{t("partnership.contact.info.context1")}</p>
                <Divider />
                <h2>{t("partnership.contact.info.header2")}</h2>
                <p>{t("partnership.contact.info.context2")}</p>
                <p>{t("partnership.contact.info.context3")}</p>
                <p>{t("partnership.contact.info.context4")}</p>
                <p>{t("partnership.contact.info.context5")}</p>
              </Box>
              <Box className="partnerships_contact-form">
                <h5 className="partnerships_contact-form-subheader">
                  {t("partnership.contact.form.subheader")}
                </h5>
                <h2 className="partnerships_contact-form-header">
                  {t("partnership.contact.form.header")}
                </h2>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      "&.MuiGrid-item": {
                        paddingTop: "0",
                      },
                    }}
                  >
                    <TextFieldCustom
                      id="outlined-multiline-static"
                      label={t("partnership.contact.form.firstName")}
                      multiline
                      required
                      sx={{
                        width: "100%",
                        marginTop: "20px",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      "&.MuiGrid-item": {
                        paddingTop: "0",
                      },
                    }}
                  >
                    {" "}
                    <TextFieldCustom
                      id="outlined-multiline-static"
                      label={t("partnership.contact.form.lastName")}
                      multiline
                      required
                      sx={{ width: "100%", marginTop: "20px" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      "&.MuiGrid-item": {
                        paddingTop: "0",
                      },
                    }}
                  >
                    <TextFieldCustom
                      id="outlined-multiline-static"
                      label={t("partnership.contact.form.jobTitle")}
                      multiline
                      required
                      sx={{ margin: 0, width: "100%", marginTop: "20px" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      "&.MuiGrid-item": {
                        paddingTop: "0",
                      },
                    }}
                  >
                    {" "}
                    <TextFieldCustom
                      id="outlined-multiline-static"
                      label={t("partnership.contact.form.companyName")}
                      multiline
                      required
                      sx={{ width: "100%", marginTop: "20px" }}
                    />
                  </Grid>
                </Grid>
                <FormControl
                  className="usecaseStories_intro-choise"
                  sx={{
                    marginTop: "10px",
                    width: "100%",
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
                      padding: "16px 25px ",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--bs-blue)",
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
                    <MenuItem value={t("partnership.contact.form.pleseSelect")}>
                      {t("partnership.contact.form.all")}
                    </MenuItem>
                    {names.map((name, index) => (
                      <MenuItem key={index} value={t(name)}>
                        {t(name)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextFieldCustom
                  id="outlined-multiline-static"
                  label={t("partnership.contact.form.country")}
                  multiline
                  required
                  sx={{
                    width: "100%",
                    marginTop: "20px",
                  }}
                />
                <TextFieldCustom
                  id="outlined-multiline-static"
                  label={t("partnership.contact.form.companyUrl")}
                  multiline
                  required
                  sx={{
                    width: "100%",
                    marginTop: "20px",
                  }}
                />
                <TextFieldCustom
                  id="outlined-multiline-static"
                  label={t("partnership.contact.form.email")}
                  multiline
                  required
                  sx={{
                    width: "100%",
                    marginTop: "20px",
                  }}
                />
                <Box className="partnerships_contact-form-check">
                  <h6 className="">
                    {t("partnership.contact.form.partnership")}
                  </h6>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={formRadio}
                    onChange={handleChangeFormRadio}
                  >
                    <FormControlLabel
                      control={
                        <Radio
                          disableRipple
                          color="primary"
                          icon={
                            <CircleIcon
                              sx={{
                                color: "#fff",
                                fontSize: "14px",
                              }}
                            />
                          }
                          checkIcon={<RadioButtonCheckedIcon />}
                          sx={{
                            "&.Mui-checked > span > svg": {
                              fontSize: "14px",
                            },
                          }}
                        />
                      }
                      value="like"
                      label={t("partnership.contact.form.option1")}
                      sx={{
                        "& span.MuiTypography-root": {
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        },
                      }}
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          disableRipple
                          color="primary"
                          icon={
                            <CircleIcon
                              sx={{
                                color: "#fff",
                                fontSize: "14px",
                              }}
                            />
                          }
                          checkIcon={<RadioButtonCheckedIcon />}
                          sx={{
                            "&.Mui-checked > span > svg": {
                              fontSize: "14px",
                            },
                          }}
                        />
                      }
                      value="working"
                      label={t("partnership.contact.form.option2")}
                      sx={{
                        "& span.MuiTypography-root": {
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        },
                      }}
                    />
                  </RadioGroup>
                  <TextFieldCustom
                    id="outlined-multiline-static"
                    label={t("partnership.contact.form.context")}
                    multiline
                    rows={3}
                    required
                    sx={{
                      width: "100%",
                      marginTop: "20px",
                    }}
                  />
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
                    label={t("partnership.contact.form.stayINformed")}
                    sx={{
                      marginTop: "24px",
                      marginBottom: "10px",
                      maxWidth: "460px",
                      "& span": {
                        fontSize: "13px",
                        fontWeight: "500",
                        lineHeight: "20px",
                      },
                    }}
                  />
                  <p className="partnerships_contact-form-context2">
                    {t("remoteIdentity.challenge.context2")}
                    <Link style={{ color: "#fff" }}>
                      {t("remoteIdentity.challenge.privacyPolicy")}
                    </Link>
                  </p>
                  <ReCAPTCHA
                    sitekey="6LcbJg0pAAAAAPxqdGBmN6e6E3UQ4hNDkVMUAxt7"
                    onChange={onChange}
                  />
                  <Button
                    sx={{
                      padding: "21px 37.425px 21px 37.625px",
                      borderRadius: "29px",
                      backgroundColor: "#fff",
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "16px",
                      color: "var(--primary-2)",
                      textTransform: "none",
                      marginTop: "30px",
                      width: "100%",
                      "&:hover": {
                        backgroundColor: "var(--primary-1)",
                        color: "#fff",
                      },
                    }}
                    disabled
                  >
                    {t("partnership.contact.form.button")}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="partnerships_digidentity d-flex align-items-center justify-content-start">
            <Box className="partnerships_digidentity-info d-flex flex-column">
              <h1 className="partnerships_digidentity-info-h1">
                {t("partnership.digidentity.info.header")}
              </h1>
              <p className="partnerships_digidentity-info-body">
                {t("partnership.digidentity.info.body1")}
              </p>
              <p className="partnerships_digidentity-info-body">
                {t("partnership.digidentity.info.body2")}
              </p>
            </Box>
            <Box className="partnerships_digidentity-video d-flex flex-column align-items-center">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/RiOEI2mf3Lw?rel=0"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <div></div>
              <p className="partnerships_digidentity-video-title">
                {t("partnership.digidentity.videoTitle")}
              </p>
            </Box>
          </Box>
          <Box className="partnerships_trust d-flex align-items-center justify-content-center flex-wrap">
            <Box className="partnerships_trust-info">
              <h2>{t("partnership.trust.header")}</h2>
              <p>{t("partnership.trust.body")}</p>
              <Link>
                {t("partnership.trust.contact")} <FiArrowRight />
              </Link>
            </Box>
            <Box className="partnerships_trust-cer d-flex align-items-center gap-3">
              <img src={iso27001} alt="" />
              <p>ISO27701 certified</p>
            </Box>
            <Box className="partnerships_trust-cer d-flex align-items-center gap-3">
              <img src={eIDAS} alt="" />
              <p>eIDAS module certifications QTSPs</p>
            </Box>
          </Box>
          <Box className="partnerships_new d-flex justify-content-between align-items-start">
            <Box className="partnerships_new-header">
              <h2 className="partnerships_new-header-h2">
                {t("partnership.new.header")}
              </h2>
              <p className="partnerships_new-header-p">
                {t("partnership.new.body")}
              </p>
            </Box>
            <Box className="partnerships_new-item">
              <img src={gartner} alt="" />
              <h4>{t("partnership.new.0.header")}</h4>
              <p>{t("partnership.new.0.body")}</p>
            </Box>
            <Box className="partnerships_new-item">
              <img src={gartner_hypecycle} alt="" />
              <h4>{t("partnership.new.1.header")}</h4>
              <p>{t("partnership.new.1.body")}</p>
            </Box>
          </Box>
        </Box>
      </div>
      <Footer />
    </React.Fragment>
  );
};
