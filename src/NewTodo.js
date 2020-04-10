// import React, { Component } from 'react';
// import './NewTodo.css';
//
// class NewTodo extends Component {
//   render() {
//     return (
//
//       <div className="todoList">
//           <form className="newEntry">
//               <input type="text" className="input" placeholder="Task..." />
//               <button  id="submit">Add</button>
//           </form>
//
//       </div>
//
//     );
//   }
// }
//
// export default NewTodo;
import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
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

export default NewTodo;
