import React, {
    Component
} from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  //help from kirupa.com to set up constructor and props
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            input: ''
        }
        this.add = this.add.bind(this);
        this.onChange = this.onChange.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.sort = this.sort.bind(this);
    }
    //saves data even after being refreshed: help from blog.pusher.com
    componentDidMount() {
        var apiKey = "858cc5-e41e20-114ef7-1f66fa-5d0de3";
        const thiss = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {

                var todos = JSON.parse(xhttp.responseText);
                thiss.setState({todos: todos});
                console.log(todos);
            }
        };

        xhttp.open("GET", "https://cse204.work/todos", true);
        xhttp.setRequestHeader("x-api-key", apiKey);
        xhttp.send();

    }
    //new tasks
    add(e) {
      var apiKey = "858cc5-e41e20-114ef7-1f66fa-5d0de3";
      var thiss = this;
        e.preventDefault();
        var data = {
          text: this.state.input
        }
        var addxhttp = new XMLHttpRequest();

    addxhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            thiss.setState({
                todos: [...thiss.state.todos, JSON.parse(this.responseText)]
            });
        } else if (this.readyState == 4) {
            console.log(this.responseText);
        }
    };

    addxhttp.open("POST", "https://cse204.work/todos", true);
    addxhttp.setRequestHeader("Content-type", "application/json");
    addxhttp.setRequestHeader("x-api-key", apiKey);
    addxhttp.send(JSON.stringify(data));

        this.setState({input: ''});
    }


    onChange(e) {
        this.setState({
            input: e.target.value
        });
    }

    //deleting todos
    deleteTask(event) {
        var apiKey = "858cc5-e41e20-114ef7-1f66fa-5d0de3";
        var todoId = event.target.parentNode.id;
        var thiss = this;
        var deletexhttp = new XMLHttpRequest();
        deletexhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              //keeps the other todos
                const otherTasks = thiss.state.todos.filter((todo) => {
                    if (todo.id !== todoId) {
                        return todo;
                    }});
                thiss.setState({
                    todos: otherTasks
                });
            } else if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };

        deletexhttp.open("DELETE", "https://cse204.work/todos/" + todoId, true);
        deletexhttp.setRequestHeader("Content-type", "application/json");
        deletexhttp.setRequestHeader("x-api-key", apiKey);
        deletexhttp.send();
    }

    //use sort function from w3schools
    sort(){
      var todos = this.state.todos;
      todos.sort(function (a, b) {
        return a.text.localeCompare(b.text);
      })
      this.setState({todos: todos});

    }
    render() {
        return (

            <section id = "todos" >
            <div className="header">
            <h1>To Do List</h1>
            <h4>Click the Box to Cross Out Completed Tasks!</h4>

            <NewTodo add = {this.add}
            onChange = {this.onChange}
            updateTodo = {this.updateTodo}
            input = {this.state.input}/>
            <button onClick = {this.sort} id="sort"> Sort </button>
            </div>

            {this.state.todos.map((todo) =>
                    <Todo key = {todo.id}
                    id = {todo.id}
                    completed = {todo.completed}
                    text = {todo.text}
                    deleteTask = {this.deleteTask}
                    />)}
            </section>
        );
    }

}

export default App;
