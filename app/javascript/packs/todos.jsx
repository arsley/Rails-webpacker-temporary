import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Todo = props => (
  <div className={'todo-' + props.value}>Hello todolist!</div>
);

document.addEventListener('DOMContentLoaded', _ => {
  ReactDOM.render(
    <Todo value="1" />,
    document.getElementById('app')
  );
})
