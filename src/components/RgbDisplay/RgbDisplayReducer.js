import {  RGBDISPLAY_SUCCESS } from "../../Redux/Types";

const initialState = {
  red: null,
  green: null,
  blue: null,
};

const RgbDisplayReducer = (state = initialState, action) => {
  switch (action.type) {
    case RGBDISPLAY_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default RgbDisplayReducer;
