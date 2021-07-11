import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

const Index = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header {...props} />
                {props.children}
            <Footer/>
        </ThemeProvider>
    );
}

export default Index;