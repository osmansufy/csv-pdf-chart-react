import React from 'react';
import { Page, Text, View, Document,PDFViewer,Image,PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    tableRow:{
   flexDirection: 'column',
   fontSize:"12",
   justifyContent:"space-between"
    },
    tableHead:{
        margin:10
    }
  
  });

 
const PdfDocument = ({data,img}) => {
 
    console.log(data);
    return (
        <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
    
            <View style={styles.tableRow}>
          
     
        <Text >Name:{data.name}</Text>
        <Text >Client:{data.client}</Text>
        <Text >Contractor:{data.contractor}</Text>
    
     
   
            </View>
          </View>
          <View style={styles.section}>
          <Image
        style={styles.image}
        src={img}
      />
          </View>
        </Page>
      </Document>
    );
};

export default PdfDocument;