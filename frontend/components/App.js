import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Walk the Cat',
          id: 15288170523890,
          completed: false
        },
        {
          name: 'Wash the Roof',
          id: 1528817063421,
          completed: false
        }

      ]
    }
  }

  handleAdd = (name, completed) => {

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedId){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1> TODO LIST </h1>
        <TodoList handleToggle = {this.handleToggle} todos = {todos}/>
        <Form handleAdd={this.handleAdd} />
        <button onClick = {this.handleClear}>Clear</button>
      </div>
    )
  }
}
