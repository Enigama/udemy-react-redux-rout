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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ]
  };

  createTodoItem (label){
    return{
      label,
      isImportant: false,
      done: false,
      id: this.maxId++
    }
  }

  handlerAddItem = (text) => {
    const newItem = this.createTodoItem(text)
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

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const doneItem = arr[idx]
    const newTodoItem = {
      ...doneItem,
      [propName]: !doneItem.propName
    }

    return [
      ...arr.slice(0, idx),
      newTodoItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'isImportant')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'done')
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
    const { todoData } = this.state
    const doneCount = todoData.filter( (item) => item.done).length
    const todoCount = todoData.length - doneCount
    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDelete={this.handlerDeleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm onAdd={this.handlerAddItem}/>
      </div>
    );
  }
};
