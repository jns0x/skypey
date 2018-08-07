import React, { Component } from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import './App.css';
import store from "../store";
import _ from 'lodash';

const App = () => {
  const { contacts, user, activeUserId } = store.getState();
  // console.log(_.values(contacts));
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;
