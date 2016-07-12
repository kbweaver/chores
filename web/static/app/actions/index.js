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

export function addChore(name, date) {
  return dispatch => {
    return fetch('/api/chores', {
      method: 'POST',
      body: JSON.stringify({ chore: { name: name, date: date.toISOString() } }),
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      // TODO: optimistic updates?
      .then(() => dispatch(fetchChores()));
  }
}
