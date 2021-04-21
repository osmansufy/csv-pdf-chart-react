import React, { useState } from 'react';
import { CSVReader } from 'react-papaparse';

const CsvFileRead=({handleOnRemoveFile,handleOnDrop,handleOnError})=> {



    return (
      <>
        <h5>Click and Drag Upload</h5>
        <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          onRemoveFile={handleOnRemoveFile}
          config={{
            header: true,
            fields :["KP","X","Y","Z"]
          }}
        >
          <span>Drop CSV file here or click to upload.</span>
          <ul>
          
          </ul>
        </CSVReader>
      </>
    );
  
}
export default CsvFileRead