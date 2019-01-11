import React, { Component } from 'react';

import './item-status-filter.css';


export default class ItemStatusFilter extends Component {
  handlerFilter = (e)=> {
    this.props.onFilter(e.target.value.toLowerCase())
  }
  render() {
    const button = [
        { id: '1', label: 'All',  modifier: 'btn btn-info'},
        { id: '2', label: 'Active',  modifier: 'btn btn-outline-secondary'},
        { id: '3', label: 'Done',  modifier: 'btn btn-outline-secondary'}
    ]

    const buttons = button.map((el) => {
      return (
        <button
          key={el.id}
          className={el.modifier}
          onClick={this.handlerFilter}
          value={el.label}
        >
          {el.label}
        </button>
      )
    });

    return (
      <div className="btn-group">
        { buttons }
      </div>
    );
  }
}
