import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document,PDFViewer,ReactPDF,PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
import html2canvas from "html2canvas";
import PdfDocument from './PdfDocument';
// Create styles

const PdfCreate = () =>{
    const resultsData=useSelector(state=>state.fileResults.csvResult)
    const [pdfImg,setPdfImg]=useState()
    const div2PDF = () => {
        /////////////////////////////
        // Hide/show button if you need
        /////////////////////////////
    
    
        let input = window.document.getElementsByClassName("recharts-wrapper")[0];
    console.log(input);
    let img
        html2canvas(input).then(canvas => {
          img = canvas.toDataURL("image/png");
          console.log("img",img);
          setPdfImg(img)
        });
      
      };
      useEffect(()=>{
        div2PDF()   
      },[])
      console.log(pdfImg);
    return (
      
        <div>
            
          <PDFDownloadLink document={<PdfDocument data={resultsData} img={pdfImg} />} fileName="csv.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download now!'
            }
          </PDFDownloadLink>
        </div>
      );
    
}

export default PdfCreate