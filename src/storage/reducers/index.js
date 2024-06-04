// index.js pada page reducers

import { combineReducers } from "redux";
import dataLogin from "./dataLogin";

const rootReducer = combineReducers({
    dataLogin
});

export default rootReducer;