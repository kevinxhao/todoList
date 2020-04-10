import React, {
    Component
} from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {


    render() {
        return (


          <div  className="header">
                <h1>To Do List</h1>
                <h4>Click the Box to Cross Out Completed Tasks!</h4>
                <div className = "other">
                <form id="newEntry">
        <input type="text" id="input" placeholder="Task..." />
        <button  id="submit">Add</button>
    </form>

    </div>
                </div>



          );
    }
}

export default App;
