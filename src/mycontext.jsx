import { createContext } from "react";

export const MyContext=createContext(
  {
    todoItems:[],
    setTodoItem :()=>{}
  }
)