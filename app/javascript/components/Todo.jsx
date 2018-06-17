import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Todo extends React.Component {
  render() {
    return (
      <div className="todo-wrapper">
        <p className={'todoitem' + this.props.id}>Contents here.</p>
      </div>
    );
  }
}
