import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const FirstStepForm=({values,changedValues,disabled})=> {
  const classes = useStyles();
  return (
      <div className="formContainer">

     
    <form className={`${classes.root}`}  autoComplete="off">
  
      <TextField
        id="filled-secondary"
        label="Project Name"
        variant="filled"
        color="secondary"
        value={values.name}
        disabled={disabled}
        name="name"
        onChange={changedValues}
      />
      <br/>
      <TextField
        id="filled-secondary"
        label="Project Description"
        variant="filled"
        color="secondary"
        multiline
        rows={4}
        value={values.description}
        name="description"
        disabled={disabled}
        onChange={changedValues}
      />
      <br/>
      <TextField
        id="filled-secondary"
        label="Client"
        variant="filled"
        color="secondary"
        value={values.client}
        name="client"
        disabled={disabled}
        onChange={changedValues}
      />
      <br/>
      <TextField
        id="filled-secondary"
        label="Contractor"
        variant="filled"
        value={values.contractor}
        name="contractor"
   
        disabled={disabled}
        onChange={changedValues}
        color="secondary"
      />
  
    </form>
    </div>
  );
}
export default FirstStepForm