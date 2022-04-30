import useTodoActions from '../Hooks/useTodoActions';
import { Todo } from '../modules/todos';
import './TodoItem.css';


interface TodoItemProps {
    todo: Todo;
}

const TodoItem = ({todo}: TodoItemProps) => {
    const {onToggle, onRemove} = useTodoActions(todo.id);

    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className="text" onClick={onToggle}>
                {todo.text}
            </span>
            <span className="remove" onClick={onRemove}>
                (X)
            </span>
        </li>
    );
}

export default TodoItem;