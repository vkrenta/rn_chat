import React, {FC} from 'react';
import {Form} from 'native-base';
import RoundedInput from '../components/RoundedInput';
import FormButton from '../components/FormButton';

const RegisterScreen: FC = () => {
  return (
    <>
      <Form>
        <RoundedInput placeholder="First Name" />
        <RoundedInput placeholder="Last Name" />
        <RoundedInput placeholder="Username" />
        <RoundedInput placeholder="Email" />
        <RoundedInput placeholder="Password" secure />
        <RoundedInput placeholder="Confirm password" secure />

        <FormButton>Sing up</FormButton>
        <FormButton>Sing up via FB</FormButton>
      </Form>
    </>
  );
};

export default RegisterScreen;
