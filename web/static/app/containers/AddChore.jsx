import React from 'react';
import { connect } from 'react-redux';
import { addChore } from '../actions';

let AddChore = ({ dispatch }) => {
  let name, date;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!name.value.trim() || !date.value.trim()) {
          return;
        }
        dispatch(addChore(name.value, new Date(date.value)));
        name.value = '';
        date.value = '';
      }}>
        <input ref={node => {
          name = node;
        }} />
        <input type="date" ref={node => {
          date = node;
        }}/> 
        <button type="submit">
          Add Chore
        </button>
      </form>
    </div>
  )
}
AddChore = connect()(AddChore);

export default AddChore;
