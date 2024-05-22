import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import background from "../../assets/img/background.png";
import thirdfort from "../../assets/img/customer/thirdfort.png";

export const ThirdFort = () => {
  document.title = "ThirdFort | CheckID";
  const { t } = useTranslation();
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div className="thirdfort">
      <Box className="thirdfort_header d-flex flex-column align-items-center">
        <h4 className="thirdfort_header-subheader text-center">
          {/* THIRDFORT */}
          {t("thirdfort.subHeader")}
        </h4>
        <Typography
          variant="h1"
          className="thirdfort_header-header"
          sx={
            matches
              ? {
                  fontSize: "40px",
                }
              : {
                  fontSize: "64px",
                }
          }
        >
          {/* No more risky business for lawyers through Thirdfort */}
          {t("thirdfort.header")}
        </Typography>
        <p className="thirdfort_header-context">
          {/* Fraud is a social blight and Thirdfort are on a mission to remove this
          risk from property transactions so more people can move fearlessly.
          Working with lawyers, agents and other regulated sectors, Thirdfort
          automates ID and anti-money laundering checks to let good people get
          on with their work and make life easier for their clients. */}
          {t("thirdfort.description")}
        </p>
      </Box>
      <Box className="thirdfort_video d-flex flex-column ">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/D0iGaUG7qf8?rel=0"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
        <p className="thirdfort_video-title">
          {/* We spoke to Jack Bidgood, co-founder and managing director of
          Thirdfort. */}
          <p>{t("thirdfort.videoTitle")}</p>
        </p>
      </Box>
      <Box
        sx={{
          padding: "75px 10px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          maxWidth: "1300px",
          margin: "auto",
          "& img": {
            display: "block",
            margin: "auto",
          },
          "& h1": {
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "50px" /* 125% */,
          },
          "&>p": {
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "26px",
          },
        }}
      >
        <Typography variant="h1">
          {/* Onboard clients quickly, securely and entirely remotely */}
          {t("thirdfort.onboardClients")}
        </Typography>
        <Typography variant="body1">
          {/* In a simple to use app, Thirdfort combines Open Banking technology,
          document verification and facial recognition technology to offer fast
          and fully remote compliance checks that can be completed by clients
          from anywhere. We spoke to Jack Bidgood, co-founder and managing
          director of Thirdfort. */}
          {t("thirdfort.onboardClientsDescription")}
        </Typography>
        <img src={thirdfort} />
        <Typography variant="body1">
          {/* Fraud through UK property is a £216m/year issue and growing fast.
          Lawyers are on the front line and are required to carry out slow and
          painful ID and anti-money laundering checks involving physical
          documents and in person meetings. These checks massively slow down
          property transactions which currently stand at 20 weeks. */}
          {t("thirdfort.onboardClientsDescription2")}
        </Typography>
        <Typography variant="body1">
          {/* Thirdfort are consistently looking to use the latest technology to
          make sure they are offering the most robust and secure ID checks that
          are easy to use by clients. */}
          {t("thirdfort.onboardClientsDescription3")}
        </Typography>
        <Typography variant="body1">
          {/* The legal industry is very risk averse. They want to make sure that
          when technology is adopted, risks are always mitigated. COVID has
          changed that mentality and this has created opportunity for change. */}
          {t("thirdfort.onboardClientsDescription4")}
        </Typography>
        <Typography variant="h1">
          {/* HM Land Registry Digital ID Standard */}
          {t("thirdfort.hmLandRegistry")}
        </Typography>
        <Typography variant="body1">
          {/* Thirdfort worked alongside HM Land Registry to ensure that its
          upgraded offering is fully aligned with HM Land Registry’s new Digital
          ID Standard. Thirdfort Standard incorporates technology from CheckID
          and CheckID partner iProov. The government-grade offering is at the
          helm of fraud protection and, crucially, means that those using
          Thirdfort Standard will be compliant with HM Land Registry’s Digital
          ID Standard. */}
          {t("thirdfort.hmLandRegistryDescription")}
        </Typography>
        <Typography variant="body1">
          {/* Thirdfort uses Open Banking to get access to bank details as well.
          Getting the journey right was important; it should be an
          out-of-the-box solution for lawyers. They needed to educate the users
          on why they should use the app and what it does. */}
          {t("thirdfort.hmLandRegistryDescription2")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            maxWidth: "1000px",
            margin: "auto",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="57"
            viewBox="0 0 56 57"
            fill="none"
          >
            <g clip-path="url(#clip0_61_3979)">
              <path
                d="M0 14.72C0 6.98797 6.268 0.719971 14 0.719971H42C49.732 0.719971 56 6.98797 56 14.72V42.72C56 50.452 49.732 56.72 42 56.72H14C6.268 56.72 0 50.452 0 42.72V14.72Z"
                fill="#008AFF"
              />
              <path
                d="M29.826 32.6839C29.826 31.4439 30.087 30.4659 31 28.0529L34.065 18.9199H38.174L35.761 28.6399C37.457 29.2269 38.5 30.6619 38.5 32.6839C38.5 35.2939 36.609 37.1199 34.196 37.1199C31.652 37.1199 29.826 35.2279 29.826 32.6839ZM17.5 32.6839C17.5 31.4439 17.76 30.4659 18.674 28.0529L21.739 18.9199H25.848L23.435 28.6399C25.13 29.2269 26.174 30.6619 26.174 32.6839C26.174 35.2939 24.283 37.1199 21.87 37.1199C19.326 37.1199 17.5 35.2279 17.5 32.6839Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_61_3979">
                <rect
                  width="56"
                  height="56"
                  fill="white"
                  transform="translate(0 0.719971)"
                />
              </clipPath>
            </defs>
          </svg>
          <Box>
            <Typography
              variant="body1"
              sx={{
                color: "#008AFF",
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "37px",
              }}
            >
              {/* “You never meet somebody that says; ‘I just bought a house the
              other day and that was really fast, enjoyable and it went really
              smooth and there were no problems on the journey.’ We want to
              change that.” */}
              {t("thirdfort.quote")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "right",
                color: "#ccc",
                fontSize: "14px",
                fontWeight: "700",
                marginTop: "15px",
              }}
            >
              {/* Jack Bidgood, Co-founder Thirdfort */}
              {t("thirdfort.quoteAuthor")}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1">
          {/* The Digital ID Standard was unveiled in March 2021 to encourage
          digital identity checks in the conveyancing process and drive the
          industry towards a clear set of standards in e-ID. Those firms meeting
          the standard have been offered a ‘Safe Harbour’ to protect them from
          recourse - on the grounds that identity checks were inadequate - in
          any claims resulting from the registration of a fraudulent
          transaction. To meet the Digital ID Standard, providers must utilise a
          range of cutting-edge technologies including biometric facial
          recognition, NFC and liveness checking to remotely verify the
          authenticity of identity documents, such as passports. */}
          {t("thirdfort.hmLandRegistryDescription3")}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          padding: "75px 10px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "40px",
            color: "#fff",
          }}
        >
          {/* Key take away for identification */}
          {t("thirdfort.keyTakeAway")}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#008AFF",
            borderRadius: "29px",
            padding: "17px 38px",
          }}
        >
          {/* Download Case Study Thirdfort */}
          {t("thirdfort.downloadCaseStudy")}
        </Button>
      </Box>
      <Box
        sx={{
          padding: "75px 10px 50px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          maxWidth: "1300px",
          margin: "auto",

          "& h1": {
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "50px" /* 125% */,
          },
          "&>p": {
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "26px",
          },
        }}
      >
        <Typography variant="h1">
          {/* Improved customer journey */}
          {t("thirdfort.improvedCustomerJourney")}
        </Typography>
        <Typography variant="body1">
          {/* For lawyers, using Thirdfort Standard has a big impact. Not only does
          it remove the chance of recourse should fraud occur, but they can also
          rest assured they are using the latest security technology to keep
          deter and detect fraudsters. It reduces their liability risks
          substantially. This is a very strong incentive for conveyancers and
          law firms to join. */}
          {t("thirdfort.improvedCustomerJourneyDescription")}
        </Typography>
        <Typography variant="body1">
          {/* Compared to the original services of Thirdfort the customer journey
          has improved which has been reflected in the uptake of Thirdfort’s
          Standard ID check. Thirdfort has grown rapidly over the past year, off
          the back of the Covid-19 pandemic and the subsequent acceleration of
          law firm and conveyancer digitization. */}
          {t("thirdfort.improvedCustomerJourneyDescription2")}
        </Typography>
        <Typography variant="body1">
          {/* Thirdfort’s platform is now used to remotely ‘onboard’ over 30,000
          clients each month – a ten-fold increase on pre-pandemic numbers - on
          behalf of more than 500 law firms and property businesses. By now
          about 10% of the UK market flows through the Thirdfort solution. */}
          {t("thirdfort.improvedCustomerJourneyDescription3")}
        </Typography>
      </Box>
      <Divider
        sx={{
          borderColor: "#DADCE4",
          maxWidth: "1300px",
          margin: "auto",
        }}
      />
      <Box sx={{ maxWidth: "1300px", margin: "auto", padding: "30px 10px" }}>
        <Typography
          variant="text"
          sx={{
            gap: "10px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "700",
            color: "var(--primary-2)",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            cursor: "pointer",

            "&:hover svg": {
              transition: "all 0.3s ease",
              transform: "translateX(5px)",
            },
          }}
        >
          {/* More customer stories */}
          {t("thirdfort.moreCustomerStories")}
          <FaArrowRight />
        </Typography>
      </Box>
    </div>
  );
};
