import React, { Component } from 'react';

import './item-status-filter.css';


export default class ItemStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All'},
    { name: 'active', label: 'Active'},
    { name: 'done', label: 'Done'}
  ]
  // handlerFilter = (e)=> {
  //   this.props.onFilter(e.target.value.toLowerCase())
  // }
  render() {
    const { filter, onFilter } = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      return (
        <button
          key={name}
          type='button'
          className={`btn ${isActive ? 'btn-info' : 'btn-outline-secondary'}`}
          onClick={()=> onFilter(name)}
          value={label}
        >
          {label}
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
