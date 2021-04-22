import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Image,
  PDFDownloadLink,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  tableHead: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#000000",
    color: "#ffff",
    padding: "10px",
    fontSize: "12px",
  },
  tableDaTa: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    color: "#0000",
    padding: "10px",
    fontSize: "12px",
  },
  tableWrapper: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 0",
  },
  image: {
    display: "flex",
    justifyContent: "center",
  },
});

const PdfDocument = ({ data, img, tableImg }) => {
  console.log(data);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.tableWrapper}>
            <View style={styles.tableHead}>
              <Text>Project Name</Text>
              <Text>Client Name</Text>
              <Text>Contractor Name</Text>
              <Text>Description</Text>
            </View>
            <View style={styles.tableDaTa}>
              <Text>{data.name}</Text>
              <Text>{data.client}</Text>
              <Text>{data.contractor}</Text>
              <Text>{data.description}</Text>
            </View>
          </View>
          <View style={styles.tableWrapper}>
            <View style={styles.tableHead}>
              <Text>Max X</Text>
              <Text>Min X</Text>
              <Text>Max Y</Text>
              <Text>Min Y</Text>
              <Text>Max Z</Text>
              <Text>Min Z</Text>
            </View>
            <View style={styles.tableDaTa}>
              <Text>{data.max_X}</Text>
              <Text>{data.min_X}</Text>
              <Text>{data.max_Y}</Text>
              <Text>{data.min_Y}</Text>
              <Text>{data.max_Z}</Text>
              <Text>{data.min_Z}</Text>
            </View>
          </View>
          <View style={styles.image}>
            <Image src={img} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
