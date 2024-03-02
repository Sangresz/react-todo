import './Todo.css'

export default function Todo({id, description, isDone, onDelete, toggleTodo}: {id: number, description: string, isDone: boolean, onDelete: Function, toggleTodo: Function}) {
  const descriptionClass = isDone ? 'todo__description todo__done' : 'todo__description';
  
  return (
    <div className='todo'>
      <div className='todo__info'>
        <input className='checkbox' type='checkbox' checked={isDone} onChange={() => toggleTodo(id, !isDone)} />
        <div className={descriptionClass}>{description}</div>
      </div>
      <button className='delete-button' onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}