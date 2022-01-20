import { Path, UseFormRegister } from 'react-hook-form';

type SelectProps<T> = {
  register: UseFormRegister<T>;
  options: T[];
  name: Path<T>;
};

const Select = <T,>({ register, options, name, ...rest }: SelectProps<T>) => {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;
