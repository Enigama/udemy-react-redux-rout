import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  };

  handlerAddItem = () => {
    const newItem = {
      label: 'Hello world',
      important: false,
      id: this.maxId++
    }
    this.setState((state) => {
      const { todoData } = state
      let newTodoData = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newTodoData
      }
    })
  }

  handlerDeleteItem = (id) => {
    this.setState((state) => {
      const { todoData } = state
      const idx = todoData.findIndex((el) => el.id === id)
      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newTodoData
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDelete={this.handlerDeleteItem}
        />

        <ItemAddForm onAdd={this.handlerAddItem}/>
      </div>
    );
  }
};
