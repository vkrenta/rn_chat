import React, {FC} from 'react';
import {TextInput, CheckBox, Button, ScrollView, Alert} from 'react-native';

const RegisterScreen: FC = () => {
  return (
    <>
      <ScrollView>
        <TextInput placeholder="First Name" style={{borderWidth: 2}} />
        <TextInput placeholder="Last Name" style={{borderWidth: 2}} />
        <TextInput placeholder="UserName" style={{borderWidth: 2}} />
        <TextInput placeholder="Email" style={{borderWidth: 2}} />
        <TextInput placeholder="Password" style={{borderWidth: 2}} />
        <TextInput placeholder="Confirm password" style={{borderWidth: 2}} />
        <CheckBox />
        <Button
          title="Submit"
          onPress={() => {
            Alert.alert('You are successfully registered');
          }}
        />
        <Button title="Sign up with Facebook" onPress={() => {}} />
      </ScrollView>
    </>
  );
};

export default RegisterScreen;
