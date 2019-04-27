import React from 'react';
import deleteIcon from '../assets/delete.svg';
import './App.css';

const Item = props => {
  return (
    <div className="item">
      <span className="item-text">
        {props.elem.name}
      </span>
      <button className="button-icon" onClick={() => props.deleteItem(props.elem.position)}>
        <img src={deleteIcon} className="icon" alt="delete" />
      </button>
    </div>
  );
}

export default Item;
