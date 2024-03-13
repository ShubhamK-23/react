/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext ({
    todos:[ {
        id : 1,
        tod0 : 'todo msg',
        completed : false
    }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;