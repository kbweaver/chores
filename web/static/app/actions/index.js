function requestChores() {
  return {
    type: 'REQUEST_CHORES',
  };
}

function receiveChores(json) {
  return {
    type: 'RECEIVE_CHORES',
    chores: json.data,
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

function receiveNewChore(json) {
  return {
    type: 'RECEIVE_NEW_CHORE',
    newChore: json.data,
  };
}

export function addChore(name, date) {
  return dispatch => {
    // TODO: dispatch an action indicating that a new chore has been sent to the
    // server.
    return fetch('/api/chores', {
      method: 'POST',
      body: JSON.stringify({ chore: { name: name, date: date.toISOString() } }),
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then(response => response.json())
      .then(json => dispatch(receiveNewChore(json))); // TODO: error handling
  }
}

function requestChoreDeletion(id) {
  return {
    type: 'REQUEST_CHORE_DELETION',
    id,
  };
}

function deleteChoreSuccess(id) {
  return {
    type: 'DELETE_CHORE',
    id,
  };
}

export function deleteChore(id) {
  return dispatch => {
    dispatch(requestChoreDeletion(id));
    return fetch(`/api/chores/${id}`, {
      method: 'DELETE',
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then(json => dispatch(deleteChoreSuccess(id))); // TODO: error handling
  }
}
