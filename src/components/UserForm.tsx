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

      <form className='user-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='user-form__form-group'>
          <label>First Name</label>
          <input {...register('firstName')} />
        </div>

        <div className='user-form__form-group'>
          <label>Last Name</label>
          <input {...register('lastName', { required: true })} />
          {errors.lastName && <p>Last name is required.</p>}
        </div>

        <div className='user-form__form-group'>
          <label>Age</label>
          <input {...register('age', { pattern: /\d+/ })} />
          {errors.age && <p>Please enter number for age.</p>}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default UserForm;
