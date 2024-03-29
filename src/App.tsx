import React, { useRef, useState } from 'react'
import './App.css'
import Todo from './Todo'

interface todo {
  description: string,
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<todo[]>([])
  const inputRef = useRef<HTMLInputElement>(null);

  const newTodo = (event: React.FormEvent) => {
    event.preventDefault();
    const description = inputRef.current?.value;
    if (inputRef.current && description) {
      setTodos(prevTodos => [
        { description, completed: false },
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
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  }

  const updateTodo = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodos(prevTodos => prevTodos.map((todo, index) => {
      if (index === id) {
        return { ...todo, description: event.target.value };
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
              completed={todo.completed}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
