import { Path, UseFormRegister } from 'react-hook-form';

type InputProps<T> = {
  register: UseFormRegister<T>;
  name: Path<T>;
};

const Input = <T,>({ register, name, ...rest }: InputProps<T>) => {
  return <input {...register(name)} {...rest} />;
};

export default Input;
