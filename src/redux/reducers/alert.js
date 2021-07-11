import { ALERT } from "../actionTypes";

const initialState = {
  message: '', 
  statusCode: 200
}

const alert = (state = initialState, action) => {
  switch (action.type) {
    case ALERT: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}

export default alert;
