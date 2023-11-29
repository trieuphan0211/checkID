import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useTranslation } from "react-i18next";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ADB7C2",
    color: "#000",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "25px 10px",
    border: "1px solid #DADCE4",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#ADB7C2",
    color: "#000",
    fontSize: "16px",
    padding: "25px 10px",
    border: "1px solid #DADCE4",
  },
}));
const StyledTableRow = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    color: "#000",
    width: "495px",
    fontSize: "16px",
    lineHeight: "24px",
    padding: "25px 10px",
    border: "1px solid #DADCE4",
  },
}));

export const TechnicalSpecifications = ({ classHeader, specification }) => {
  const { t } = useTranslation();
  return (
    <Box className={`${classHeader}_specification`}>
      <h1 className={`${classHeader}_specification-header`}>
        {t("products.technical")}
      </h1>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{t("products.item")}</StyledTableCell>
              <StyledTableCell align="left">
                {t("products.specification")}
              </StyledTableCell>
              <StyledTableCell align="left">
                {t("products.item")}
              </StyledTableCell>
              <StyledTableCell align="left">
                {t("products.specification")}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {specification.map((row, index) => (
              <TableRow>
                <StyledTableCell>{row.item}</StyledTableCell>
                <StyledTableRow align="left">
                  {row.specification.split("/n").map((item) => (
                    <>
                      {item}
                      <br />
                    </>
                  ))}
                </StyledTableRow>
                <StyledTableCell align="left">{row.item1}</StyledTableCell>
                <StyledTableRow align="left">
                  {row.specification1.split("/n").map((item) => (
                    <>
                      {item}
                      <br />
                    </>
                  ))}
                </StyledTableRow>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
