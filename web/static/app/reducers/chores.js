const chore = (state, action) => {
  switch (action.type) {
    case 'ADD_CHORE':
      return {
        name: action.name,
      };
    default:
      return state
  }
};

const chores = (state = { items: [] }, action) => {
  switch (action.type) {
    case 'ADD_CHORE':
      return Object.assign({}, state, {
        items: [
          ...state.items,
          chore(undefined, action),
        ]
      });
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
