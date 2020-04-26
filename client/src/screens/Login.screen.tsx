import React, {FC} from 'react';
import {View, TextInput, Button} from 'react-native';

const LoginScreen: FC = () => {
  return (
    <>
      <View>
        <TextInput placeholder="UserName or Email" />
        <TextInput placeholder="Password" />
        <Button title="Submit" onPress={() => {}} />
        <Button title="Sign up with Facebook" onPress={() => {}} />
      </View>
    </>
  );
};

export default LoginScreen;
