import './Todo.css'

export default function Todo({id, description, completed, deleteTodo, toggleTodo, updateTodo}: {id: number, description: string, completed: boolean, deleteTodo: Function, toggleTodo: Function, updateTodo: Function}) {
  const descriptionClass = completed ? 'todo__description todo__done' : 'todo__description';
  
  return (
    <div className='todo'>
      <div className='todo__info'>
        <input className='checkbox' type='checkbox' checked={completed} onChange={() => toggleTodo(id, !completed)} />
        <input type='text' onChange={updateTodo(id)} className={descriptionClass} value={description}/>
      </div>
      <button className='delete-button' onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  )
}