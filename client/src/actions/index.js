export function addChore(name) {
  return {
    type: 'ADD_CHORE',
    name,
  };
}

function requestChores() {
  return {
    type: 'REQUEST_CHORES',
  };
}

function receiveChores(json) {
  return {
    type: 'RECEIVE_CHORES',
    chores: json.data,
    receivedAt: Date.now(),
  };
}

export function fetchChores() {
  return dispatch => {
    dispatch(requestChores());
    return fetch('/api/chores')
      .then(response => response.json())
      .then(json => dispatch(receiveChores(json)));
  };
}
