// Write your code here
import './index.css'

const TodoItem = ({todo, onDelete}) => {
  const {id, title} = todo

  return (
    <li className="todo-item">
      <p>{title}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  )
}

export default TodoItem
