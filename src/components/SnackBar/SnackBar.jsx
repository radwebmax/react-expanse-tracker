import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from './styles';
 

const CustomizedSnackBar = ({open, setOpen}) => {
    const classes = useStyles();


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return ;
        setOpen(false);
    }
  return (
    <div className={classes.root}>
        <Snackbar
            anchorOrigin={{vertical:'bottom', horizontal:'right'}}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <MuiAlert 
            onClose={handleClose} 
            severity="success"
            elevation={6}
            variant="filled"
            >
                Transaction is succesfull
            </MuiAlert>
        </Snackbar>
    </div>
  )
}

export default CustomizedSnackBar

