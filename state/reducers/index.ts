import { combineReducers } from "redux";
import ConnectReducers from "./ConnectReducers";
// import ContractReducers from "./ContractReducers";
//*  *//
const reducers = combineReducers({
    ConnectReducers,
    // ContractReducers,
});
//*  *//
export default reducers;
