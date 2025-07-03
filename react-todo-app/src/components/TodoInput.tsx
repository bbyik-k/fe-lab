import { useState, type ChangeEvent } from 'react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

export default function TodoInput({ onAddTodo }: TodoInputProps) {
  const [newTodo, setNewTodo] = useState<string>('');
  const handleAddTodo = () => {
    onAddTodo(newTodo);
    setNewTodo('');
  };
  console.log('todo input rendered');
  return (
    <>
      <div>
        <input type='text' value={newTodo} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>추가</button>
      </div>
    </>
  );
}
