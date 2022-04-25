import { createStore } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
//*  *//
const Store = () => createStore(reducers, composeWithDevTools());
//*  *//
export const wrapper = createWrapper(Store);
