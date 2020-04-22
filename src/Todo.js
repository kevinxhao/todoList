import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  //help from kirupa.com to create constructor
  constructor(props) {
      super(props);
      this.state = {
          completed: this.props.completed
      }
      this.completeTodo = this.completeTodo.bind(this);
  }
  completeTodo(event) {
      var apiKey = "858cc5-e41e20-114ef7-1f66fa-5d0de3";
      var todoId = event.target.parentNode.id;
      var self= this;
      var data = {
          completed: true
      };
      var completexhttp = new XMLHttpRequest();

      completexhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              self.setState({
                  completed: true
              });
          } else if (this.readyState == 4) {

              console.log(this.responseText);

          }
      };

      completexhttp.open("PUT", "https://cse204.work/todos/" + todoId, true);
      completexhttp.setRequestHeader("Content-type", "application/json");
      completexhttp.setRequestHeader("x-api-key", apiKey);
      completexhttp.send(JSON.stringify(data));

  }




  render() {
    var className = "todo";
    //testing if it's completed
  if (this.state.completed) {
    className = "todo completed";
  }
    return (
      <div id={this.props.id} className={className}>
       <button className="check" onClick={this.completeTodo}></button>
       <p>{this.props.text}</p>
      <span className="delete" onClick={this.props.deleteTask}>&times;</span>
     </div>
    );
  }
}



export default Todo;
