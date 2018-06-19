import React from 'react'
import PropTypes from 'prop-types'

function TodoItem(props) {
  return (
    <div className="todoitem">
      <p className="todoitem-content">{props.content}</p>
    </div>
  );
}

function TodoList(props) {
  const todos = JSON.parse(props.todos);
  const list  = todos.map((todo, i) =>
    <TodoItem key={i} content={todo.content} />
  );
  return list;
}


export default class Todo extends React.Component {
  render() {
    return (
      <div className="todo-wrapper">
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}
