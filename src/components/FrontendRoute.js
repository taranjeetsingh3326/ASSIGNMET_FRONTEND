import React from 'react'
import {Redirect} from 'react-router-dom'
import FrontendLayout from "../Layout/FrontendLayout";

const isUserAuthenticated = (isPrivate) => {
    if (isPrivate) {
        return false;//Need to check auth here
    }
    return true;
}

const FrontendRoute = (props) => (
    <FrontendLayout {...props} >
        {isUserAuthenticated(props.isPrivate) ? props.children : <Redirect to={'/login'}/>}
    </FrontendLayout>
)

export default FrontendRoute;