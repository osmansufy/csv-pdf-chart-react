import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  ReactPDF,
  PDFDownloadLink,
  StyleSheet,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import PdfDocument from "./PdfDocument";
import { Button } from "@material-ui/core";
// Create styles

const PdfCreate = () => {
  const resultsData = useSelector((state) => state.fileResults.csvResult);
  const [pdfImg, setPdfImg] = useState();
  // const [tableImg, setTableImg] = useState();
  const div2PDF = () => {
    let input = window.document.getElementsByClassName("recharts-wrapper")[0];

    let img;
    html2canvas(input).then((canvas) => {
      img = canvas.toDataURL("image/png");
      console.log("img", img);
      setPdfImg(img);
    });
  };


  useEffect(() => {
    div2PDF();
    
  }, []);
  console.log(pdfImg);
  return (
    <div className="pdfDownload">
      <PDFDownloadLink
        document={
          <PdfDocument data={resultsData} 
         
           img={pdfImg} />
        }
        fileName="csv.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? (
            "Loading document..."
          ) : (
            <Button variant="contained" color="secondary">
              Download Result as PDF!
            </Button>
          )
        }
      </PDFDownloadLink>

    </div>
  );
};

export default PdfCreate;
