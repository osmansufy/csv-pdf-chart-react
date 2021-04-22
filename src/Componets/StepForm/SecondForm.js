import { TextField,Input } from '@material-ui/core';
import React, { useState } from 'react';
import CsvFileRead from '../CsvFileRead/CsvFileRead';

const SecondForm = ({handleOnDrop,handleOnRemoveFile,handleOnError,filesValues,activeStep}) => {
    
    return (
        <div className={activeStep ? "d-block":"d-none"}>
           <CsvFileRead handleOnDrop={handleOnDrop} handleOnError={handleOnError} handleOnRemoveFile={handleOnRemoveFile} />
           <div className="secondStepContainer">
           <TextField
        id="filled-secondary"
        label="Max X"
        variant="filled"
        color="secondary"
        value={filesValues.max_X}
        readOnly
      />
              <TextField
        id="filled-secondary"
        label="Min X"
        variant="filled"
        color="secondary"
        value={filesValues.min_X}
        readOnly
      />
              <TextField
        id="filled-secondary"
        label="Max Y"
        variant="filled"
        color="secondary"
        value={filesValues.max_Y}
        readOnly
      />
              <TextField
        id="filled-secondary"
        label="Min Y"
        variant="filled"
        color="secondary"
        value={filesValues.min_Y}
        readOnly
      />
              <TextField
        id="filled-secondary"
        label="Max Z"
        variant="filled"
        color="secondary"
        value={filesValues.max_Z}
        readOnly
      />
              <TextField
        id="filled-secondary"
        label="Min Z"
        variant="filled"
        color="secondary"
        value={filesValues.min_Z}
        readOnly
      />
           </div>
             
        </div>
    );
};

export default SecondForm;