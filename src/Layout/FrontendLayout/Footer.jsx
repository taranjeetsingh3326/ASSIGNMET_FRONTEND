import React from 'react';
import {Typography, Link} from '@material-ui/core';

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    return (
        <>
          <div>FOOTER</div>
           <Copyright/>
        </>
    );
}

export default Footer;