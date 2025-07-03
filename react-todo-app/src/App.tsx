import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import type { Todo } from './types';

function App() {
  return <TodoContainer />;
}

function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (newTodo: string) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: todos.length + 1,
          text: newTodo,
          done: false,
        },
      ];
    });
  };

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

  console.log('app rendered');

  return (
    <>
      <TodoInput onAddTodo={onAddTodo} />
      <h1>Todo List</h1>
      <TodoList todos={todos} onTogleTodo={onTogleTodo} />
    </>
  );
}

export default App;
