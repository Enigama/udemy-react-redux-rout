import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  handlerSubmit = (e) => {
    e.preventDefault()
    this.props.onAdd(this.state.label)
    this.setState({label: ''})
  }

  handlerChangeLabel = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  render() {
    return (
      <form className="item-add-form d-flex"
        onSubmit={this.handlerSubmit}
      >
        <input
          type="text"
          className="form-control"
          onChange={this.handlerChangeLabel}
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <button
          className="btn btn-outline-secondary"
        >
          Add Item
        </button>
      </form>
    )
  }
}
