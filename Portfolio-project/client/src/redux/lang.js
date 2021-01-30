export default (state="en", action) => {
    switch (action.type) {
      case "SET_LANG":
        return {lang:action.lang}
      default:
        return state;
    }
  };
  