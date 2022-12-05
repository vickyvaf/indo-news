import { combineReducers } from "redux";
import { searchNews } from "./searchNews";

const rootReducer = combineReducers({
  searchNews: searchNews
});

export default rootReducer;
