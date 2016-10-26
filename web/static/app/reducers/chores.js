import { Chore } from '../models/Chore';

const initialState = {
  items: [],
  isFetching: false,
};

const chores = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_CHORES':
      return Object.assign({}, state, {
        items: action.chores.map( chore => Chore(chore) ),
        isFetching: false,
      });
    case 'REQUEST_CHORES':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_NEW_CHORE':
      return Object.assign({}, state, {
        items: state.items.concat([Chore(action.newChore)]),
      });
    case 'REQUEST_CHORE_DELETION':
      return Object.assign({}, state, {
        items: state.items.map(item => {
          if (item.id === action.id) {
            return Object.assign({}, item, { deletionRequested: true });
          }
          return item;
        }),
      });
    case 'DELETE_CHORE':
      return Object.assign({}, state, {
        items: state.items.filter(item => action.id !== item.id),
      });
    default:
      return state;
  }
};

export default chores;
