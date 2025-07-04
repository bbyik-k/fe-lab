import { useEffect, useMemo, useState, type ChangeEvent } from 'react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const generateLargeDataset = (size: number) => {
  return Array.from({ length: size }, (_, i) => ({
    id: i + 1,
    text: `할 일 ${i + 1}`,
    done: i % 2 === 0,
  }));
};

const largeDataset = generateLargeDataset(10);

export default function TodoInput({ onAddTodo }: TodoInputProps) {
  const [newTodo, setNewTodo] = useState<string>('');
  const [showDone, setShowDone] = useState<boolean>(false);

  useEffect(() => {
    console.log('onAddTodo changed!');
  }, [onAddTodo]);

  const handleAddTodo = () => {
    onAddTodo(newTodo);
    setNewTodo('');
  };

  const filteredLargeDataset = useMemo(() => {
    console.log('filtering large dataset...');
    // return largeDataset.filter((todo) => todo.done);
    return largeDataset.filter((todo) => (showDone ? todo.done : !todo.done));
  }, [showDone]);
  // filteredLargeDataset();

  console.log('todo input rendered');
  return (
    <>
      <button onClick={() => setShowDone((prev) => !prev)}>{showDone ? '안 한 일 보기' : '완료한 일 보기'}</button>
      <ul>
        {filteredLargeDataset.map((todo) => (
          <li key={todo.id}>
            {todo.text} {todo.done ? '✅' : ''}
          </li>
        ))}
      </ul>
      <div>
        <input type='text' value={newTodo} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>추가</button>
      </div>
    </>
  );
}
