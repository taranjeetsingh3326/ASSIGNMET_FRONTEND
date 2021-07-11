import axios from "../../common/axios";
import ActionType from "../actionTypes";

const prefix = 'person';

export const getList = () => async (dispatch)  => {
    try {
        return await axios.get(`${prefix}`, {});
    } catch(err) {
        dispatch({
            type: ActionType.ALERT,
            payload: err
        });
        return false;
    }
};

export const getPersonDetail = (personId) => async (dispatch)  => {
    try {
        return await axios.get(`${prefix}/${personId}`, {});
    } catch(err) {
        dispatch({
            type: ActionType.ALERT,
            payload: err
        });
        return false;
    }
};

export const add = (payload) => async (dispatch)  => {
    try {
        let resp = await axios.post(`${prefix}`, payload, {});
        dispatch({
            type: ActionType.ALERT,
            payload: {
                statusCode:200,
                message : "Added Successfully."
            }
        });
        return resp;
    } catch(err) {
        dispatch({
            type: ActionType.ALERT,
            payload: err
        });
        return false;
    }
};

export const update = (id, payload) => async (dispatch)  => {
    try {
        let resp = await axios.put(`${prefix}/${id}`, payload, {});
        dispatch({
            type: ActionType.ALERT,
            payload: {
                statusCode:200,
                message : "Updated Successfully."
            }
        });
        return resp;
    } catch(err) {
        dispatch({
            type: ActionType.ALERT,
            payload: err
        });
        return false;
    }
};