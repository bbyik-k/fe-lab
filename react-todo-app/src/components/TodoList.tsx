import type { Todo } from '../types';
import Checkbox from './Checkbox';

interface TodoListProps {
  todos: Todo[];
  onTogleTodo: (id: number) => void;
}

export default function TodoList({ todos, onTogleTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        // <TodoList todo={todo} onTogleTodo={onTogleTodo} />
        <li key={todo.id}>
          <Checkbox //
            id={`todo-${todo.id}`}
            label={todo.text}
            checked={todo.done}
            onChange={() => onTogleTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}
