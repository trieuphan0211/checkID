import styled from "@emotion/styled";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import bg2 from "../../assets/img/background.png";
import bg from "../../assets/img/industries/background.svg";
import bg1 from "../../assets/img/industries/background1.svg";
import certificateSecurity from "../../assets/img/industries/certificate-security1.png";
import contactless from "../../assets/img/industries/contactless.png";
import digitalSigning from "../../assets/img/industries/digital_signing.png";
import RianneRolsmaAegon from "../../assets/img/industries/Rianne-rolsma-aegon.png";
import maximalScalability from "../../assets/img/industries/maximal-scalability.png";
import officeReadidRobin from "../../assets/img/industries/office-readid-robin-staand.png";
import { ReactComponent as PackageCheck } from "../../assets/img/industries/package-check.svg";
import { ReactComponent as SmartPhoneInfo } from "../../assets/img/industries/smartphone-info.svg";
import { ReactComponent as TwoToneGraph } from "../../assets/img/industries/TwoToneGraph.svg";
import useCaseRabobankReadid from "../../assets/img/industries/use-case-rabobank-readid.png";
import webinarAegonSpeed from "../../assets/img/industries/webinar-aegon-speed.png";
import rianneRolsma from "../../assets/img/trusted_identity_verification/Rianne-rolsma.png";

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
const DigitalSigning = () => {
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
            alignItems: "center",
            justifyContent: "space-between",
            "& >img": {
              maxWidth: "50%",
              height: "auto",
            },
            [theme.breakpoints.down("xl")]: {
              position: "relative",
              "& >img": {
                maxWidth: "100%",
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
              maxWidth: "530px",
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
              {/* IDENTITY VERIFICATION FOR QUALIFIED TRUST SERVICE PROVIDERS */}
              {t(
                "DigitalSigning.identityVerificationForQualifiedTrustServiceProviders"
              )}
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
              {/* Identity Verification at the highest eIDAS Trust Levels */}
              {t(
                "DigitalSigning.identityVerificationAtTheHighestEIDASTrustLevels"
              )}
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
              {/* Digital trust is vital in our modern economy, where transactions
              take place digitally, anytime, anywhere. Digital signature
              providers create easy and secure access to e-services by providing
              qualified certificates to users. We bring the highest degree of
              digital trust and scalability to customer identification, eIDAS
              certified. */}
              {t("DigitalSigning.digitalTrustIsVitalInOurModernEconomy")}
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
          <img
            className="financial_conversionRate-img"
            src={digitalSigning}
            alt=""
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            padding: "100px 50px",
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
              <PackageCheck />
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
              {/* Evidence package for audits */}
              {t("DigitalSigning.evidencePackageForAudits")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: "500", textAlign: "center" }}
            >
              {/* We document every verification in an evidence package, which you
              can store for audit purposes. Creating proof of reliability. */}
              {t(
                "DigitalSigning.weDocumentEveryVerificationInAnEvidencePackage"
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
              <TwoToneGraph />
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
              {/* Instant and automatic identity verification */}
              {t("DigitalSigning.instantAndAutomaticIdentityVerification")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: "500", textAlign: "center" }}
            >
              {/* You do not need any manual steps or personal contact. Make your
              onboarding and re-verification available 24 x 7. */}
              {t("DigitalSigning.youDoNotNeedAnyManualStepsOrPersonalContact")}
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
              <SmartPhoneInfo />
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
              {/* Powered by NFC */}
              {t("DigitalSigning.poweredByNFC")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: "500", textAlign: "center" }}
            >
              {/* NFC-based identity verification combines trust, security, and
              scalability for TSPs at the highest levels of confidence. */}
              {t("DigitalSigning.nfcBasedIdentityVerificationCombinesTrust")}
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
              {/* Competitive cost reduction, unmatched security, excellent customer
              experience */}
              {t("DigitalSigning.competitiveCostReduction")}
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
              {/* Customer onboarding and re-verification is a crucial step for
              Trust Service Providers. Traditionally, this meant that customers
              must come to an office or receive a visiting agent at home. A
              qualified official then needed to manually verify the passport
              data against the bank’s existing information. */}
              {t("DigitalSigning.customerOnboardingAndReVerification")}
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
              {/* A costly, time-consuming and intrusive process. Trust Service
              Providers need instant remote identity verification to satisfy
              their customers. Reach eIDAS High with CheckID. */}
              {t("DigitalSigning.aCostlyTimeConsumingAndIntrusiveProcess")}
            </Typography>
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
                {t("DigitalSigning.certifiedSecurity")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "40px",
                }}
              >
                {/* Mobile-ID has obtained certification through a unique
                combination of security certificates. CheckID's customers and
                users trust Mobile-ID with highly sensitive security and privacy
                information. Mobile-ID has the responsibility to not only be
                secure but also to prove that we are secure. This provides the
                necessary TSP certification for qualified signatures. */}
                {t("DigitalSigning.mobileIDHasObtainedCertification")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "25px",
                }}
              >
                {/* Mobile-ID, has extended its baseline ISO27001 security with
                three additional certifications: ISO/IEC 27701 for Privacy
                Management, eIDAS module for Qualified Trust Service Providers
                (digital signatures), and eIDAS electronic identification (eID)
                at assurance level High. */}
                {t("DigitalSigning.mobileIDHasExtendedItsBaselineISO27001")}
              </Typography>{" "}
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "25px",
                }}
              >
                {/* As a result, you save auditing time and costs, without the risk
                of the auditor spotting vulnerabilities. Achieve eIDAS
                compliance with remote identity verification. */}
                {t("DigitalSigning.asAResultYouSaveAuditingTimeAndCosts")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "40px",
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
                  {/* Our world-first certificate package */}
                  {t("DigitalSigning.ourWorldFirstCertificatePackage")}
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
                <img src={RianneRolsmaAegon} alt="Financial service" />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "16px", fontWeight: "700" }}
                  >
                    {/* Clemens Wanko */}
                    {t("DigitalSigning.clemensWanko")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      marginBottom: "20px",
                    }}
                  >
                    {/* TÜV Austria */}
                    {t("DigitalSigning.tuvaustria")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontStyle: "italic",
                    }}
                  >
                    {/* "Certifications express an independent quality statement
                    from an independent body!" */}
                    {t("DigitalSigning.certificationsExpressAnIndependent")}
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
            <img src={contactless} alt="Financial service" />
            <Box sx={{ padding: "0 20px" }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "40px",
                  fontWeight: "700",
                  marginBottom: "25px",
                }}
              >
                {/* Contactless, 24x7 */}
                {t("DigitalSigning.contactless24x7")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                {/* Mobile-ID's NFC-based remote identity verification replaces
                physical verification, and drastically lowers onboarding and
                reverification costs. It is more secure than physical or optical
                approaches. CheckID creates the scalability you need for large
                scale adoption by your mobile-minded users. */}
                {t(
                  "DigitalSigning.mobileIDsNFCBasedRemoteIdentityVerification"
                )}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                {/* As competition is strong in the digital signature market,
                digitisation and cost reduction are crucial for competitiveness. */}
                {t("DigitalSigning.asCompetitionIsStrongInTheDigitalSignature")}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                {/* Key features summarised */}
                {t("DigitalSigning.keyFeaturesSummarised")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                <FiberManualRecordIcon
                  sx={{
                    fontSize: "10px",
                    color: "var(--primary-2)",
                    marginRight: "16px",
                  }}
                />{" "}
                {/* Online identity verification, anytime, anywhere, instantly */}
                {t("DigitalSigning.onlineIdentityVerificationAnytimeAnywhere")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                <FiberManualRecordIcon
                  sx={{
                    fontSize: "10px",
                    color: "var(--primary-2)",
                    marginRight: "16px",
                  }}
                />{" "}
                {/* Evidence package for audit trial */}
                {t("DigitalSigning.evidencePackageForAuditTrial")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                <FiberManualRecordIcon
                  sx={{
                    fontSize: "10px",
                    color: "var(--primary-2)",
                    marginRight: "16px",
                  }}
                />{" "}
                {/* Instant scalability to high volumes */}
                {t("DigitalSigning.instantScalabilityToHighVolumes")}
              </Typography>{" "}
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                <FiberManualRecordIcon
                  sx={{
                    fontSize: "10px",
                    color: "var(--primary-2)",
                    marginRight: "16px",
                  }}
                />{" "}
                {/* Document verification combined with face verification */}
                {t("DigitalSigning.documentVerificationCombinedWithFace")}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${bg1})`,
            backgroundPositionY: "150px",
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
                  99,97%
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: "24px",
                fontWeight: "500",
                maxWidth: "730px",
                textAlign: "center",
              }}
            >
              {/* up-time reported by UK home Office for the EU Settlement Scheme
              App. */}
              {t("DigitalSigning.upTimeReportedByUKHomeOffice")}
            </Typography>
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
                {/* Maximal scalability */}
                {t("DigitalSigning.maximalScalability")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "40px",
                }}
              >
                {/* The need for identification can vary over time. New use cases or
                regulations can cause a steep growth in demand for trusted
                identification. CheckID is fully automatic and has almost
                unlimited scalability, unlike optical verification and video
                identification. */}
                {t("DigitalSigning.theNeedForIdentificationCanVaryOverTime")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "25px",
                }}
              >
                {/* We run our service in secure public cloud infrastructures,
                fitting to the region, and scaling with demand. You do not need
                any manual labour or employee training. We continuously monitor
                our solutions to grow with the demand. If demand goes down, we
                can scale down with it.  */}
                {t("DigitalSigning.weRunOurServiceInSecurePublicCloud")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "25px",
                }}
              >
                {/* CheckID can handle hundreds of thousands of verifications per
                day. */}
                {t("DigitalSigning.checkIDCanHandleHundredsOfThousands")}
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
                    {/* Marcel Wendt */}
                    {t("DigitalSigning.marcelWendt")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      marginBottom: "20px",
                    }}
                  >
                    {/* Managing director of Digidentity */}
                    {t("DigitalSigning.managingDirectorOfDigidentity")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontStyle: "italic",
                    }}
                  >
                    {/* "During COVID, we were able to scale up to 120.000 digital
                    onboardings a day thanks to CheckID" */}
                    {t("DigitalSigning.duringCovidWeWereAbleToScaleUp")}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <img src={maximalScalability} alt="Financial service" />
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
              {t("DigitalSigning.startToday")}
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
                "DigitalSigning.solutionsToSolveAnyIdentityVerificationChallenge"
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
              technology for yourself. Use CheckID SaaS to integrate into your
              own app or use our ready-to-use app to hit the ground running.  */}
              {t("DigitalSigning.weProvideAFreePersonalAppCheckIDMe")}
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
                  maxWidth: "625px",
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
                    {t("DigitalSigning.checkIDSaaS")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.6em", fontWeight: "500" }}
                  >
                    {/* Developers can integrate our SDK into any mobile application
                    using well-documented APIs. You can have full control of
                    user interaction or leverage the knowledge in our high-level
                    API. Combine with face verification for the highest trust
                    levels. */}
                    {t("DigitalSigning.developersCanIntegrateOurSDK")}
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
                  {t("DigitalSigning.checkIDSaaS")}
                  <ArrowForwardRoundedIcon />
                </Button>
              </Box>
              <Box
                sx={{
                  maxWidth: "625px",
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
                    {t("DigitalSigning.checkIDReady")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.6em", fontWeight: "500" }}
                  >
                    {/* CheckID Ready is our ready-to-use app with lots of
                    customisation options. It can be up and running within days,
                    with or without face verification. */}
                    {t("DigitalSigning.checkIDReadyIsOurReadyToUseApp")}
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
                  {t("DigitalSigning.checkIDReady")}
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
              <img className="" src={useCaseRabobankReadid} alt="" />
            </Box>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "95%",
                fontSize: "24px",
                fontWeight: "500",
                marginBottom: "30px",
              }}
            >
              {/* "If you want to be sure that the identity document is real and is
              in use right now then I see no real alternative to NFC and
              biometrics.” */}
              {t("DigitalSigning.ifYouWantToBeSureThatTheIdentityDocument")}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", fontWeight: "700" }}
            >
              {/* Kalev Pihl */}
              {t("DigitalSigning.kalevPihl")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: "500", marginBottom: "30px" }}
            >
              {/* CEO of SK ID Solutions */}
              {t("DigitalSigning.ceoOfSKIDSolutions")}
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
                {/* Read the full story of SK ID Solutions from Estonia */}
                {t("DigitalSigning.readTheFullStoryOfSKIDSolutionsFromEstonia")}
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
              <img className="" src={webinarAegonSpeed} alt="" />
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
              {/* Before using CheckID technology, there was 60% manually entry by
              typing in the data of the identity documents. */}
              {t("DigitalSigning.beforeUsingCheckIDTechnologyThereWas")}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", fontWeight: "700" }}
            >
              {/* Digidentity */}
              {t("DigitalSigning.digidentity")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: "500", marginBottom: "30px" }}
            >
              {/* Product manager Aegon */}
              {t("DigitalSigning.productManagerAegon")}
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
                {/* How Digidentity was able to scale under COVID */}
                {t("DigitalSigning.howDigidentityWasAbleToScaleUnderCOVID")}
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
            <img src={officeReadidRobin} alt="" />
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "4em",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                {/* Let’s discuss your challenge. */}
                {t("DigitalSigning.letsDiscussYourChallenge")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.6em",
                  fontWeight: "500",
                  marginBottom: "30px",
                }}
              >
                {/* How can we help you to lower costs and increase your
                competitiveness in qualified digital signatures? */}
                {t("DigitalSigning.howCanWeHelpYouToLowerCosts")}
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

export default DigitalSigning;
