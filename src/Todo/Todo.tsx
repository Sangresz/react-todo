import './Todo.css'

export default function Todo({id, description, isDone}: {id: number, description: string, isDone: boolean, onDelete: Function}) {
  return (
    <div>
      {id} {description} {isDone}
    </div>
  )
}