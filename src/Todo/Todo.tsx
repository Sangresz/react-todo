import './Todo.css'

export default function Todo({id, description, completed, onDelete, toggleTodo}: {id: number, description: string, completed: boolean, onDelete: Function, toggleTodo: Function}) {
  const descriptionClass = completed ? 'todo__description todo__done' : 'todo__description';
  
  return (
    <div className='todo'>
      <div className='todo__info'>
        <input className='checkbox' type='checkbox' checked={completed} onChange={() => toggleTodo(id, !completed)} />
        <div className={descriptionClass}>{description}</div>
      </div>
      <button className='delete-button' onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}