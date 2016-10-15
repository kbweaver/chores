import React from 'react';
import ChoreList from '../containers/ChoreList';
import AddChore from '../containers/AddChore';
import NavBar from '../components/NavBar';

import './App.css';

const App = () => (
  <div>
    <NavBar />
    <AddChore />
    <ChoreList />
  </div>
);

export default App;
