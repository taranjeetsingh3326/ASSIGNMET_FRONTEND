import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Card, CardContent, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddPerson from "./AddPerson";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding : 100
    }
  }));

const Add = (props) => {
    const classes = useStyles();
    const {id} = props.match.params;

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <IconButton  
                    color={"primary"}
                    aria-label="Go to Person List"
                    onClick={()=>{
                        props.history.push('/persons');
                    }}
                >
                    <ArrowBackIcon /> <span style={{fontSize:16}} >Back to Person List</span>
                </IconButton>
            </Grid>
            <Grid item xs={12}>
                <Card >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2"  >
                            {id ? 'Edit' : 'Add'} Person
                        </Typography>
                        <AddPerson {...props} id={id} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Add;

 