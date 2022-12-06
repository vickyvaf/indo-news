import { combineReducers } from "redux";
import { searchNewsReducer } from "./searchNews";
import { popularNewsReducer } from "./popularNews";
import { indonesiaNewsReducer } from "./indonesiaNews";
import { worldNewsReducer } from "./worldNews";

const rootReducer = combineReducers({
  searchNews: searchNewsReducer,
  popular: popularNewsReducer,
  indonesia: indonesiaNewsReducer,
  world: worldNewsReducer,
});

export default rootReducer;
