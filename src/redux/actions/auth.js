import {ALERT} from "../actionTypes";



export const closeAlert = ( ) => {
    return {
        type: ALERT,
        payload: {}
    }
}

export const requestSuccess = () =>{
    return function(dispatch) {
        dispatch({
            type: ALERT,
            payload: {
                statusCode : 200,
                message : "Submit Request Successfully"
            }
        });
    }
}
//requestError

export const requestError = () =>{
    return function(dispatch) {
        dispatch({
            type: ALERT,
            payload: {
                statusCode : 401,
                message : "Submit Request Failed"
            }
        });
    }
}