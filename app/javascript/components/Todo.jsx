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
  const list = props.todos.map((todo, i) =>
    <TodoItem key={i} content={todo.content} />
  );
  return list;
}

function CSRFTokenVerify(props) {
  axios.defaults.headers.common['X-CSRF-Token'] = props.token;
  return <input type="hidden" name="authenticity_token" value={props.token} readOnly={true} />
}

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(props.todos),
      newTodo: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  handleSubmit(event) {
    axios.post('/todos', {
      todo: { content: this.state.newTodo }
    })
    .then(function(response) {
      console.log('Created.');
    })
    .catch(function(error) {
      console.log('Bad request.');
    });

    this.setState({
      todos: [{ content: this.state.newTodo, finish: false }].concat(this.state.todos),
      newTodo: ''
    });
  }

  render() {
    return (
      <div className="todo-wrapper">
        <div className="todo-form">
          <CSRFTokenVerify token={this.props.csrf_token} />
          <label>
            Todo:
            <input type="text" value={this.state.newTodo} onChange={this.handleChange} />
          </label>
          <button onClick={this.handleSubmit} className="button">Add!</button>
        </div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
