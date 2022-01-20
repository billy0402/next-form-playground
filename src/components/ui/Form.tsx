import React from 'react';
import {
  DeepPartial,
  SubmitHandler,
  UnpackNestedValue,
  useForm,
} from 'react-hook-form';

type FormProps<T> = {
  defaultValues?: UnpackNestedValue<DeepPartial<T>>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
};

const Form = <T,>({ defaultValues, onSubmit, children }: FormProps<T>) => {
  const { handleSubmit, register } = useForm<T>({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
};

export default Form;
