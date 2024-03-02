import React, { useRef, useState } from 'react'
import './App.css'
import Todo from './Todo'

interface todo {
  description: string,
  isDone: boolean
}

function App() {
  const [todos, setTodos] = useState<todo[]>([])
  const inputRef = useRef<HTMLInputElement>(null);

  const newTodo = (event: React.FormEvent) => {
    event.preventDefault();
    const description = inputRef.current?.value;
    if (inputRef.current && description) {
      setTodos(prevTodos => [
        { description, isDone: false },
        ...prevTodos
      ]);
      inputRef.current.value = '';
    }
  }

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter((_, index) => index !== id));
  }

  const toggleTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.map((todo, index) => {
      if (index === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    }));
  }

  return (
    <div className='root'>
      <div className='main'>
        <h1>React Todo App</h1>
        
        <form onSubmit={newTodo}>
          <input id='input' ref={inputRef} type='text' autoComplete="off" />
          <button id='create-todo'>New Todo</button>
        </form>

        <div className="list">
          {todos.map((todo, index) =>
            <Todo
              key={index}
              id={index}
              description={todo.description}
              isDone={todo.isDone}
              onDelete={deleteTodo}
              toggleTodo={toggleTodo}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
