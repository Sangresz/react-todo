import { useRef, useState } from 'react'
import './App.css'
import Todo from './Todo'

interface todo {
  description: string,
  isDone: boolean
}

function App() {
  const [todos, setTodos] = useState<todo[]>([])
  const inputRef = useRef<HTMLInputElement>(null);

  const newTodo = () => {
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

  return (
    <div className='root'>
      <div className='main'>
        <h1>Todo App</h1>
        
        <div>
          <input id='input' ref={inputRef} type='text' />
          <button id='create-todo' onClick={newTodo}>New Todo</button>
        </div>

        <div className="list">
          {todos.map((todo, index) =>
            <Todo
              key={index}
              id={index}
              description={todo.description}
              isDone={todo.isDone}
              onDelete={deleteTodo}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
