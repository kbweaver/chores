const initialState = {
  items: [],
  isFetching: false,
}

const chores = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_CHORES':
      return Object.assign({}, state, {
        items: action.chores,
        isFetching: false,
      });
    case 'REQUEST_CHORES':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_NEW_CHORE':
      return Object.assign({}, state, {
        items: state.items.concat([action.newChore]),
      });
    default:
      return state;
  }
};

export default chores;
