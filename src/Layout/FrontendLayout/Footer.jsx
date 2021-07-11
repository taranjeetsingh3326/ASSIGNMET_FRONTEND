import React from 'react';
import {Typography, Link} from '@material-ui/core';

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://localhost:3000/persons">
          Person Management
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    return (
        <>
           <Copyright/>
        </>
    );
}

export default Footer;