import { useState, type FormEvent, type InputHTMLAttributes } from 'react';

export default function JoinForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
      email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
      phone: (e.currentTarget.elements.namedItem('phone') as HTMLInputElement).value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input id='name' name='name' type='text' required />
      </div>
      <div>
        <Input id='email' name='email' type='email' required />
      </div>
      <div>
        <Input id='phone' name='phone' type='tell' required />
      </div>
      <div>
        <button type='submit'>Join</button>
        <button type='reset'>Reset</button>
      </div>
    </form>
  );
}

function Input({ id, name, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) {
  const [value, setValue] = useState('');
  console.log('input', name);
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        name={name}
        {...props}
        type='text'
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </>
  );
}
