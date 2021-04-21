import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FirstStepForm from "./FirstStepForm";
import SecondForm from "./SecondForm";
import {csvResult} from '../../Store/Actions/actionFIleResult'
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    default:
      return "Unknown stepIndex";
  }
}

const StepForm = () => {
  const classes = useStyles();
  const dispatch=useDispatch()
  const storeResult=(result,data) =>dispatch(csvResult(result,data))
  const [activeStep, setActiveStep] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [file, setFile] = useState();
  const [allDataCsv,setAllDataCsv]=useState([])
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    console.log(e.dataTransfer.files[0]);
  };
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    client: "",
    contractor: "",
  });
  const [filesValues, setFilesValues] = useState({
    max_X: "",
    min_X: "",
    max_Y: "",
    min_Y: "",
    max_Z: "",
    min_Z: "",
  });
  const parseStringToNumber = (arr, key) => {
    const FilterNumber = arr.map((ar) => parseFloat(ar[key]));
    // For remove unexpected result
    const removeUnexpected = FilterNumber.filter(
      (g, index) => index != FilterNumber.length - 1
    );
    return removeUnexpected;
  };
  const handleOnDrop = (data) => {
    console.log("---------------------------");
    console.log(data.data);
    const gol = data.map((d) => d.data);
    setAllDataCsv(gol)
    let numberX = parseStringToNumber(gol, "X");
    // let numberX=gol.map(f=>parseFloat(f.X))
    let numberY = parseStringToNumber(gol, "Y");
    let numberZ = parseStringToNumber(gol, "Z");
    const maxNumberX = Math.max(...numberX);
    const minNumberX = Math.min(...numberX);
    const maxNumberY = Math.max(...numberY);
    const minNumberY = Math.min(...numberY);
    const maxNumberZ = Math.max(...numberZ);
    const minNumberZ = Math.min(...numberZ);
    setFilesValues({
      ...filesValues,
      max_X: maxNumberX,
      min_X: minNumberX,
      max_Y: maxNumberY,
      min_Y: minNumberY,
      max_Z: maxNumberZ,
      min_Z: minNumberZ,
    });
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
  };

  const onChangeValues = (e) => {
    const newValues = {
      ...formValues,
    };
    newValues[e.target.name] = e.target.value;
    setFormValues(newValues);
  };
  function getSteps() {
    return [
      <FirstStepForm
        values={formValues}
        disabled={disabled}
        changedValues={onChangeValues}
      />,
      <SecondForm
        activeStep={activeStep}
        file={file}
        handleOnDrop={handleOnDrop}
        handleOnRemoveFile={handleOnRemoveFile}
        handleOnError={handleOnError}
        filesValues={filesValues}
        onFileChange={handleFileChange}
        values={filesValues}
      />,
    ];
  }
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(formValues);
    setDisabled(true);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setDisabled(false);
  };

  const handleSubmit = () => {
    const allInputValues={
    ...formValues,
    ...filesValues
    }
    storeResult(allInputValues,allDataCsv)
  };

  return (
    <div className={classes.root}>
      <Stepper className="stepperWrap" activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step className="stepItem" key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleSubmit}>Submit</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default StepForm;
