import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import PdfCreate from "../Pdf/PdfCreate";
import Charts from "../Charts/Charts";
import { Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const FormResult = () => {
  const classes = useStyles();

  const resultsData = useSelector((state) => state.fileResults.csvResult);
  console.log(resultsData);
  return (
    <Container>
      <div className="menu">
        {" "}
        <Link to="/">
          <Button variant="contained" color="primary">
            Go Back To Home
          </Button>
        </Link>{" "}
      </div>
      <TableContainer className="resultTable" component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Project Name</StyledTableCell>
              <StyledTableCell align="left">Client Name</StyledTableCell>
              <StyledTableCell align="left">Contractor Name</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="left">{resultsData.name}</StyledTableCell>
              <StyledTableCell align="left">
                {resultsData.client}
              </StyledTableCell>
              <StyledTableCell align="left">
                {resultsData.contractor}
              </StyledTableCell>
              <StyledTableCell align="left">
                {resultsData.description}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer className="resultTable" component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Max X</StyledTableCell>
              <StyledTableCell align="left">Min X</StyledTableCell>
              <StyledTableCell align="left">Max Y</StyledTableCell>
              <StyledTableCell align="left">Min Y</StyledTableCell>
              <StyledTableCell align="left">Max Z</StyledTableCell>
              <StyledTableCell align="left">Min Z</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="left">
                {resultsData.max_X}
              </StyledTableCell>
              <StyledTableCell align="left">
                {resultsData.min_X}
              </StyledTableCell>
              <StyledTableCell align="left">
                {resultsData.max_Y}
              </StyledTableCell>
              <StyledTableCell align="left">
                {resultsData.min_Y}
              </StyledTableCell>
              <StyledTableCell align="left">
                {resultsData.max_Z}
              </StyledTableCell>
              <StyledTableCell align="left">
                {resultsData.min_Z}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <PdfCreate />
      <Charts />
    </Container>
  );
};
export default FormResult;
