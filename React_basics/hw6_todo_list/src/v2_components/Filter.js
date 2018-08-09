import React from 'react';

const Filter = props => {
  return (
    <div className = "Filter" >
      <button
        onClick={()=>{
          props.setFilter('all')
        }}
        disabled = {props.currentFilter === 'all'}
      >
      All
      </button>

      <button
        onClick={()=>{
          props.setFilter('active')
        }}
        disabled = {props.currentFilter === 'active'}
      >
      Active
      </button>
      
      <button
        onClick={()=>{
          props.setFilter('completed')
        }}
        disabled = {props.currentFilter === 'completed'}
      >
      Completed
      </button>
    </div>
  )
}
