import React from 'react'
import PropTypes from 'prop-types'

function TodoItem(props) {
  return (
    <div className="row todo-item">
      <p className="column todo-item-content tm">{props.content}</p>
      <button
        className="column column-20 button button-outline todo-item-finish tm"
        data-id={props.todoId}
      >
        Finish!
      </button>
    </div>
  );
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

    this.handleCreate = this.handleCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  handleCreate(event) {
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
    const lists = this.state.todos.map((todo, i) =>
      <TodoItem key={i} content={todo.content} todoId={todo.id} />
    );

    return (
      <div className="todo-wrapper">
        <div className="todo-form">
          <CSRFTokenVerify token={this.props.csrf_token} />
          <label>
            Todo:
            <input type="text" value={this.state.newTodo} onChange={this.handleChange} />
          </label>
          <button onClick={this.handleCreate} className="button">Add!</button>
        </div>
        <hr />
        {lists}
      </div>
    );
  }
}
