import React, { FC, useRef } from 'react';
import { Form } from 'native-base';
import RoundedInput from '../components/RoundedInput';
import FormButton from '../components/FormButton';
import { TRoundedInput } from 'src/types';

const RegisterScreen: FC = () => {
  const fNameInp = useRef(null);
  return (
    <>
      <RoundedInput placeholder='First Name' ref={fNameInp} />
      <RoundedInput placeholder='Last Name' />
      <RoundedInput placeholder='Username' />
      <RoundedInput placeholder='Email' />
      <RoundedInput placeholder='Password' secure />
      <RoundedInput placeholder='Confirm password' secure />

      <FormButton>Sing up</FormButton>
      <FormButton>Sing up via FB</FormButton>
    </>
  );
};

export default RegisterScreen;
