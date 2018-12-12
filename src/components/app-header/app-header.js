import React from 'react';
import './app-header.css';

const AppHeader = (props) => {
  const { toDo, done } = props
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <span>{ toDo } more to do, { done } done</span>
    </div>
  );
};

export default AppHeader;
