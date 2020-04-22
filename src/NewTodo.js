import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
      <div>
          <form id="newTask" onSubmit={this.props.add}>
              <input type="text" id="text" placeholder="Task..." value={this.props.input}  onChange={this.props.onChange}/>
              <button type="submit" onSubmit={this.props.add} id="add">Add</button >
          </form>
      </div>

    );
  }
}

export default NewTodo;
