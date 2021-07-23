import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    container:{
        display: "flex",
    },
    flex: {
        flexBasis: "70%" ,
        maxWidth: "33%"
    },
  },
}));



export default function FormPropsTextFields() {
  const classes = useStyles();
  return(
      
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.container}>
          <div className={classes.flex}>
        <TextField  required id="outlined-required" label="Required" defaultValue="First Name" variant="outlined" />
        <TextField required id="outlined-required" label="Required" defaultValue="Last Name" variant="outlined"  />
        </div>
        </div>
        <div>
        <TextField required id="outlined-required" label="Required" defaultValue="E-Mail" variant="outlined" />
        <TextField required id="outlined-required" label="Required" defaultValue="Phone Number" variant="outlined"  />
        </div>
        <div>
        <TextField
          id="outlined-multiline-static"
          label="Required *"
          multiline
          rows={4}
          defaultValue="Job discription"
          variant="outlined"
        />
        </div>
        <div>
            <Button variant="contained" color="primary">Request Job</Button>
        </div>
    </form>

  )}




