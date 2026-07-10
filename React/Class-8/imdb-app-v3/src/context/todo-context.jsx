import React, {createContext} from 'react'

const TodoContext = createContext({
    todos: []
})

export const TodoContextProvider = (props) => {

    const context = {
        todos: ["Go to Swimming","Learn Context API"]
    }

  return (
      <TodoContext.Provider value={context}>
        {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContext;