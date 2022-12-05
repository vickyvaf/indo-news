const search = {
  datas: [],
  searchInputValue: "",
  errorMsg: "",
  tag: "idle",
  // idle || loading || success || error || empty
};

export const searchNewsReducer = (state = search, action) => {
  switch (state.tag) {
    case "idle": {
      switch (action.type) {
        case "SEARCH_FETCH": {
          return {
            ...state,
            tag: "loading",
          };
        }
        case "SEARCH_INPUT": {
          return {
            ...state,
            // tag: "loading",
            searchInputValue: action.payload.searchInputValue,
          };
        }
        case "SEARCH_SUBMIT": {
          return {
            ...state,
            tag: "loading",
            searchInputValue: action.payload.searchInputValue,
          };
        }
        default: {
          return state;
        }
      }
    }
    case "loading": {
      switch (action.type) {
        case "SEARCH_FETCH_SUCCESS": {
          return {
            ...state,
            tag: "loaded",
            errorMsg: "",
            datas: action.payload.datas,
            searchInputValue: "",
          };
        }
        case "SEARCH_FETCH_EMPTY": {
          return {
            ...state,
            tag: "empty",
            datas: [],
            errorMsg: "",
            searchInputValue: "",
          };
        }
        case "SEARCH_FETCH_ERROR": {
          return {
            ...state,
            tag: "error",
            datas: [],
            errorMsg: action.payload.errorMsg,
            searchInputValue: "",
          };
        }
        default: {
          return state;
        }
      }
    }
    case "loaded": {
      switch (action.type) {
        case "FETCH": {
          return {
            ...state,
            tag: "loading",
          };
        }
        case "SEARCH_INPUT": {
          return {
            ...state,
            // tag: "loading",
            searchInputValue: action.payload.searchInputValue,
          };
        }
        case "SEARCH_SUBMIT": {
          return {
            ...state,
            tag: "loading",
            searchInputValue: action.payload.searchInputValue,
          };
        }
      }
    }
    case "error": {
      switch (action.type) {
        case "FETCH": {
          return {
            ...state,
            tag: "loading",
          };
        }
        case "SEARCH_INPUT": {
          return {
            ...state,
            tag: "loading",
            searchInputValue: action.payload,
          };
        }
        case "SEARCH_SUBMIT": {
          return {
            ...state,
            tag: "loading",
            searchInputValue: action.payload,
            datas: action.payload.datas,
          };
        }
        default: {
          return state;
        }
      }
    }
    case "empty": {
      switch (action.type) {
        case "FETCH": {
          return {
            ...state,
            tag: "loading",
          };
        }
        case "SEARCH_INPUT": {
          return {
            ...state,
            tag: "loading",
            searchInputValue: action.payload.searchInputValue,
          };
        }
        case "SEARCH_SUBMIT": {
          return {
            ...state,
            tag: "loading",
            searchInputValue: action.payload.searchInputValue,
            datas: action.payload.datas,
          };
        }
        default: {
          return state;
        }
      }
    }
    default: {
      return state;
    }
  }
};
