import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

  render() {
    var className = "todo";
    //testing if it's completed
  if (this.state.completed) {
    className = "todo completed";
  }
    return (
            <div className="todoList">
                <form className="newEntry">
                    <input type="text" className="input" placeholder="Task..." />
                    <button  id="submit">Add</button>
                </form>

            </div>
    );
  }
}



export default Todo;
