import React, { FC } from 'react';
import { View, EventEmitter } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import FormButton from './FormButton';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../actions';
import { Toast } from 'native-base';

type FBButtonProps = {
  login?: boolean;
};

const FBButton: FC<FBButtonProps> = (props) => {
  const dispatch = useDispatch();
  return (
    <FormButton
      onPress={async () => {
        try {
          const result = await LoginManager.logInWithPermissions([
            'public_profile',
            'email',
          ]);
          if (result.isCancelled) return console.log('login canceled');

          const { accessToken } = Object(
            await AccessToken.getCurrentAccessToken(),
          );
          const response = await fetch(
            'https://graph.facebook.com/v5.0/me?fields=email,name&access_token=' +
              accessToken,
          );
          const {
            email,
            name,
          }: { email: string; name: string } = await response.json();

          const [firstName, lastName] = name.split(' ');

          dispatch(setCredentials({ email, firstName, lastName }));
        } catch (error) {
          console.log(error);
        }
      }}>
      {props.login ? 'Sign in via FB' : 'Sing up via FB'}
    </FormButton>
  );
};

export default FBButton;
