import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { User } from '@models/User';

const UserForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const onSubmit = (data: User) => console.log(data);

  return (
    <>
      <DevTool control={control} placement='top-right' />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} />
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}
        <input {...register('age', { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
        <input type='submit' />
      </form>
    </>
  );
};

export default UserForm;
