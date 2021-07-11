import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin : 100
    }
  }));

const Add = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <ArrowBackIcon /> Back
            Add Person
        </Grid>
    );
}

export default Add;

 