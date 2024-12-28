import 'bootstrap/dist/css/bootstrap.css';
import TopItemes from './TopItemes';
import TaskItemes from './TaskItemes';

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { MyContext } from './mycontext';


function App() {
  const [todoItem, setTodoItem] = useState([
    {
      id: 1,
      task: "کار شماره 1",
      active: false,

    },
    {
      id: 2,
      task: "کار شماره 2",
      active: false,
    },
    {
      id: 3,
      task: "کار شماره 3",
      active: true,
    },

  ]);


  return (
    <div className="container w-100 h-100 p-4">
      <div className="row h-100 justify-content-center align-align-items-start">
        <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h-fit">
          <MyContext.Provider value={{ todoItem, setTodoItem }}>
            <TopItemes />
            <TaskItemes />
          </MyContext.Provider>



        </div>
      </div>
    </div>
  );
}



export default App;
