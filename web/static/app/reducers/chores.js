const chores = (state = { items: [] }, action) => {
  switch (action.type) {
    case 'RECEIVE_CHORES':
      return Object.assign({}, state, {
        items: action.chores,
        receivedAt: action.receivedAt,
      });
    case 'REQUEST_CHORES': // TODO: keep track of in-progress request
    default:
      return state;
  }
};

export default chores;
