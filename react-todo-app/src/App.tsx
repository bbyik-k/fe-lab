import { memo, useCallback, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import type { Todo } from './types';
import UserPages from './pages/UserPage';

function App() {
  return <Layout />;
}

function Layout() {
  const [direction, setDirection] = useState<'row' | 'column'>('column');
  console.log('layout rendered');
  return (
    <div style={{ display: 'flex', flexDirection: direction }}>
      <div style={{ padding: '20px' }}>
        <h1>Todo app</h1>
        <button onClick={() => setDirection((prev) => (prev === 'column' ? 'row' : 'column'))}>레이아웃 변경</button>
      </div>
      <MemoizedTodoContainer />
    </div>
  );
}

const MemoizedTodoContainer = memo(TodoContainer);

function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = useCallback((newTodo: string) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: prevTodos.length + 1,
          text: newTodo,
          done: false,
        },
      ];
    });
  }, []);

  const onTogleTodo = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    });
  };

  console.log('Todo container rendered');

  return (
    <>
      <UserPages />
      {/* <TodoInput onAddTodo={onAddTodo} />
      <h1>Todo List</h1>
      <TodoList todos={todos} onTogleTodo={onTogleTodo} /> */}
    </>
  );
}

export default App;
