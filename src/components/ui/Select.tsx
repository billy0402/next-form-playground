import { Path, UseFormRegister } from 'react-hook-form';

type SelectProps<T> = {
  register?: UseFormRegister<T>;
  name: Path<T>;
  options: Pick<HTMLOptionElement, 'label' | 'value'>[];
};

const Select = <T,>({ register, options, name, ...rest }: SelectProps<T>) => {
  return (
    <select {...(register && register(name))} {...rest}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
