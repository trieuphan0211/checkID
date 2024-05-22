import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import background from "../../assets/img/background.png";
import asbIdApp from "../../assets/img/customer/asb-id-app.png";
import asb from "../../assets/img/customer/asb.png";

export const AsbBank = () => {
  document.title = "ASB Bank | CheckID";
  const { t } = useTranslation();
  const tablet = useMediaQuery("(max-width:1230px)");
  return (
    <Box>
      <Box
        sx={{
          padding: "50px 70px 30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#4F9CF9",
          gap: "30px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "15px",
            textTransform: "uppercase",
            fontWeight: "600",
            textAlign: "center",
            color: "#FFE492",
          }}
        >
          {t("asbBank.subHeader")}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            maxWidth: "1000px",
            fontSize: "64px",
            fontWeight: "700",
            lineHeight: "70px",
            color: "#ffffff",
          }}
        >
          {t("asbBank.header")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            fontSize: "16px",
            fontWeight: "500",
            maxWidth: "815px",
            textAlign: "center",
          }}
        >
          {t("asbBank.description")}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "20px",
        }}
      >
        <Box sx={{ maxWidth: "918px", margin: "auto" }}>
          <Box
            className="ratio ratio-16x9"
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              marginBottom: "20px",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/D0iGaUG7qf8?rel=0"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </Box>
          <Box
            sx={{
              borderRight: "2px solid #4F9CF9",
              padding: "0 15px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ textAlign: "right", fontSize: "16px", fontWeight: "500" }}
            >
              {/* We spoke to Andrea McKain, Delivery Lead Know Your Customer at ASB */}
              {t("asbBank.videoTitle")}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "1320px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          padding: " 75px 10px",
          gap: "35px",
          "& img": {
            display: "block",
            margin: "auto",
            "&.gov": {
              width: tablet ? "100%" : "auto",
            },
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
          {/* Know Your Customer at ASB */}
          {t("asbBank.knowYourCustomer")}
        </Typography>
        <Typography variant="body1">
          {/* ASB Bank was originally established in 1874 as the Auckland Savings
          Bank in New Zealand. It is a subsidiary of the Commonwealth Bank
          Australia (CBA). ASB has a reputation for innovation and embracing new
          technologies, as they did with digital identity verification. */}
          {t("asbBank.knowYourCustomerDescription")}
        </Typography>
        <Typography variant="body1">
          {/* We discussed with Andrea McKain the reasons for working with CheckID
          and the results. She is the delivery lead for Know Your Customer at
          ASB and was responsible for the implementation of CheckID at ASB. */}
          {t("asbBank.knowYourCustomerDescription2")}
        </Typography>
        <img src={asb} />
        <Typography variant="body1">
          {/* ASB already had a digital identity verification solution in place,
          launched in 2018. This solution was based on optical, OCR technology
          however ASB were disappointed with its conversion. The process was
          cumbersome and New Zealand money-laundering regulations meant that it
          required a secondary matching electronic confirmation as well. After
          scanning, customers also needed to manually check the data read before
          they could continue. */}
          {t("asbBank.knowYourCustomerDescription3")}
        </Typography>
        <Typography variant="body1">
          {/* The process also led to many false negatives. In the end, many people
          still had to visit a branch office, something that was hard or even
          impossible under COVID. It was frequently not a seamless user
          experience. ASB needed a simpler solution to grow conversion and to
          lower pressure on branch offices. */}
          {t("asbBank.knowYourCustomerDescription4")}
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
              {/* “It just wasn't a seamless user experience with OCR, leading to
              poor conversion” */}
              {t("asbBank.quote")}
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
              {/* Andrea McKain, ASB */}
              {t("asbBank.quoteAuthor")}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h1">
          {/* ASB ID app */}
          {t("asbBank.asbIdApp")}
        </Typography>
        <Typography variant="body1">
          {/* ASB become aware of the possibilities of NFC technology and Andrea
          quickly came across CheckID. ASB uses the CheckID SaaS SDK to
          integrate NFC as well as holder verification in their ASB ID app. A
          proof-of-concept phase convinced the team of the possibilities and in
          April 2021 ASB went live with its new solution. */}
          {t("asbBank.asbIdAppDescription")}
        </Typography>
        <img src={asbIdApp} className="gov" />
        <Typography variant="body1">
          {/* This app has big competitive advantage: ASB still is the only bank in
          Asia Pacific to use NFC technology! The app supports passports from
          over 130 countries, which is very important as New Zealand has a large
          population of immigrants. ASB is also looking into the possibility to
          re-introduce driving licenses to the customer journey, based on
          capture of the photo page by CheckID. */}
          {t("asbBank.asbIdAppDescription2")}
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
              {/* “Customer feedback has been awesome, and the user experience is
              fantastic” */}
              {t("asbBank.quote2")}
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
              {t("asbBank.quoteAuthor2")}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h1">
          {/* Grow conversion with NFC */}
          {t("asbBank.growConversion")}
        </Typography>
        <Typography variant="body1">
          {/* NFC has created a high quality customer journey. Andrea states that
          “Customer feedback has been awesome, and the user experience is
          fantastic.” */}
          {t("asbBank.growConversionDescription")}
        </Typography>
        <Typography variant="body1">
          {/* Conversion for customers who commence the passport read process in the
          ASB ID app has grown to over 89% (over 99% on iOS) and the number of
          customers who no longer need to visit a branch has increased fivefold. */}
          {t("asbBank.growConversionDescription2")}
        </Typography>
        <Typography variant="body1">
          {/* The ASB ID app is primarily used for onboarding identity verification
          but is also used to verify the identity of existing customers where
          required. */}
          {t("asbBank.growConversionDescription3")}
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
          {/* Your key take away */}
          {t("asbBank.yourKeyTakeAway")}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#008AFF",
            borderRadius: "29px",
            padding: "17px 38px",
          }}
        >
          {/* Download Case Study ASB */}
          {t("asbBank.downloadCaseStudy")}
        </Button>
      </Box>
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
          {t("asbBank.moreCustomerStories")}
          <FaArrowRight />
        </Typography>
      </Box>
    </Box>
  );
};
