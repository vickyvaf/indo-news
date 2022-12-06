const world = {
  world: [],
  errorMsg: "",
  tag: "idle",
  // idle || loading || success || error || empty
};

export const worldNewsReducer = (state = world, action) => {
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
        case "FETCH_SUCCESS_WORLD": {
          return {
            ...state,
            tag: "loaded",
            errorMsg: "",
            world: action.payload.world,
          };
        }
        case "FETCH_EMPTY_WORLD": {
          return {
            ...state,
            tag: "empty",
            world: [],
            errorMsg: "",
          };
        }
        case "FETCH_ERROR_WORLD": {
          return {
            ...state,
            tag: "error",
            world: [],
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
