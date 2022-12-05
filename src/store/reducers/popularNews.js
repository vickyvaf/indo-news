const indonesia = {
  popular: [],
  errorMsg: "",
  tag: "idle",
  // idle || loading || success || error || empty
};

export const popularNewsReducer = (state = indonesia, action) => {
  switch (state.tag) {
    case "idle": {
      switch (action.type) {
        case "FETCH": {
          return {
            ...state,
            tag: "loading",
          };
        }
        default: {
          return state;
        }
      }
    }
    case "loading": {
      switch (action.type) {
        case "FETCH_SUCCESS_POPULAR": {
          return {
            ...state,
            tag: "loaded",
            errorMsg: "",
            popular: action.payload.popular,
          };
        }
        case "FETCH_SUCCESS_INDONESIA": {
          return {
            ...state,
            tag: "loaded",
            errorMsg: "",
            // indonesiaDatas: action.payload.indonesiaDatas,
          };
        }
        case "FETCH_EMPTY": {
          return {
            ...state,
            tag: "empty",
            popular: [],
            errorMsg: "",
          };
        }
        case "FETCH_ERROR": {
          return {
            ...state,
            tag: "error",
            popular: [],
            errorMsg: action.payload.errorMsg,
          };
        }
        case "FINALLY": {
          return {
            ...state,
            tag: "loaded",
            // errorMsg: "",
            // popular: action.payload.datas,
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
