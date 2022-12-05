import { combineReducers } from "redux";
import { searchNewsReducer } from "./searchNews";
import { popularNewsReducer } from "./popularNews";
import { indonesiaNewsReducer } from "./indonesiaNews";

const rootReducer = combineReducers({
  searchNews: searchNewsReducer,
  popular: popularNewsReducer,
  indonesia: indonesiaNewsReducer,
});

export default rootReducer;
