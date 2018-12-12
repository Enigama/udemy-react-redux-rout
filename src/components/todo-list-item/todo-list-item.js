import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    isImportant: false
  }

  onImportant = () => {
    this.setState((state) => {
      return {
        isImportant: !state.isImportant
      }
    })
  }
  handlerDone = () => {
    this.setState((state) => {
      return {
        done: !state.done
      }
    })
  }
  render() {
    const { label, onDelete } = this.props;
    const { done, isImportant } = this.state

    let classNames = 'todo-list-item'
    if (done) {
      classNames += ' done'
    }
    if (isImportant) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.handlerDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}

