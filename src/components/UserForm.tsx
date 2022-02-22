import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import Form from '@components/ui/Form';
import Input from '@components/ui/Input';
import Select from '@components/ui/Select';
import { User } from '@models/User';

const UserForm = () => {
  const { control } = useForm<User>();
  const onSubmit = (data: User) => console.log(data);

  return (
    <>
      <DevTool control={control} placement='top-right' />

      <Form<User> onSubmit={onSubmit}>
        <Input<string> name='firstName' />
        <Input<string> name='lastName' />
        <Select<string>
          name='sex'
          options={[
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' },
          ]}
        />

        <button>Submit</button>
      </Form>
    </>
  );
};

export default UserForm;
