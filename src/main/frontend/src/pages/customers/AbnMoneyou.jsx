import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import background from "../../assets/img/background.png";
import moneyou from "../../assets/img/customer/Moneyou.png";

export const AbnMoneyou = () => {
  document.title = "ABN Moneyou | CheckID";
  const { t } = useTranslation();
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div className="abnmoneyou">
      <Box className="abnmoneyou_header d-flex flex-column align-items-center">
        <h4 className="abnmoneyou_header-subheader text-center">
          {/* Moneyou | Florius | ABN AMRO */}
          {t("abnMoneyou.subheader")}
        </h4>
        <Typography
          variant="h1"
          className="abnmoneyou_header-header"
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
          {/* A secure digital solution for a mortgage application process */}
          {t("abnMoneyou.header")}
        </Typography>
        <p className="abnmoneyou_header-context">
          {/* Moneyou raised the bar in identity verification for their customers
          when applying for a mortgage. With CheckID they achieve a higher level
          of confidence and 96% of all people that start the process finish it
          successfully in the first attempt.  */}
          {t("abnMoneyou.context")}
        </p>
      </Box>
      <Box className="abnmoneyou_video d-flex flex-column ">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/PoFzof7ah84?rel=0"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
        <p className="abnmoneyou_video-title">
          {/* We spoke to Justus Damman about their digital channels */}
          {t("abnMoneyou.videoTitle")}
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
          {/* The identification challenges of Moneyou  */}
          {t("abnMoneyou.identityVerification")}
        </Typography>
        <Typography variant="body1">
          {/* ABN AMRO has several labels for mortgages, including Moneyou, Florius
          and ABN AMRO itself. They all use the same platform. In the Dutch
          mortgage market, they are one of the most innovative players. */}
          {t("abnMoneyou.abnAmro")}
        </Typography>
        <img src={moneyou} />
        <Typography variant="body1">
          {/* Normally the identity verification was part of the responsibility of
          the notary, just before the transfer of the money and the real-estate;
          there was very little risk. Identity verification now needs to be done
          at the beginning of the process, even before giving the customer an
          offer. */}
          {t("abnMoneyou.normallyTheIdentity")}
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
              {/* “We reached a very high success rate of 96%, higher than we even
              hoped for” */}
              {t("abnMoneyou.weReached")}
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
              {/* Justus Damman, Moneyou */}
              {t("abnMoneyou.justusDamman")}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1">
          {/* For these KYC processes, the online mortgage application process, and
          making it possible for our customers to make changes to their mortgage
          themselves digitally, Moneyou had to know exactly whom they were
          dealing with via a digital solution. */}
          {t("abnMoneyou.forTheseKYC")}
        </Typography>
        <Typography variant="body1">
          {/* They want to be “best in class” for their over 15k customers so “just
          good enough” was not sufficient. Moneyou needed a solution that is
          secure and can be applied easily in the initial phases of the process.
          Compliance and KYC are very important in the banking industry
          nowadays. */}
          {t("abnMoneyou.theyWantToBe")}
        </Typography>
        <Typography variant="body1">
          {/* This was the reason to raise the bar in identity verification for
          Moneyou. In CheckID they have found a partner to create a fully
          digital identity verification process, compliant to the highest
          European identity standards (eIDAS high). */}
          {t("abnMoneyou.thisWasTheReason")}
        </Typography>
        <Typography variant="body1">
          {/* Moneyou uses CheckID Ready, including face verification. Their
          research indicated that users like to use a separate app, just for
          identification, that can be removed afterwards. They, therefore, use
          the out of the box app, instead of integrating it into the Moneyou
          banking app. This helped to implement quickly as well. */}
          {t("abnMoneyou.moneyouUses")}
        </Typography>
        <Typography variant="h1">
          {/* Instant identity verification, 24x7 */}
          {t("abnMoneyou.instantIdentity")}
        </Typography>
        <Typography variant="body1">
          {/* They introduced NFC-based identity verification with CheckID Ready,
          branded with their style, triggered with a QR-code in the web flow. In
          a few minutes, the full verification is done, no manual steps are
          involved. Identification proof is obtained from the service and is
          kept for record-keeping, fully GDPR compliant. */}
          {t("abnMoneyou.theyIntroduced")}
        </Typography>
        <Typography variant="body1">
          {/* Most of the work in implementing identity verification with CheckID
          was not the technology. The difficulty was to convince people in the
          bank of the new concept and the new way of thinking. Moving from
          face-to-face verification to digital verification is difficult to get
          a grip on for non-technical people at the bank, because the solution
          is high-tech. When people see CheckID Me, our free personal app, and
          the test cases, people started to understand the possibilities and
          strength of this solution for their clients and for the bank. */}
          {t("abnMoneyou.mostOfTheWork")}
        </Typography>
        <Typography variant="body1">
          {/* Afterwards, people were really pleased with what came out. The reason
          for choosing CheckID with face verification with iProov is that it is
          fully automated, without any human interaction. This makes it instant
          identity verification, 24x7, as well as very secure identity
          verification. */}
          {t("abnMoneyou.afterwardsPeople")}
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
          {/* Easy to take and share */}
          {t("abnMoneyou.easyToTake")}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#008AFF",
            borderRadius: "29px",
            padding: "17px 38px",
          }}
        >
          {/* Download Case Study Moneyou */}
          {t("abnMoneyou.downloadCaseStudy")}
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
          {/* The results using CheckID */}
          {t("abnMoneyou.theResults")}
        </Typography>
        <Typography variant="body1">
          {/* Customers really appreciate the solution, they find it very easy to
          use. Moneyou reached a really high success rate: 96% of all people
          that start the process finish it successfully in first attempt. This
          was higher than we expected and hoped for. */}
          {t("abnMoneyou.customersReally")}
        </Typography>
        <Typography variant="body1">
          {/* With CheckID, Moneyou achieves a higher level of confidence.
          Therefore, they no longer offer IDIN (a Dutch banking service for
          login), which provides a lower level of confidence. The new proc ss
          outperformed the old on quality and usability. It became the preferred
          process by their customers and also Legal and Compliance. An
          additional benefit is that data quality with regards to personal data
          also improved. */}
          {t("abnMoneyou.withCheckID")}
        </Typography>
        <Typography variant="body1">
          {/* Personal data is now processed digitally instead of manually. That
          prevents personal mistakes in capturing personal data. This is also
          beneficiary for other processes like KYC and credibility checks as
          they can now investigate based on exact data without spelling mistakes
          in initials, last names and date of birth. verification. */}
          {t("abnMoneyou.personalData")}
        </Typography>
        <Typography variant="body1">
          {/* In the future, ABN AMRO is thinking of introducing it into the
          intermediary channel as well, applying the lessons learned with
          Moneyou. Possibly the use cases will extend into reverification and
          digital signing. */}
          {t("abnMoneyou.inTheFuture")}
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
          {t("abnMoneyou.moreCustomerStories")}
          <FaArrowRight />
        </Typography>
      </Box>
    </div>
  );
};
