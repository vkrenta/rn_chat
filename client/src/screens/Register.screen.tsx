import React, { FC, useRef } from 'react';
import { Form } from 'native-base';
import RoundedInput from '../components/RoundedInput';
import FormButton from '../components/FormButton';
import { TRoundedInput } from 'src/types';
import { TextInputComponent } from 'react-native';
import { Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { signUp } from '../actions/index';

const RegisterScreen: FC = () => {
  const fNameInp = useRef<Input>(null);
  const lNameInp = useRef<Input>(null);
  const emailInp = useRef<Input>(null);
  const userInp = useRef<Input>(null);
  const passInp = useRef<Input>(null);
  const confInp = useRef<Input>(null);

  const firstName = () => fNameInp.current?.props.value;
  const lastName = () => lNameInp.current?.props.value;
  const email = () => emailInp.current?.props.value!;
  const password = () => passInp.current?.props.value!;
  const userName = () => userInp.current?.props.value!;

  const dispatch = useDispatch();
  return (
    <>
      <RoundedInput placeholder="First Name" ref={fNameInp} />
      <RoundedInput placeholder="Last Name" ref={lNameInp} />
      <RoundedInput placeholder="Username" ref={userInp} />
      <RoundedInput placeholder="Email" ref={emailInp} />
      <RoundedInput placeholder="Password" secure ref={passInp} />
      <RoundedInput placeholder="Confirm password" secure ref={confInp} />

      <FormButton
        onPress={() => {
          if (validateSignUpButton())
            dispatch(
              signUp({
                firstName: firstName(),
                lastName: lastName(),
                email: email(),
                password: password(),
                userName: userName(),
              }),
            );
        }}>
        Sing up
      </FormButton>
      <FormButton>Sing up via FB</FormButton>
    </>
  );
};

const validateSignUpButton = () => true;

export default RegisterScreen;
