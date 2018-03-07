function clearAction(state) {
  return {
    ...state,
    action: null
  };
}

export default clearAction;
