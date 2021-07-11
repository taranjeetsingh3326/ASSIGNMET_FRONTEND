import React from 'react';
import Typography from '@material-ui/core/Typography';
import {AppBar, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = ( props ) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            CRUD Operations
          </Typography>
        </Toolbar>
      </AppBar>
        </React.Fragment>
    );
}

export default Header;