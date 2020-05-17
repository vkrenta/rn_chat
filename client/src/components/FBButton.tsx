import React, { FC } from 'react';
import {useDispatch} from 'react-redux';
import FormButton from './FormButton';
import {signUpFb} from '../actions';

const FBButton: FC = () => {
  const dispatch = useDispatch();

  return (
    <FormButton 
      onPress={() => dispatch(signUpFb())}>
        Sign up via Facebook
    </FormButton>
  );
}

export default FBButton;