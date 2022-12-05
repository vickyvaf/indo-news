const indonesia = {
  indonesia: [],
  errorMsg: "",
  tag: "idle",
  // idle || loading || success || error || empty
};

export const indonesiaNewsReducer = (state = indonesia, action) => {
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
        case "FETCH_SUCCESS_INDONESIA": {
          return {
            ...state,
            tag: "loaded",
            errorMsg: "",
            indonesia: action.payload.indonesia,
          };
        }
        case "FETCH_EMPTY": {
          return {
            ...state,
            tag: "empty",
            indonesia: [],
            errorMsg: "",
          };
        }
        case "FETCH_ERROR": {
          return {
            ...state,
            tag: "error",
            indonesia: [],
            errorMsg: action.payload.errorMsg,
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
