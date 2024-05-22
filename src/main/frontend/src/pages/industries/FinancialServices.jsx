import React from "react";

import scanning from "../../assets/img/scanning.png";

import styled from "@emotion/styled";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import aml from "../../assets/img/industries/aml.png";
import bg from "../../assets/img/industries/background.svg";
import bg1 from "../../assets/img/industries/background1.svg";
import bg2 from "../../assets/img/background.png";
import { ReactComponent as BlockShield } from "../../assets/img/industries/block.svg";
import financialServiceImg from "../../assets/img/industries/financial-service.png";
import challengerBanks from "../../assets/img/industries/challenger-banks.png";
import rabobank from "../../assets/img/industries/rabobank.png";
import aegon from "../../assets/img/industries/aegon.png";
import challenge from "../../assets/img/industries/challenge.png";
import certificateSecurity from "../../assets/img/industries/certificate-security.png";
import rianneRolsma from "../../assets/img/trusted_identity_verification/Rianne-rolsma.png";
import { ReactComponent as IdCard } from "../../assets/img/industries/id-card.svg";
import { ReactComponent as TwoPersons } from "../../assets/img/industries/two-persons.svg";
import { useTranslation } from "react-i18next";

// Begin: custom MUI components
const BlueButton = styled(Button)({
  backgroundColor: "var(--primary-2)",
  color: "#fff",
  textTransform: "none",
  padding: "21px 38px",
  fontSize: "1.6em",
  fontWeight: "700",
  borderRadius: "30px",
  height: "58px",
  "&:hover": {
    backgroundColor: "#0074ff",
  },
});
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1152,
      xl: 1440,
      "2xl": 1920,
    },
  },
});
const FinancialServices = () => {
  const { t } = useTranslation();
  return (
    <main className="industries_financial">
      <Box sx={{ maxWidth: "1920px", margin: " auto" }}>
        <Box
          className="financial_conversionRate d-flex"
          sx={{
            padding: "46px 70px 80px 70px",
            minHeight: "722px",
            backgroundColor: "var(--primary-3)",
            [theme.breakpoints.down("xl")]: {
              position: "relative",
              "& >img": {
                position: "absolute",
                top: "0",
                right: "0",
                width: "auto",
                height: "auto",
                opacity: "0.5",
              },
            },
            [theme.breakpoints.down("md")]: {
              padding: "20px",
            },
          }}
        >
          <Box
            className="financial_conversionRate-layout"
            sx={{
              maxWidth: "615px",
              marginLeft: "14%",
              [theme.breakpoints.down("xl")]: {
                zIndex: "1",
              },
              [theme.breakpoints.down("md")]: {
                marginLeft: "0",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "var(--primary-1)",
                fontSize: "1.5em",
                fontWeight: "600",
                letterSpacing: " 2.82px",
                textTransform: "uppercase",
                maxWidth: "415px",
              }}
            >
              {/* Identity verification for financial services */}
              {t("financialServices.identityVerificationForFinancialServices")}
            </Typography>

            <Typography
              variant="h1"
              sx={{
                color: "var(--primary-2)",
                fontSize: " 6.4em",
                fontWeight: "700",
                lineHeight: "70px",
                marginTop: "36px",
              }}
              className="financial_conversionRate-header"
            >
              {/* Combining secure KYC, AML and great conversion */}
              {t("financialServices.combiningSecureKYCAMLAndGreatConversion")}
            </Typography>
            <Typography
              variant="body1"
              className="financial_conversionRate-body"
              sx={{
                color: "var(--primary-1)",
                fontSize: "1.6em",
                fontWeight: "500",
                lineHeight: "26px",
                marginTop: "30px",
                maxWidth: "85%",
              }}
            >
              {/* The financial sector is constantly balancing secure KYC processes
            against smooth handling and optimal customer experience. Mobile-ID
            provides the solution to have it all: NFC- first mobile onboarding
            that is easy to use, completely fraud-free, and highly
            cost-effective. */}
              {t("financialServices.financialSectorIsConstantlyBalancing")}
            </Typography>
            <Box className="">
              <BlueButton
                sx={{
                  marginTop: "36px",
                }}
              >
                {/* Contact a specialist */}
                {t("financialServices.contactASpecialist")}
              </BlueButton>
              <Button
                sx={{
                  marginTop: "10px",
                  display: "block",
                  borderRadius: "30px",
                  border: "2px solid var(--primary-2)",
                  textTransform: "none",
                  padding: "21px 40px",
                  fontSize: "16px",
                  lineHeight: "16px",
                  fontWeight: "700",
                  color: "var(--primary-2)",
                  "&:hover": {
                    backgroundColor: "var(--primary-2)",
                    color: "#fff",
                  },
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                }}
              >
                {/* Try our CheckID Me app */}
                {t("financialServices.tryOurCheckIDMeApp")}
              </Button>
            </Box>
          </Box>
          <img className="financial_conversionRate-img" src={scanning} alt="" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            padding: "50px",
            [theme.breakpoints.down("lg")]: {
              flexDirection: "column",
              alignItems: "center",
            },
            [theme.breakpoints.down("md")]: {
              padding: "20px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "400px",
              padding: "20px 24px",
              boxShadow: "0 4px 10px 0 rgba(79, 156, 249, 0.20)",
              gap: "20px",
              [theme.breakpoints.down("lg")]: {
                maxWidth: "none",
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                padding: "20px 10px",
                backgroundColor: "#EBF6FF",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "25px",
              }}
            >
              <TwoPersons />
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "30px",
                textAlign: "center",
              }}
            >
              {/* Know Your Customer */}
              {t("financialServices.knowYourCustomer")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: "500", textAlign: "center" }}
            >
              {/* Identity verification for onboarding new customers and remediation. */}
              {t(
                "financialServices.identityVerificationForOnboardingNewCustomers"
              )}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "400px",
              padding: "20px 24px",
              boxShadow: "0 4px 10px 0 rgba(79, 156, 249, 0.20)",
              gap: "20px",
              [theme.breakpoints.down("lg")]: {
                maxWidth: "none",
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                padding: "20px 10px",
                backgroundColor: "#EBF6FF",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "25px",
              }}
            >
              <BlockShield />
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "30px",
                textAlign: "center",
              }}
            >
              {/* Anti-money laundering */}
              {t("financialServices.antiMoneyLaundering")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: "500", textAlign: "center" }}
            >
              {/* Mobile-ID helps AML compliancy with remote. */}
              {t("financialServices.mobileIDHelpsAMLCompliancyWithRemote")}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "400px",
              padding: "20px 24px",
              boxShadow: "0 4px 10px 0 rgba(79, 156, 249, 0.20)",
              gap: "20px",
              [theme.breakpoints.down("lg")]: {
                maxWidth: "none",
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                padding: "20px 10px",
                backgroundColor: "#EBF6FF",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "25px",
              }}
            >
              <IdCard />
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "30px",
                textAlign: "center",
              }}
            >
              {/* Reverification */}
              {t("financialServices.reverification")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: "500", textAlign: "center" }}
            >
              {/* Your customer life cycle doesn't stop after onboarding. Use CheckID
            for app activation. */}
              {t(
                "financialServices.yourCustomerLifeCycleDoesntStopAfterOnboarding"
              )}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            gap: "110px",
            marginBottom: "50px",
            [theme.breakpoints.down("md")]: {
              padding: "20px",
              gap: "50px",
            },
          }}
        >
          <Box sx={{ maxWidth: "825px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                marginBottom: "25px",
                textAlign: "center",
              }}
            >
              {/* Powered by Near Field Communication */}
              {t("financialServices.poweredByNearFieldCommunication")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "700px",
                textAlign: "center",
                margin: "0 auto",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {/* The financial sector is constantly balancing secure KYC processes
            against smooth handling and optimal customer experience. Mobile-ID
            provides the solution to have it all: NFC-first mobile onboarding
            that is easy to use, completely fraud-free, and highly
            cost-effective. */}
              {t("financialServices.financialSectorIsConstantlyBalancing")}
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "1300px" }}>
            <Box
              sx={{
                display: "flex",
                gap: "25px",
                marginBottom: "150px",
                "& > img": {
                  maxWidth: "550px",
                  height: "auto",
                },
                [theme.breakpoints.down("xl")]: {
                  padding: "0 50px",
                },
                [theme.breakpoints.down("lg")]: {
                  flexDirection: "column",
                  alignItems: "center",
                  "& > img": {
                    maxWidth: "80%",
                  },
                },
                [theme.breakpoints.down("md")]: {
                  padding: "0",
                  "& > img": {
                    maxWidth: "100%",
                  },
                },
              }}
            >
              <Box sx={{ padding: "50px 0" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "40px",
                    fontWeight: "700",
                    marginBottom: "25px",
                  }}
                >
                  {/* KYC for banks */}
                  {t("financialServices.kycForBanks")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    marginBottom: "40px",
                  }}
                >
                  {/* Consumers are increasingly online-minded and expect quick
                digital services. Physical branch offices with traditional
                counters and visiting hours are quickly becoming obsolete.
                Visiting them for identity verification is increasingly regarded
                as outdated, if not a waste of time and energy. Established
                banks are often looking for ways to reduce overhead costs by
                shutting down obsolete offices, and current challenger banks do
                not even have physical offices anymore. */}
                  {t("financialServices.consumersAreIncreasinglyOnlineMinded")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    marginBottom: "25px",
                  }}
                >
                  {/* The CheckID technology offers an unrivalled customer experience
                and highly secure mobile onboarding, by combining mobile
                identity document verification with facial verification. From
                the comfort of their own home, customers can open bank accounts
                online within minutes, using just their identity documents and
                our NFC-based technology. No need for office visits. */}
                  {t("financialServices.checkIDTechnologyOffersAnUnrivalled")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    "& a": {
                      fontSize: "16px",
                      fontWeight: "700",
                      textDecoration: "none",
                      svg: {
                        transition: "transform 0.3s",
                      },
                      "&:hover": {
                        svg: {
                          transform: "translateX(10px)",
                        },
                      },
                    },
                  }}
                >
                  <Link to={""}>
                    {/* How Rabobank uses CheckID for onboarding */}
                    {t(
                      "financialServices.howRabobankUsesCheckIDForOnboarding"
                    )}{" "}
                    <ArrowForwardRoundedIcon />
                  </Link>
                </Typography>
              </Box>
              <img src={financialServiceImg} alt="Financial service" />
            </Box>
            <Box
              sx={{
                display: "flex",
                "& > img": {
                  maxWidth: "650px",
                  height: "auto",
                },
                [theme.breakpoints.down("xl")]: {
                  padding: "0 50px",
                },
                [theme.breakpoints.down("lg")]: {
                  flexDirection: "column-reverse",
                  alignItems: "center",
                  "& > img": {
                    maxWidth: "80%",
                  },
                },
                [theme.breakpoints.down("md")]: {
                  padding: "0",
                  "& > img": {
                    maxWidth: "100%",
                  },
                },
              }}
            >
              <img src={aml} alt="Financial service" />
              <Box
                sx={{
                  padding: "0 50px 0 100px",
                  margin: "auto 0",
                  [theme.breakpoints.down("lg")]: {
                    padding: "0",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "40px",
                    fontWeight: "700",
                    marginBottom: "25px",
                  }}
                >
                  {/* AML Compliance made easy */}
                  {t("financialServices.amlForBanks")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    marginBottom: "40px",
                  }}
                >
                  {/* According to the European Commission, fighting money laundering
                and terrorist financing strengthens global security, integrity
                of the financial system, and sustainable growth. As a result,
                banks face strict laws to combat money laundering and terrorism
                financing. Complying with AML directives is difficult, and banks
                go through extensive and costly reverification programs.
                Mobile-ID can simplify remediation steps in AML processes.  */}
                  {t("financialServices.accordingTotheEuropeanComission")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    marginBottom: "25px",
                  }}
                >
                  {/* Mobile-ID reduces costs by making reverification safe and
                simple. And by circumventing human interaction, AML processes
                become more effective. CheckID technology delivers secure
                reverification, by combining mobile identity document
                verification with facial verification, without the risk of
                unnecessary customer churn. */}
                  {t(
                    "financialServices.mobileIDReducesCostsByMakingReverification"
                  )}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${bg1})`,
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <Box>
            <Box
              sx={{
                width: "328px",
                height: "328px",
                background:
                  "linear-gradient(103deg, #4F9CF9 9.42%, rgba(79, 156, 249, 0.00) 94.81%)",
                borderRadius: "50%",
                position: "relative",
                margin: "0 auto 40px",
              }}
            >
              <Box
                sx={{
                  background: "#DFF1FF",
                  width: "266px",
                  height: "266px",
                  borderRadius: "50%",
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: "var(--primary-1)",
                    fontSize: "96px",
                    fontWeight: "700",
                  }}
                >
                  170+
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: "24px",
                fontWeight: "500",
                marginBottom: "30px",
                maxWidth: "730px",
                textAlign: "center",
              }}
            >
              {/* Countries use ICAO compliant identity documents that are supported
            by CheckID */}
              {t(
                "financialServices.countriesUseICAOCompliantIdentityDocuments"
              )}
            </Typography>
            <Button
              sx={{
                margin: "0 auto",
                display: "block",
                padding: "21px 38px",
                borderRadius: "29px",
                backgroundColor: "var(--primary-2)",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "16px",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#0074ff",
                },
              }}
            >
              {/* View worldwide coverage of NFC */}
              {t("financialServices.viewWorldwideCoverageOfNFC")}
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "100px",
              marginBottom: "50px",
              maxWidth: "1240px",
              "& > img": {
                maxWidth: "550px",
                height: "auto",
              },

              [theme.breakpoints.down("lg")]: {
                flexDirection: "column",
                alignItems: "center",
                "& > img": {
                  maxWidth: "80%",
                },
              },
            }}
          >
            <Box sx={{ padding: "0 20px" }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "40px",
                  fontWeight: "700",
                  marginBottom: "25px",
                }}
              >
                {/* Certified security */}
                {t("financialServices.certifiedSecurity")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "40px",
                }}
              >
                {/* The technology is secure, as is our company. We are the most
              certified in the identity verification industry: ISO27001,
              ISO27701 and eIDAS compliant certified under ETSI EN 319 401 and
              ETSI EN 319 411-1/2 standards. We are regularly audited and pen
              tested, and comply with EBA outsourcing guidelines. Mobile-ID is
              based in the EU and GDPR compliant. */}
                {t("financialServices.theTechnologyIsSecureAsIsOurCompany")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "25px",
                }}
              >
                {/* We build upon electronic identity documents that are impenetrable:
              data in electronic identity documents cannot be manipulated and is
              always correctly read. We can detect if a chip was copied.
              Personal images in chips cannot be manipulated and have a higher
              resolution than the printed face image. This prevents identity
              fraud and provides a much stronger basis for face verification
              than optical solutions. */}
                {t("financialServices.weBuildUponElectronicIdentityDocuments")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  "& a": {
                    fontSize: "16px",
                    fontWeight: "700",
                    textDecoration: "none",
                    svg: {
                      transition: "transform 0.3s",
                    },
                    "&:hover": {
                      svg: {
                        transform: "translateX(10px)",
                      },
                    },
                  },
                }}
              >
                <Link to={""}>
                  {/* Reverification at Aegon */}
                  {t("financialServices.reverificationAtAegon")}
                  <ArrowForwardRoundedIcon />
                </Link>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  width: "460px",
                  padding: "33px 35px 40px 34px",
                  background: "var(--primary-2)",
                  borderRadius: "20px",
                  color: "#fff",
                  "& >img": {
                    width: "54px",
                    height: "54px",
                  },
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                  },
                }}
              >
                <img src={rianneRolsma} alt="Financial service" />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "16px", fontWeight: "700" }}
                  >
                    {/* Rianne Rolsma */}
                    {t("financialServices.rianneRolsma")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      marginBottom: "20px",
                    }}
                  >
                    {/* Product owner at Aegon */}
                    {t("financialServices.productOwnerAtAegon")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontStyle: "italic",
                    }}
                  >
                    {/* “We needed reliable, proven technology. Using the NFC solution
                  is much more reliable than OCR.” */}
                    {t("financialServices.weNeededReliableProvenTechnology")}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <img src={certificateSecurity} alt="Financial service" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "100px",
              marginBottom: "120px",
              maxWidth: "1240px",
              "& > img": {
                maxWidth: "550px",
                height: "auto",
              },
              [theme.breakpoints.down("lg")]: {
                flexDirection: "column-reverse",
                alignItems: "center",
                "& > img": {
                  maxWidth: "80%",
                },
              },
            }}
          >
            <img src={challengerBanks} alt="Financial service" />
            <Box sx={{ padding: "0 20px" }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "40px",
                  fontWeight: "700",
                  marginBottom: "25px",
                }}
              >
                {/* CheckID for challenger banks */}
                {t("financialServices.checkIDForChallengerBanks")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "40px",
                }}
              >
                {/* No offices, goodbye nine-to-five mentality, just top-notch
              round-the-clock financial service, and a lean and sleek UX,
              speaking to the younger generations in particular. Yet every bank
              still needs to officially verify your customers’ identities. */}
                {t("financialServices.noOfficesGoodbyeNineToFiveMentality")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "40px",
                }}
              >
                {/* Mobile-ID can offer your customers the required safe and swift
              onboarding process they have come to know and love about you if
              you use CheckID technology. Integrate in your own app through our
              intuitive SDK, or adopt our ready-to-use Ready app and customise
              it to your own brand identity. Your IT staff will love its easy
              integration, and cross-the-board effectiveness. */}
                {t("financialServices.mobileIDCanOfferYourCustomers")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "30px",
                }}
              >
                {/* Wow your new clients with a smooth mobile onboarding experience,
              matching your flagship solution's experience. */}
                {t("financialServices.wowYourNewClientsWithASmoothMobile")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  "& a": {
                    fontSize: "16px",
                    fontWeight: "700",
                    textDecoration: "none",
                    svg: {
                      transition: "transform 0.3s",
                    },
                    "&:hover": {
                      svg: {
                        transform: "translateX(10px)",
                      },
                    },
                  },
                }}
              >
                <Link to={""}>
                  {/* How NFC technology helps */}
                  {t("financialServices.howNFCTechnologyHelps")}
                  <ArrowForwardRoundedIcon />
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "110px 20px",
            color: "#fff",
            backgroundImage: `url(${bg2})`,
          }}
        >
          <Box sx={{ maxWidth: "1300px" }}>
            {" "}
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                color: "var(--secondary-1)",
                fontSize: "1.5em",
                fontWeight: "600",
                letterSpacing: "2.82px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              {/* Start today */}
              {t("financialServices.startToday")}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "4em",
                fontWeight: "700",
                textAlign: "center",
                maxWidth: "800px",
                display: "block",
                margin: "0 auto 24px",
              }}
            >
              {/* Solutions to solve any identity verification challenge */}
              {t(
                "financialServices.solutionsToSolveAnyIdentityVerificationChallenge"
              )}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.6em",
                fontWeight: "500",
                maxWidth: "675px",
                textAlign: "center",
                margin: "0 auto 90px",
              }}
            >
              {/* We provide a free personal app, CheckID Me, to experience CheckID
            technology for yourself. Use CheckID SaaS to integrate into your own
            app or use our ready-to-use app to hit the ground running. */}
              {t("financialServices.weProvideAFreePersonalAppCheckIDMe")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "24px",
                alignItems: "stretch",
                [theme.breakpoints.down("md")]: {
                  flexDirection: "column",
                  alignItems: "center",
                },
              }}
            >
              <Box
                sx={{
                  maxWidth: "490px",
                  minHeight: "300px",
                  backgroundColor: "var(--primary-2)",
                  padding: "50px 50px 20px 50px",
                  borderRadius: "30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "2em",
                      fontWeight: "700",
                      marginBottom: "20px",
                    }}
                  >
                    {/* CheckID SaaS */}
                    {t("financialServices.checkIDSaaS")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.6em", fontWeight: "500" }}
                  >
                    {/* Our SDK can be integrated in any mobile application through
                  well-documented APIs. You can have full control of user
                  interaction or leverage the knowledge in our high-level API. */}
                    {t("financialServices.ourSDKCanBeIntegratedInAnyMobile")}
                  </Typography>
                </Box>
                <Button
                  sx={{
                    color: "#fff",
                    border: "2px solid #fff",
                    borderRadius: "29px",
                    padding: "20px 10px",
                    fontSize: "1.6em",
                    fontWeight: "700",
                    lineHeight: "16px",
                    textTransform: "none",
                    svg: {
                      transition: "transform 0.3s",
                    },
                    "&:hover": {
                      svg: {
                        transform: "translateX(10px)",
                      },
                    },
                  }}
                >
                  {/* CheckID SaaS */}
                  {t("financialServices.checkIDSaaS")}
                  <ArrowForwardRoundedIcon />
                </Button>
              </Box>
              <Box
                sx={{
                  maxWidth: "490px",
                  minHeight: "300px",
                  backgroundColor: "var(--primary-2)",
                  padding: "50px 50px 20px 50px",
                  borderRadius: "30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "2em",
                      fontWeight: "700",
                      marginBottom: "20px",
                    }}
                  >
                    {/* CheckID Ready */}
                    {t("financialServices.checkIDReady")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.6em", fontWeight: "500" }}
                  >
                    {/* CheckID Ready is our white label app that can be tailored to
                  the clients’ look and feel and can be up and running within
                  days. */}
                    {t("financialServices.checkIDReadyIsOurWhiteLabelApp")}
                  </Typography>
                </Box>
                <Button
                  sx={{
                    color: "#fff",
                    border: "2px solid #fff",
                    borderRadius: "29px",
                    padding: "20px 10px",
                    fontSize: "1.6em",
                    fontWeight: "700",
                    lineHeight: "16px",
                    textTransform: "none",
                    svg: {
                      transition: "transform 0.3s",
                    },
                    "&:hover": {
                      svg: {
                        transform: "translateX(10px)",
                      },
                    },
                  }}
                >
                  {/* CheckID Ready */}
                  {t("financialServices.checkIDReady")}
                  <ArrowForwardRoundedIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "100px 10px",
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              alignItems: "center",
              "& > div": {
                width: "100%",
              },
            },
          }}
        >
          <Box sx={{ width: "635px" }}>
            <Box
              sx={{
                height: "357px",
                width: "100%",
                backgroundColor: "#EBF6FF",
                borderRadius: "20px",
                marginBottom: "30px",
                "&>img": {
                  width: "auto",
                  height: "100%",
                  display: "block",
                  margin: "0 auto",
                },
                [theme.breakpoints.down("md")]: {
                  overflow: "hidden",
                  "&>img": {
                    width: "100%",
                    height: "auto",
                  },
                },
              }}
            >
              <img className="" src={rabobank} alt="" />
            </Box>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "80%",
                fontSize: "24px",
                fontWeight: "500",
                marginBottom: "30px",
              }}
            >
              {/* "We have grown the online channel for onboarding new customers from
            35% to 60% using CheckID" */}
              {t("financialServices.weHaveGrownTheOnlineChannelForOnboarding")}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", fontWeight: "700" }}
            >
              {/* Emy Leemans */}
              {t("financialServices.emyLeemans")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: "500", marginBottom: "30px" }}
            >
              {/* Product Manager Customer Onboarding Rabobank */}
              {t("financialServices.productManagerCustomerOnboardingRabobank")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                "& a": {
                  fontSize: "16px",
                  fontWeight: "700",
                  textDecoration: "none",
                  color: "var(--primary-2)",
                  svg: {
                    transition: "transform 0.3s",
                  },
                  "&:hover": {
                    svg: {
                      transform: "translateX(10px)",
                    },
                  },
                },
              }}
            >
              <Link to={""}>
                {/* Read about different applications at Rabobank */}
                {t(
                  "financialServices.readAboutDifferentApplicationsAtRabobank"
                )}
                <ArrowForwardRoundedIcon />
              </Link>
            </Typography>
          </Box>
          <Box sx={{ width: "635px" }}>
            <Box
              sx={{
                height: "357px",
                width: "100%",
                backgroundColor: "#EBF6FF",
                borderRadius: "20px",
                marginBottom: "30px",
                "&>img": {
                  width: "auto",
                  height: "100%",
                  display: "block",
                  margin: "0 auto",
                },
                [theme.breakpoints.down("md")]: {
                  overflow: "hidden",
                  "&>img": {
                    width: "100%",
                    height: "auto",
                  },
                },
              }}
            >
              <img className="" src={aegon} alt="" />
            </Box>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "80%",
                fontSize: "24px",
                fontWeight: "500",
                marginBottom: "30px",
              }}
            >
              {/* "It took us only 6 weeks to implement the re- verification
            technology at Aegon from scratch using CheckID" */}
              {t(
                "financialServices.itTookUsOnly6WeeksToImplementTheReVerification"
              )}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", fontWeight: "700" }}
            >
              {/* Rianne Rolsma */}
              {t("financialServices.rianneRolsma")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: "500", marginBottom: "30px" }}
            >
              {/* Product manager Aegon */}
              {t("financialServices.productManagerAegon")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                "& a": {
                  fontSize: "16px",
                  fontWeight: "700",
                  textDecoration: "none",
                  color: "var(--primary-2)",
                  svg: {
                    transition: "transform 0.3s",
                  },
                  "&:hover": {
                    svg: {
                      transform: "translateX(10px)",
                    },
                  },
                },
              }}
            >
              <Link to={""}>
                {/* Learn more about the speed of implementation */}
                {t("financialServices.learnMoreAboutTheSpeedOfImplementation")}
                <ArrowForwardRoundedIcon />
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ paddingBottom: "100px" }}>
          <Box
            sx={{
              margin: "0 auto",
              maxWidth: "1300px",
              backgroundImage: `url(${bg2})`,
              padding: "100px 110px 60px",
              display: "flex",
              alignItems: "center",
              gap: "48px",
              color: "#fff",
              borderRadius: "30px",
              [theme.breakpoints.down("lg")]: {
                flexDirection: "column",
                borderRadius: "0",
              },
              [theme.breakpoints.down("md")]: {
                padding: "20px",
                "& > img": {
                  width: "100%",
                },
              },
            }}
          >
            <img src={challenge} alt="" />
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "4em",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                {/* Let’s talk about your challenge. */}
                {t("financialServices.letsTalkAboutYourChallenge")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.6em",
                  fontWeight: "500",
                  marginBottom: "30px",
                }}
              >
                {/* In a digital world distance does not exist. But how do you realise
              enough trust to do business at a distance? */}
                {t(
                  "financialServices.inADigitalWorldDistanceDoesNotExistButHowDoYouRealise"
                )}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "25px",
                  alignItems: "center",
                  [theme.breakpoints.down("md")]: {
                    flexDirection: "column",
                  },
                }}
              >
                <Button
                  sx={{
                    padding: "21px 38px",
                    borderRadius: "29px",
                    backgroundColor: "#fff",
                    textTransform: "none",
                    fontSize: "1.6em",
                    fontWeight: "700",
                    lineHeight: "16px",
                    "&:hover": {
                      backgroundColor: "#0074ff",
                      color: "#fff",
                    },
                  }}
                >
                  {/* Contact a specialist */}
                  {t("financialServices.contactASpecialist")}
                </Button>
                <Typography
                  variant="body1"
                  sx={{
                    "& a": {
                      fontSize: "16px",
                      fontWeight: "700",
                      textDecoration: "none",
                      color: "#fff",
                      svg: {
                        transition: "transform 0.3s",
                      },
                      "&:hover": {
                        svg: {
                          transform: "translateX(10px)",
                        },
                      },
                    },
                  }}
                >
                  <Link to={""}>
                    {/* Try our CheckID Me app */}
                    {t("financialServices.tryOurCheckIDMeApp")}
                    <ArrowForwardRoundedIcon />
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default FinancialServices;
