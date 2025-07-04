import { forwardRef, useRef, type FormEvent, type ForwardedRef, type InputHTMLAttributes } from 'react';

export default function JoinForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name: (nameRef.current as HTMLInputElement).value,
      email: (emailRef.current as HTMLInputElement).value,
      phone: (phoneRef.current as HTMLInputElement).value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input id='name' name='name' type='text' required ref={nameRef} />
      </div>
      <div>
        <Input id='email' name='email' type='email' required ref={emailRef} />
      </div>
      <div>
        <Input id='phone' name='phone' type='tell' required ref={phoneRef} />
      </div>
      <div>
        <button type='submit'>Join</button>
        <button type='reset'>Reset</button>
      </div>
    </form>
  );
}

const Input = forwardRef(function Input({ id, name, ...props }: InputHTMLAttributes<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) {
  console.log('input', name);
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input id={id} name={name} ref={ref} {...props} />
    </>
  );
});
